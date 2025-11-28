import { SERVER_URL } from "../utils/constants";

/**
 * get user physical data by id
 * @param {number} id
 * @returns
 */
export async function getUserInfoApi(id) {
  const response = await fetch(`${SERVER_URL}userinfo/id/${id}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();
  if (result === null) {
    throw new Error("Invalid id");
  }

  return result;
}

/**
 * update user physical data by id
 * @param {number} id
 * @param {object} formData
 * @returns
 */
export async function updateUserInfoApi(id, formData) {
  const postMessage = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${SERVER_URL}userinfo/id/${id}`, postMessage);

  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();

  return result;
}
