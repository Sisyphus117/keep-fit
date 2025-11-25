import Button from "../ui/components/Button";
import { useState } from "react";
import Modal from "../ui/components/Modal";
import UserDataEdit from "../features/user/UserDataEdit";
import UserDataDisplay from "../features/user/UserDataDisplay";

function User() {
  const [isEditing, setIsEditing] = useState(false);

  function handleClose() {
    setIsEditing(false);
  }
  return (
    <div className="">
      <UserDataDisplay />
      {isEditing && (
        <Modal onClose={handleClose}>
          <UserDataEdit onClose={handleClose} />
        </Modal>
      )}
      <Button onClick={() => setIsEditing(true)}>Edit</Button>
    </div>
  );
}

export default User;
