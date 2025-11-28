import { SPOONACULAR_API_KEY } from "../utils/apiKeys";
import { RECOMMEND_COUNT, SPOONACULAR_BASE_URL } from "../utils/constants";

export async function menuItemsFetchApi({ query, minCalories, maxCalories }) {
  const url = `${SPOONACULAR_BASE_URL}?apiKey=${SPOONACULAR_API_KEY}&query=${query}&minCalories=${minCalories}&maxCalories=${maxCalories}&number=${RECOMMEND_COUNT}`;
  const postMessage = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, postMessage);
  const data = await response.json();
  return data;
}
