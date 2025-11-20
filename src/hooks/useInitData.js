import { useDispatch } from "react-redux";
import { loadStaticData } from "../utils/loadStaticData";
import { read } from "../fitness/recordsSlice";
import { init } from "../user/userSlice";

export const useInitData = function () {
  const dispatch = useDispatch();
  const initData = () => {
    const { recordsData, userData } = loadStaticData();
    dispatch(read(recordsData));
    dispatch(init(userData));
  };
  return { initData };
};
