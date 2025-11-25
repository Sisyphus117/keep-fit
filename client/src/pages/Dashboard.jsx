import StatCards from "../features/dashboard/StatCards";
import Stats from "../features/dashboard/Stats";
import WorkoutStatsChart from "../features/dashboard/WorkoutStatsChart";
import useAuth from "../hooks/useAuth";

function DashBoard() {
  const { authenticated } = useAuth();
  return (
    <div>
      {authenticated ? (
        <>
          <p>Welcome, user!</p>
          <Stats />
        </>
      ) : (
        <p>Please login to try more functions</p>
      )}
    </div>
  );
}

export default DashBoard;
