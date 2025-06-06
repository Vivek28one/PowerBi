import { models } from 'powerbi-client'

interface Supplier {
    id: string
    name: string
}

interface MonthData {
    month: string
    year: number
}

export const fetchSuppliers = async (): Promise<Supplier[]> => {
    try {
        const response = await fetch('http://localhost:3000/v1/suppliers')
        if (!response.ok) {
            throw new Error('Failed to fetch suppliers')
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching suppliers:', error)
        return []
    }
}

export const fetchAvailableMonths = async (): Promise<MonthData[]> => {
    try {
        const response = await fetch('/api/available-months', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0QjQ4MjA0RS0zRTQ5LTQ3NDMtOEM5NS0wMjA1N0M3MzBGNEUiLCJzZXNzaW9uSWQiOiIzMUEwMUU3Ni04NkU2LTRGMDgtODFDNS1DNkVGM0NBRDQ0QkMiLCJpYXQiOjE3NDgwNzA0NTYsImV4cCI6MTc0ODY3NTI1NiwiaXNzIjoiY2xpdiJ9.JvCuDrVwXxFAlbgr_MIqT5BYXGI2thxueszZUn9pGOMt2Fbe8sDzJ5lYW6D0MNU65vNXV8876iAWg7Z3bvP1kw',
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Failed to fetch available months')
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching available months:', error)
        return []
    }
}

export const applyPowerBIFilters = (
    month: string,
    year: number,
    supplier: string,
    reportInstance: any
) => {
    const filters: models.IBasicFilter[] = [
        {
            $schema: "http://powerbi.com/product/schema#basic",
            filterType: models.FilterType.Basic,
            target: {
                table: "Dates",
                column: "MonthInCalendar"
            },
            operator: "In",
            values: [`${month} ${year}`]
        },
        {
            $schema: "http://powerbi.com/product/schema#basic",
            filterType: models.FilterType.Basic,
            target: {
                table: "Suppliers",
                column: "trunc_supplier_name"
            },
            operator: "In",
            values: [supplier]
        }
    ]

    return reportInstance.setFilters(filters)
        .then(() => console.log('Filters applied:', { month, year, supplier }))
        .catch((error: any) => console.error('Error applying filters:', error))
} 