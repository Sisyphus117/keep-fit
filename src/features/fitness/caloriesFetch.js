import { CALORIES_BURNED_API_KEY } from "../../utils/constants";

export const fetchCaloriesBurnedData = async function ({
  activity,
  weight = 50,
  duration = 60,
}) {
  const url = `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "calories-burned-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": CALORIES_BURNED_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const { total_calories } = result[0];

    return total_calories;
  } catch (error) {
    console.error(error);
  }
};
