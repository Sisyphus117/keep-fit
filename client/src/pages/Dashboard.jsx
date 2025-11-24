import StatCards from "../features/dashboard/StatCards";
import WorkoutStatsChart from "../features/dashboard/WorkoutStatsChart";
import useAuth from "../hooks/useAuth";

function DashBoard() {
  const { authenticated } = useAuth();
  return (
    <div>
      <h1 className="text-yellow-500">Dashboard </h1>
      {authenticated ? (
        <>
          <p>Welcome, user!</p>
          <StatCards />
          <WorkoutStatsChart />
        </>
      ) : (
        <p>Please login to try more functions</p>
      )}
    </div>
  );
}

export default DashBoard;
