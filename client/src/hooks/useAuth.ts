import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function useAuth() {
  return useSelector((store: RootState) => store.authenticate);
}
