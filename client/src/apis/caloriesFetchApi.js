import toast from "react-hot-toast";
import { CALORIES_BURNED_API_KEY } from "../utils/apiKeys";
import { CALORIES_BURNED_BASE_URL } from "../utils/constants";

/**
 * compute the caloires cosumption of a certain activity
 * @param {Object} params
 * @param {string} params.activity
 * @param {number} params.weight
 * @param {number} params.duration
 * @param {number} params.id user id
 * @returns
 */
export const fetchCaloriesBurnedData = async function ({
  activity,
  weight = 50,
  duration = 60,
  id,
}) {
  try {
    const url = `${CALORIES_BURNED_BASE_URL}caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "calories-burned-by-api-ninjas.p.rapidapi.com",
        "x-rapidapi-key": CALORIES_BURNED_API_KEY,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    const { total_calories: calories } = result[0];
    return { id, calories };
  } catch (err) {
    console.error(err);
    toast.error("Something wrong with the api");
  }
};
