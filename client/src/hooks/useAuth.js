import { useSelector } from "react-redux";

export default function useAuth() {
  return useSelector((store) => store.authenticate);
}
