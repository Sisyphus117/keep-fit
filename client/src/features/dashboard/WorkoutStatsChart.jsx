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

// function WorkoutStatsChart({ filteredStats }) {
//   const formatted = filteredStats.map((record) => ({
//     ...record,
//     date: new Date(record.date).toISOString(),
//   }));
//   console.log(formatted);
//   return (
//     <ComposedChart
//       style={{
//         width: "100%",
//         minHeight: "40vh",
//         maxWidth: "1000px",
//       }}
//       responsive
//       data={formatted}
//       margin={{
//         top: 20,
//         right: 0,
//         bottom: 0,
//         left: 0,
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis
//         tick={{ fill: "#e4e4e7", fontSize: 14 }}
//         dataKey="date"
//         scale="band"
//       />
//       <YAxis
//         tick={{ fill: "#e4e4e7", fontSize: 14 }}
//         width={40}
//         yAxisId="left"
//       />
//       <YAxis
//         tick={{ fill: "#e4e4e7", fontSize: 14 }}
//         width={40}
//         yAxisId="right"
//         orientation="right"
//       />
//       <Tooltip />
//       {/* <Legend /> */}
//       <Line
//         yAxisId="left"
//         type="monotone"
//         dataKey="calories"
//         fill="#ff7300"
//         stroke="#ff7300"
//         strokeWidth={2}
//         name="Calories"
//       />
//       <Area
//         yAxisId="right"
//         type="monotone"
//         dataKey="duration"
//         fill="rgba(136, 132, 216, 0.3)"
//         stroke="#8884d8"
//         name="Duration"
//       />
//     </ComposedChart>
//   );
// }

// export default WorkoutStatsChart;
export default function WorkoutStatsChart({ filteredStats }) {
  return (
    <ComposedChart
      width={800}
      height={400}
      data={filteredStats}
      margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="date"
        tick={{ fill: "#e4e4e7", fontSize: 12 }}
        tickFormatter={(value) => new Date(value).getDate()}
      />
      <YAxis
        yAxisId="left"
        domain={[0, 600]}
        tick={{ fill: "#e4e4e7", fontSize: 12 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={[0, 100]}
        tick={{ fill: "#e4e4e7", fontSize: 12 }}
      />
      <Tooltip
        labelFormatter={(value) => new Date(value).toLocaleDateString()}
      />
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
