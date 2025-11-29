import { SERVER_URL } from "../utils/constants";

/**
 * get the personal plan of the user by id
 * @param {number} id user id
 * @returns
 */
export async function getPlanApi(id) {
  const response = await fetch(`${SERVER_URL}plan/id/${id}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();
  if (result === null) {
    return {};
  }
  return {
    item: result.item,
    startDate: result.start_date,
    duration: result.duration,
  };
}

/**
 * add a plan to the database by id
 * @param {number} id  user id
 * @param {object} param
 * @param {string} param.item
 * @param {string} param.startDate
 * @param {number} param.duration
 * @param {string} param.item
 * @returns
 */
export async function insertPlanApi({ user_id, item, startDate, duration }) {
  const dataRequired = {
    user_id,
    item,
    duration,
    start_date: startDate,
  };
  const postMessage = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRequired),
  };
  const response = await fetch(`${SERVER_URL}plan/create`, postMessage);
  if (!response.ok) {
    const { error } = await response.json();
    throw error;
  }
  const result = await response.json();

  return result;
}
