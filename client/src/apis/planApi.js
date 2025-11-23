import { SERVER_URL } from "../utils/constants";

export async function getPlanApi(id) {
  const response = await fetch(`${SERVER_URL}plan/id/${id}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();
  if (result === null) {
    return null;
  }
  return {
    item: result.item,
    startDate: result.start_date,
    duration: result.duration,
  };
}

export async function insertPlanApi(id, { item, startDate, duration }) {
  const dataRequired = {
    user_id: id,
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
  const response = await fetch(`${SERVER_URL}plan/id/${id}`, postMessage);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();
  if (!result) {
    throw new Error("Invalid id");
  }
  return result;
}
