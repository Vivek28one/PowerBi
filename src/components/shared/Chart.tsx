import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Rectangle } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  {
    "Date": "2025-06-01T00:00:00",
    "Inspections_Passed": 13,
    "Inspections_CommPassed": 2
  },
  {
    "Date": "2025-06-02T00:00:00",
    "Inspections_Passed": 27,
    "Inspections_CommPassed": 4
  },
  {
    "Date": "2025-06-03T00:00:00",
    "Inspections_Passed": 28,
    "Inspections_CommPassed": 10,
    "Inspections_Failed": 6
  },
  {
    "Date": "2025-06-04T00:00:00",
    "Inspections_Passed": 33,
    "Inspections_CommPassed": 3,
    "Inspections_Failed": 4
  },
  {
    "Date": "2025-06-05T00:00:00",
    "Inspections_Passed": 11,
    "Inspections_Failed": 3
  }
]

const barKeys = ['Inspections_CommPassed', 'Inspections_Failed', 'Inspections_Passed']; // Order: top to bottom

const processedData = chartData.map(row => {
  const topBar = barKeys.find(key => row[key] > 0);
  return { ...row, topBar };
});

const chartConfig = {
  Inspections_Passed: {
    label: "Passed",
    color: "	#4CAF50",
  },
  Inspections_CommPassed: {
    label: "Com Pass",
    color: "	#FFC107",
  },
  Inspections_Failed: {
    label: "Failed",
    color: "#F44336",
  }
} satisfies ChartConfig

const RoundedBar = (props) => {
  const { x, y, width, height, fill, payload, dataKey } = props;
  // Check if this bar is the topmost for this stack
  const isTop = payload.topBar === dataKey;
  const radius = isTop ? 8 : 0; // Adjust 8 to your desired roundness

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[radius, radius, 0, 0]}
    />
  );
};

const Chart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Result Inspection daily</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={processedData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Date"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Inspections_Passed"
              stackId="a"
              fill="var(--color-Inspections_Passed)"
              shape={props => <RoundedBar {...props} dataKey="Inspections_Passed" />}
            />
            <Bar
              dataKey="Inspections_Failed"
              stackId="a"
              fill="var(--color-Inspections_Failed)"
              shape={props => <RoundedBar {...props} dataKey="Inspections_Failed" />}
            />
            <Bar
              dataKey="Inspections_CommPassed"
              stackId="a"
              fill="var(--color-Inspections_CommPassed)"
              shape={props => <RoundedBar {...props} dataKey="Inspections_CommPassed" />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

export default Chart;