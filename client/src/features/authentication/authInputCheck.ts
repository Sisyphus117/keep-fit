import { getUserAuthApi } from "../../apis/userAuthApi";
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH } from "../../utils/constants";

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

export function validation({ username, email, password, confirmPassword }) {
  if (username.length === 0) {
    throw new Error("Username shouldn't be empty");
  }
  if (email.length === 0) {
    throw new Error("Email shouldn't be empty");
  }
  if (!EMAIL_REGEX.test(email)) {
    throw new Error("Please type your email account correctly");
  }
  if (password !== confirmPassword) {
    throw new Error("Please type your password correctly");
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(`Password should be longer than ${MIN_PASSWORD_LENGTH}`);
  }
}
