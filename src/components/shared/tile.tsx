import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TileProps {
    title: string
    centerValue: number
    bottomValue: string
}

const Tile = ({ title, centerValue, bottomValue }: TileProps) => {
    return (
        <Card className="w-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold text-gray-900">
                    {centerValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    {bottomValue}
                </div>
            </CardContent>
        </Card>
    )
}

export default Tile 