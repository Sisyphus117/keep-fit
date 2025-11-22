import { getUserAuthApi } from "../../apis/getUserAuthApi";

export async function userCheckLogin({ email, passwordInput }) {
  if (!email || !passwordInput) {
    return false;
  }
  try {
    const { password } = await getUserAuthApi(email);
    return password === passwordInput;
  } catch (err) {
    console.error(err);
  }
}
