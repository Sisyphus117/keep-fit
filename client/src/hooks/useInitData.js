import { useDispatch } from "react-redux";
// import { loadStaticData } from "../utils/loadStaticData";
import { read } from "../slices/recordsSlice";
import { init } from "../slices/userSlice";
import { getUserInfoApi } from "../apis/userInfoApi";
import { getWorkoutsApi } from "../apis/workoutsApi";
import { getPlanApi } from "../apis/planApi";
import { set } from "../slices/planSlice";
import toast from "react-hot-toast";

export const useInitData = function () {
  const dispatch = useDispatch();
  const initData = async (id) => {
    try {
      // const { recordsData, userData } = loadStaticData();
      const [userData, recordsData, planData] = await Promise.all([
        getUserInfoApi(id),
        getWorkoutsApi(id),
        getPlanApi(id),
      ]);
      dispatch(read(recordsData));
      dispatch(init(...userData));
      if (planData !== null) {
        dispatch(set(planData));
      }
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
  };
  return { initData };
};
