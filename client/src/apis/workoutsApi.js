import { SERVER_URL } from "../utils/constants";

export async function getWorkoutsApi(id) {
  const response = await fetch(`${SERVER_URL}workouts/id/${id}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();

  return result;
}

export async function insertWorkoutApi(id, formData) {
  const postMessage = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${SERVER_URL}workouts/id/${id}`, postMessage);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();
  if (result === null) {
    throw new Error("Invalid id");
  }
  return result;
}

export async function deleteWorkoutApi(id) {
  const postMessage = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${SERVER_URL}workouts/id/${id}`, postMessage);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
}
