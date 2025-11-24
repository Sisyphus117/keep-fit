import { useSelector } from "react-redux";
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

function WorkoutStatsChart() {
  const { records } = useSelector((store) => store.records);

  const formatted = records.map((record) => ({
    ...record,
    date: new Date(record.date).toISOString().slice(5, 10),
  }));
  return (
    <ComposedChart
      style={{
        width: "100%",
        minHeight: "40vh",
        maxWidth: "1000px",
      }}
      responsive
      data={formatted}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        tick={{ fill: "#e4e4e7", fontSize: 14 }}
        dataKey="date"
        scale="band"
      />
      <YAxis
        tick={{ fill: "#e4e4e7", fontSize: 14 }}
        width={40}
        yAxisId="left"
      />
      <YAxis
        tick={{ fill: "#e4e4e7", fontSize: 14 }}
        width={40}
        yAxisId="right"
        orientation="right"
      />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="calories"
        fill="#ff7300"
        stroke="#ff7300"
        strokeWidth={2}
        name="Calories"
      />
      <Area
        yAxisId="right"
        type="monotone"
        dataKey="duration"
        fill="rgba(136, 132, 216, 0.3)"
        stroke="#8884d8"
        name="Duration"
      />
    </ComposedChart>
  );
}

export default WorkoutStatsChart;
