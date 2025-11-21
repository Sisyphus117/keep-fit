import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { logout } from "../slices/authenticateSlice";
import useAuth from "../hooks/useAuth";

function UserBar() {
  const { name } = useSelector((store) => store.user);

  const { authenticated } = useAuth();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <div className="flex h-full items-center gap-2">
      {authenticated ? (
        <>
          <img
            className="h-[60%] w-auto rounded-full"
            src="default-user.jpg"
            alt="User Avatar"
          />
          <h1 className="mr-2">{name}</h1>
          <Button onClick={handleLogout}>Log Out</Button>
        </>
      ) : (
        <Button isLink={true} to={"/login"}>
          Log In
        </Button>
      )}
    </div>
  );
}

export default UserBar;
