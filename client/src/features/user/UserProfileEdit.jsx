import Button from "../../ui/components/Button";
import toast from "react-hot-toast";
import useFormData from "../../hooks/useFormData";
import useAuth from "../../hooks/useAuth";
import { getUserAuthByIdApi, updateUserAuthApi } from "../../apis/userAuthApi";
import { useDispatch } from "react-redux";
import { setAvatar } from "../../slices/authenticateSlice";

function UserProfileEdit({ onClose }) {
  const { id, password, avatar: originAvatar } = useAuth();
  const dispatch = useDispatch();

  const { formData, setFormData } = useFormData({
    avatar: null,
    tempUrl: originAvatar,
    oldPassword: "",
    newPassword: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "avatar") {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setFormData((prev) => ({
        ...prev,
        tempUrl: objectUrl,
        avatar: e.target.files[0],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { avatar, oldPassword, newPassword } = formData;
    try {
      if (newPassword !== "" && oldPassword !== password) {
        throw new Error("Please input the right password");
      }

      await updateUserAuthApi(id, { avatar, password: newPassword });
      const { avatar: newAvatar } = await getUserAuthByIdApi(id);
      dispatch(setAvatar(newAvatar));

      toast.success("Profile edit successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <form
      className="flex w-80 flex-col justify-center gap-x-20 gap-y-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-col gap-1">
          <label className="w-20">Avatar</label>
          <input
            className="max-h-8 max-w-56"
            type="file"
            id="avatar"
            onChange={handleChange}
            accept=".jpg,.png"
          />
        </div>
        <img
          src={formData.tempUrl}
          alt="preview"
          className="h-14 w-14 rounded-full border-2 border-primary-darker"
        />
      </div>
      <div className="flex justify-between gap-5">
        <label className="w-30">Old Password</label>

        <input
          className="w-[128px]"
          onChange={handleChange}
          value={formData.oldPassword}
          type="password"
          id="oldPassword"
        />
      </div>
      <div className="gap flex justify-between">
        <label className="w-30">New Password</label>
        <input
          onChange={handleChange}
          value={formData.newPassword}
          className="w-[128px]"
          type="password"
          id="newPassword"
        />
      </div>
      <div className="col-span-full flex justify-between">
        <Button type="button" onClick={onClose}>
          Close
        </Button>
        <Button type="submit" color="confirm">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default UserProfileEdit;
