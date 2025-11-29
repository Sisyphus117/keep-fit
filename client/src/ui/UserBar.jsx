import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import { logout } from "../slices/authenticateSlice";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

function UserBar() {
  const { name } = useSelector((store) => store.user);

  const { authenticated, avatar } = useAuth();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <>
      {authenticated ? (
        <div className="mx-4 flex h-full items-center gap-2">
          <Link to="user" className="flex h-full items-center gap-2">
            <img
              className="h-[60%] w-auto rounded-full"
              src={avatar}
              alt="User Avatar"
            />
            <h1 className="mr-2">{name}</h1>
          </Link>
          <Button color="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      ) : (
        <div className="mx-4 flex items-center gap-6">
          <Button
            isLink={true}
            className="w-[90px]"
            color="normal"
            to={"/signup"}
          >
            Sign up
          </Button>
          <Button
            isLink={true}
            className="w-[90px]"
            color="normal"
            to={"/login"}
          >
            Log In
          </Button>
        </div>
      )}
    </>
  );
}

export default UserBar;
