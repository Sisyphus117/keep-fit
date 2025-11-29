import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import Logo from "../../ui/Logo";
import Button from "../../ui/components/Button";
import { useDispatch } from "react-redux";
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH } from "../../utils/constants";
import { getUserAuthApi, insertUserAuthApi } from "../../apis/userAuthApi";
import { login } from "../../slices/authenticateSlice";
import { insertUserInfoApi } from "../../apis/userInfoApi";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, simpleHandleChange: handleChange } = useFormData({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validation(formData) {
    if (formData.username.length === 0) {
      throw new Error("Username shouldn't be empty");
    }
    if (formData.email.length === 0) {
      throw new Error("Email shouldn't be empty");
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      throw new Error("Please type your email account correctly");
    }
    if (formData.password !== formData.confirmPassword) {
      throw new Error("Please type your password correctly");
    }
    if (formData.password.length < MIN_PASSWORD_LENGTH) {
      throw new Error(`Password should be longer than ${MIN_PASSWORD_LENGTH}`);
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      validation(formData);
      const { email, password, username } = formData;
      await insertUserAuthApi({ email, password });
      const { id, avatar } = await getUserAuthApi(email);
      await insertUserInfoApi({ user_id: id, name: username });
      dispatch(login({ id, password, avatar }));
      navigate("/user");
      toast.success("Sign up successfully");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="container w-[80%]">
        <Logo />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex w-96 flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-lg">Username</label>
            <input
              className="w-52"
              required
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-lg">Email</label>
            <input
              className="w-52"
              required
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mt-2 text-lg">Password</label>
            <input
              className="w-52"
              required
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mt-2 text-lg">Confirm Password</label>
            <input
              className="w-52"
              required
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="mt-7 self-center" color="confirm">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
