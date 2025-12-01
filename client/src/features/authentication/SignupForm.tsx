import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import Logo from "../../ui/Logo";
import Button from "../../ui/components/Button";
import { useDispatch } from "react-redux";
import { getUserAuthApi, insertUserAuthApi } from "../../apis/userAuthApi";
import { login } from "../../slices/authenticateSlice";
import { insertUserInfoApi } from "../../apis/userInfoApi";
import { validation } from "./authInputCheck";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, simpleHandleChange: handleChange } = useFormData({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
              data-testid="username-input"
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
              data-testid="email-input"
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
              data-testid="password-input"
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
              data-testid="confirm-password-input"
            />
          </div>
          <Button
            data-testid="submit-button"
            type="submit"
            className="mt-7 self-center"
            color="confirm"
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
