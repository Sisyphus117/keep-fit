import { SERVER_URL } from "../utils/constants";

/**
 * when logging in, get the user auth data by email
 * @param {email} email
 * @returns
 */
export async function getUserAuthApi(email) {
  const response = await fetch(`${SERVER_URL}users/email/${email}`);
  if (!response.ok) {
    const { error } = await response.json();
    throw error;
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
    const { error } = await response.json();
    throw error;
  }

  const result = await response.json();

  if (result === null) {
    throw new Error("Invalid email");
  }

  const { id: user_id, email, password, avatar_url } = result;
  let avatar;
  if (avatar_url === null) {
    avatar = "/default-user.jpg";
  } else {
    avatar = SERVER_URL.slice(0, -1) + avatar_url;
  }

  return { id: user_id, email, password, avatar };
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
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  };
  const response = await fetch(`${SERVER_URL}users/id/${id}`, postMessage);

  if (!response.ok) {
    const { error } = await response.json();
    throw error;
  }
  const result = await response.json();

  return result;
}

export async function insertUserAuthApi(data) {
  const { email, password } = data;
  const postMessage = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(`${SERVER_URL}users/create`, postMessage);
  if (!response.ok) {
    const { error } = await response.json();
    if (error === "email must be unique") {
      throw new Error("Email is occupied, please choose another one");
    }
    throw error;
  }
  const result = await response.json();

  return result;
}
