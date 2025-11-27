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
    <div className="mx-4 flex h-full items-center gap-2">
      {authenticated ? (
        <Link to="user" className="flex h-full items-center gap-2">
          <img
            className="h-[60%] w-auto rounded-full"
            src={avatar}
            alt="User Avatar"
          />
          <h1 className="mr-2">{name}</h1>
          <Button color="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </Link>
      ) : (
        <Button isLink={true} color="normal" to={"/login"}>
          Log In
        </Button>
      )}
    </div>
  );
}

export default UserBar;
