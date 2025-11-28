import { SERVER_URL } from "../utils/constants";

/**
 * when logging in, get the user auth data by email
 * @param {email} email
 * @returns
 */
export async function getUserAuthApi(email) {
  const response = await fetch(`${SERVER_URL}users/email/${email}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }

  const result = await response.json();

  if (result === null) {
    throw new Error("Invalid email");
  }

  const { id, password, avatar_url } = result;
  let avatar;
  if (avatar_url === null) {
    avatar = "/default-user.jpg";
  } else {
    avatar = SERVER_URL.slice(0, -1) + avatar_url;
  }

  return { id, password, avatar };
}

/**
 * get the auth data by id
 * @param {id} id
 * @returns
 */
export async function getUserAuthByIdApi(id) {
  const response = await fetch(`${SERVER_URL}users/id/${id}`);
  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }

  const result = await response.json();

  if (result === null) {
    throw new Error("Invalid email");
  }

  const { id: user_id, password, avatar_url } = result;
  let avatar;
  if (avatar_url === null) {
    avatar = "/default-user.jpg";
  } else {
    avatar = SERVER_URL.slice(0, -1) + avatar_url;
  }

  return { id: user_id, password, avatar };
}

/**
 * update a user's profile be id
 * @param {number} id
 * @param {object} data
 * @returns
 */
export async function updateUserAuthApi(id, data) {
  const { avatar, password } = data;
  const formData = new FormData();
  if (avatar !== null) {
    formData.append("avatar", avatar);
  }
  if (password !== "") {
    formData.append("password", password);
  }

  const postMessage = {
    method: "PUT",
    body: formData,
  };
  const response = await fetch(`${SERVER_URL}users/id/${id}`, postMessage);

  if (!response.ok) {
    throw new Error(`Error, status code: ${response.status}`);
  }
  const result = await response.json();

  return result;
}
