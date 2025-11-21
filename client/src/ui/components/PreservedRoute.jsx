import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PreservedRoute() {
  const { authenticated: isAuthed } = useAuth();
  return isAuthed ? <Outlet /> : <Navigate to="/login" replace />;
}
