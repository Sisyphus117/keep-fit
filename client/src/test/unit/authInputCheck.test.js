import {
  userCheckLogin,
  validation,
} from "../../features/authentication/authInputCheck";
import { MIN_PASSWORD_LENGTH } from "../../utils/constants";

global.fetch = jest.fn();

test("userCheckLogin no fetch", async () => {
  const testNoEmail = { email: "", passwordInput: "password123" };
  await expect(userCheckLogin(testNoEmail)).rejects.toThrow(
    "Please fill in email and password",
  );
  const testNoPassword = { email: "root@root.com", passwordInput: "" };
  await expect(userCheckLogin(testNoPassword)).rejects.toThrow(
    "Please fill in email and password",
  );
  const testNoNExistUser = {
    email: "nonexist@mail.com",
    passwordInput: "anyPassword",
  };
});

// test("userCheckLogin invalid email", async () => {
//   const testNoNExistUser = {
//     email: "nonexist@mail.com",
//     passwordInput: "anyPassword",
//   };
//   fetch.mockResolvedValueOnce({
//     ok: false,
//     json: async () => ({ error: "Invalid email" }),
//   });
//   await expect(userCheckLogin(testNoNExistUser)).rejects.toThrow(
//     "Invalid email",
//   );
// });

test("userCheckLogin wrong password", async () => {
  const testWrongPassword = {
    email: "test@mail.com",
    passwordInput: "wrongPassword",
  };
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ password: "password", id: 100, avatar: null }),
  });
  await expect(userCheckLogin(testWrongPassword)).rejects.toThrow(
    "Wrong password",
  );
});

test("userCheckLogin correct", async () => {
  const testCorrect = {
    email: "noavatar@mail.com",
    passwordInput: "noavatar",
  };
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ password: "noavatar", id: 1, avatar_url: null }),
  });
  await expect(userCheckLogin(testCorrect)).resolves.toEqual({
    id: 1,
    password: "noavatar",
    avatar: "/default-user.jpg",
  });
});

test("validation", () => {
  const testEmptyUsername = {
    username: "",
    email: "test@mail.com",
    password: "password",
    confirmPassword: "password",
  };
  expect(() => validation(testEmptyUsername)).toThrow(
    "Username shouldn't be empty",
  );

  const testEmptyEmail = {
    username: "test",
    email: "",
    password: "password",
    confirmPassword: "password",
  };
  expect(() => validation(testEmptyEmail)).toThrow("Email shouldn't be empty");

  const testEmptyPassword = {
    username: "test",
    email: "test@test.com",
    password: "",
    confirmPassword: "",
  };
  expect(() => validation(testEmptyPassword)).toThrow(
    `Password should be longer than ${MIN_PASSWORD_LENGTH}`,
  );

  const testShortPassword = {
    username: "test",
    email: "test@test.com",
    password: "123",
    confirmPassword: "123",
  };
  expect(() => validation(testShortPassword)).toThrow(
    `Password should be longer than ${MIN_PASSWORD_LENGTH}`,
  );

  const testMismatchPassword = {
    username: "test",
    email: "test@test.com",
    password: "password1",
    confirmPassword: "password2",
  };
  expect(() => validation(testMismatchPassword)).toThrow(
    "Please type your password correctly",
  );

  const testInvalidEmail = {
    username: "test",
    email: "invalid.email",
    password: "password",
    confirmPassword: "password",
  };
  expect(() => validation(testInvalidEmail)).toThrow(
    "Please type your email account correctly",
  );

  const testInvalidEmail2 = {
    username: "test",
    email: "invalid@email",
    password: "password",
    confirmPassword: "password",
  };
  expect(() => validation(testInvalidEmail)).toThrow(
    "Please type your email account correctly",
  );
});
