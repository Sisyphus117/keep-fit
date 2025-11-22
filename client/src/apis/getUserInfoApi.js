import { SERVER_URL } from "../utils/constants";

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
  if (result === null) {
    throw new Error("Invalid id");
  }
  return result;
}
