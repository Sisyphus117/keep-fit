import { SERVER_URL } from "../utils/constants";

/**
 * get workouts of a user by id
 * @param {number} id
 * @returns
 */
export async function getWorkoutsApi(id) {
  const response = await fetch(`${SERVER_URL}workouts/id/${id}`);
  if (!response.ok) {
    const { error } = await response.json();
    throw error;
  }
  const result = await response.json();

  return result;
}

/**
 * get workouts of today of a user by id
 * @param {number} id
 * @returns
 */
export async function getWorkoutsTodayApi(id) {
  const response = await fetch(`${SERVER_URL}workouts/id/${id}/today`);
  if (!response.ok) {
    const { error } = await response.json();
    throw error;
  }
  const result = await response.json();

  return result;
}

/**
 * insert a line of workout record to user's records
 * @param {number} id
 * @param {object} formData
 * @returns
 */
export async function insertWorkoutApi(formData) {
  const postMessage = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${SERVER_URL}workouts/create`, postMessage);
  if (!response.ok) {
    const { error } = await response.json();
    throw error;
  }
  const result = await response.json();
  if (result === null) {
    throw new Error("Invalid id");
  }
  return result;
}

/**
 * remove a line of workout from the database
 * @param {number} id
 * @returns
 */
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
