import { models } from 'powerbi-client'
import { PowerBIEmbed } from 'powerbi-client-react'
import React, { useCallback, useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import Loader from '@/components/Loader'
import { powerBiConfig } from '@/constants/homeData'

interface PowerBIFilter {
    $schema: string
    target: {
        table: string
        column: string
    }
    operator: string
    values: string[]
}

interface PowerBIReport {
    removeFilters: () => Promise<void>
    setFilters: (filters: PowerBIFilter[]) => Promise<void>
    getActivePage: () => Promise<{
        getVisuals: () => Promise<Array<{
            name: string
            type: string
            title: string
            exportData: (type: models.ExportDataType, rows: number) => Promise<{ data: string }>
        }>>
    }>
}

const Supplier = () => {
    const navigate = useNavigate()
    const [report, setReport] = useState<PowerBIReport | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<string>("")
    const [selectedSupplier, setSelectedSupplier] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [visuals, setVisuals] = useState<string[]>([])
    const reportRef = useRef<PowerBIReport | null>(null)

    // Generate array of months
    const months = [
        { value: "Jan", label: "January" },
        { value: "Feb", label: "February" },
        { value: "Mar", label: "March" },
        { value: "Apr", label: "April" },
        { value: "May", label: "May" },
        { value: "Jun", label: "June" },
        { value: "Jul", label: "July" },
        { value: "Aug", label: "August" },
        { value: "Sep", label: "September" },
        { value: "Oct", label: "October" },
        { value: "Nov", label: "November" },
        { value: "Dec", label: "December" }
    ]

    // Generate array of years (current year and 2 years back)
    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 3 }, (_, i) => ({
        value: (currentYear - i).toString(),
        label: (currentYear - i).toString()
    }))

    const handleReportLoad = useCallback((loadedReport: any) => {
        setReport(loadedReport)
        reportRef.current = loadedReport
        setIsLoading(false)
        // Get visuals when report is loaded
        getAvailableVisuals(loadedReport)
    }, [])

    const getAvailableVisuals = async (report: any) => {
        try {
            const page = await report.getActivePage()
            const pageVisuals = await page.getVisuals()
            
            // Get names of all visuals
            const visualNames = pageVisuals.map((visual: any) => visual.name)
            console.log('Available visuals:', visualNames)
            setVisuals(visualNames)
        } catch (error) {
            console.error('Error getting visuals:', error)
        }
    }

    const applyFilters = () => {
        if (!report) return

        const filters: PowerBIFilter[] = []

        // Location filter
        if (selectedLocation) {
            filters.push({
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "InspectionCentres",
                    column: "inspection_centre_name"
                },
                operator: "Contains",
                values: [selectedLocation]
            })
        }

        // Supplier filter
        if (selectedSupplier) {
            filters.push({
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "Suppliers",
                    column: "trunc_supplier_name"
                },
                operator: "Contains",
                values: [selectedSupplier]
            })
        }

        // Date range filter
        if (startDate && endDate) {
            filters.push({
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "Dates",
                    column: "Date"
                },
                operator: "Between",
                values: [
                    new Date(startDate).toISOString().split('T')[0],
                    new Date(endDate).toISOString().split('T')[0]
                ]
            });
        }
        

        console.log('Applying filters:', filters)

        // First remove existing filters
        report.removeFilters()
            .then(() => {
                // Then apply new filters
                if (filters.length > 0) {
                    return report.setFilters(filters)
                }
            })
            .catch((errors: any) => {
                console.error('Error applying filters:', errors)
                setError('Failed to apply filters')
            })
    }

    const resetFilters = () => {
        setSelectedLocation("")
        setSelectedSupplier("")
        setStartDate("")
        setEndDate("")
        if (report) {
            report.removeFilters()
                .catch((errors: any) => {
                    console.error('Error removing filters:', errors)
                    setError('Failed to reset filters')
                })
        }
    }

    const getVisualData = async () => {
        const report = reportRef.current
        if (!report) return

        try {
            const page = await report.getActivePage()
            const pageVisuals = await page.getVisuals()
            
            // Log all available visuals
            console.log('All visuals in page:', pageVisuals.map((v: any) => ({
                name: v.name,
                type: v.type,
                title: v.title
            })))

            // Get the first visual for testing
            const visual = pageVisuals[3]
            if (!visual) {
                console.error('No visuals found in the page')
                return
            }

            console.log('Selected visual:', {
                name: visual.name,
                type: visual.type,
                title: visual.title
            })

            const result = await visual.exportData(models.ExportDataType.Summarized, 1000)

            const csv = result.data
            const [headerLine, ...lines] = csv.trim().split('\n')
            const headers = headerLine.replace('\r','').split(',')

            const rows = lines.map(line => {
                console.log('Values:', line)
                const values = line.split(',')
                return headers.reduce((acc, header, idx) => {
                  acc[header.trim()] = values[idx]?.trim()
                  return acc
                }, {} as Record<string, string>)
              })

            console.log('Rows:', rows)

        } catch (error) {
            console.error('Error extracting visual data:', error)
        }
    }

    return (
        <>
            <Helmet>
                <title>Supplier Dashboard | Analytics</title>
            </Helmet>
            <div className="flex flex-1 h-full">
                {/* Left Side - Report */}
                <div className="flex-1 p-4">
                    <div className="h-full rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
                        {error ? (
                            <div className="text-red-500 p-4">{error}</div>
                        ) : (
                            <div className="relative w-full h-full">
                                {isLoading && <Loader />}
                                <PowerBIEmbed
                                    embedConfig={{
                                        type: 'report',
                                        id: "f3d4dc14-d6f9-45fc-a592-0137220b56cd",
                                        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3d4dc14-d6f9-45fc-a592-0137220b56cd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                                        accessToken: powerBiConfig.accessToken,
                                        tokenType: models.TokenType.Aad,
                                    }}
                                    eventHandlers={new Map([
                                        ['loaded', () => console.log('Report loaded')],
                                        ['rendered', () => console.log('Report rendered')],
                                        ['error', (event: any) => console.error(event?.detail)],
                                    ])}
                                    cssClassName="powerbi-tile absolute inset-0 w-full h-full"
                                    getEmbeddedComponent={handleReportLoad}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar - Filters */}
                <div className="w-80 shadow bg-white p-4 overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">Report Filters</h2>
                            <button 
                                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                                onClick={resetFilters}
                            >
                                Reset Filters
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                            {/* Date Range Filter */}
                            {/* <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Date Range</label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">From:</span>
                                        <input 
                                            type="date" 
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">To:</span>
                                        <input 
                                            type="date" 
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full"
                                        />
                                    </div>
                                </div>
                            </div> */}

                            {/* Location Filter */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Location</label>
                                <select 
                                    className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Istanbul">Istanbul</option>
                                </select>
                            </div>

                            {/* Supplier Filter */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Supplier</label>
                                <select 
                                    className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full"
                                    value={selectedSupplier}
                                    onChange={(e) => setSelectedSupplier(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="COMPAGNIE MAURICIENNE">COMPAGNIE MAURICIENNE</option>
                                    <option value="WINDESON TRADEMART">WINDESON TRADEMART</option>
                                    <option value="LOLA GARMENTS">LOLA GARMENTS</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button 
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
                                onClick={applyFilters}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Supplier
