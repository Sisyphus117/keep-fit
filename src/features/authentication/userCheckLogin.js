export function userCheckLogin({ email, password }) {
  if (!email || !password) {
    return false;
  }
  if (email === "root@root.com" && password === "root") {
    return true;
  }
  return false;
}
