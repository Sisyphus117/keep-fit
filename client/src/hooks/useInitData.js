import { useDispatch } from "react-redux";
// import { loadStaticData } from "../utils/loadStaticData";
import { read } from "../slices/recordsSlice";
import { init } from "../slices/userSlice";
import { getUserInfoApi } from "../apis/getUserInfoApi";
import { getWorkoutsApi } from "../apis/getWorkoutsApi";

export const useInitData = function () {
  const dispatch = useDispatch();
  const initData = async (id) => {
    try {
      // const { recordsData, userData } = loadStaticData();
      const [userData, recordsData] = await Promise.all([
        getUserInfoApi(id),
        getWorkoutsApi(id),
      ]);
      dispatch(read(recordsData));
      dispatch(init(...userData));
    } catch (err) {
      console.error(err);
    }
  };
  return { initData };
};
