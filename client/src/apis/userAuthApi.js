import { SERVER_URL } from "../utils/constants";

export async function getUserAuthApi(email) {
  const response = await fetch(`${SERVER_URL}users/email/${email}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }

  const result = await response.json();

  if (result === null) {
    throw new Error("Invalid email");
  }

  return result;
}
