import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function WorkoutStatsChart({ filteredStats }) {
  return (
    <ComposedChart
      width={800}
      height={400}
      data={filteredStats}
      margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
    >
      <CartesianGrid stroke="#000" />
      <XAxis
        dataKey="date"
        tick={{ fill: "#000", fontSize: 12 }}
        tickFormatter={(value) => new Date(value).getDate()}
      />
      <YAxis
        yAxisId="left"
        domain={[0, 600]}
        tick={{ fill: "#000", fontSize: 12 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={[0, 100]}
        tick={{ fill: "#000", fontSize: 12 }}
      />
      {/* <Tooltip
        labelFormatter={(value) => new Date(value).toLocaleDateString()}
      /> */}
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="calories"
        stroke="#ff7300"
        strokeWidth={3}
        dot={{ fill: "#ff7300", strokeWidth: 2, r: 5 }}
        name="Calories"
      />
      <Area
        yAxisId="right"
        type="monotone"
        dataKey="duration"
        fill="rgba(136, 132, 216, 0.6)"
        stroke="#8884d8"
        strokeWidth={3}
        dot={{ fill: "#8884d8", strokeWidth: 2, r: 5 }}
        name="Duration (min)"
      />
    </ComposedChart>
  );
}
