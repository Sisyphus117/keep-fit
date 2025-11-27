import { getUserAuthApi } from "../../apis/userAuthApi";

export async function userCheckLogin({ email, passwordInput }) {
  if (!email || !passwordInput) {
    throw new Error("Please fill in email and password");
  }

  const { password, id, avatar } = await getUserAuthApi(email);

  if (password !== passwordInput) {
    throw new Error("Wrong password");
  }
  return { id, password, avatar };
}
