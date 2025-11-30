import { useDispatch } from "react-redux";
import Button from "../../ui/components/Button";
import Logo from "../../ui/Logo";
import { login } from "../../slices/authenticateSlice";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import toast from "react-hot-toast";
import { userCheckLogin } from "./authInputCheck";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, handleChange, clearForm } = useFormData({
    email: "root@root.com",
    password: "root",
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const { id, password, avatar } = await userCheckLogin({
        ...formData,
        passwordInput: formData.password,
      });
      if (id !== -1) {
        dispatch(login({ id, password, avatar }));
        navigate("/");
      }
      clearForm();
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
        <div className="flex flex-col">
          <label className="text-lg">Email</label>
          <input
            className="w-[300px]"
            required
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="mt-2 text-lg">Password</label>
          <input
            className="w-[300px]"
            required
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" className="mt-7 self-center" color="confirm">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
