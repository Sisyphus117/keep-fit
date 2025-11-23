import { getUserAuthApi } from "../../apis/userAuthApi";

export async function userCheckLogin({ email, passwordInput }) {
  if (!email || !passwordInput) {
    return -1;
  }
  try {
    const { password, id } = await getUserAuthApi(email);
    return password === passwordInput ? id : -1;
  } catch (err) {
    console.error(err);
  }
}
