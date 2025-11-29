import { SPOONACULAR_API_KEY } from "../utils/apiKeys";
import { RECOMMEND_COUNT, SPOONACULAR_BASE_URL } from "../utils/constants";

/**
 * fetch the proper recipe due to query string and calories consumed
 * @param {object} param
 * @param {string} param.query
 * @param {number} param.minCaloriest
 * @param {number} param.maxCaloriest
 * @returns
 */
export async function recipeItemsFetchApi({ query, minCalories, maxCalories }) {
  const url = `${SPOONACULAR_BASE_URL}?apiKey=${SPOONACULAR_API_KEY}&query=${query}&minCalories=${minCalories}&maxCalories=${maxCalories}&number=${RECOMMEND_COUNT}&sort=random`;
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
