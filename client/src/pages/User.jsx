import Button from "../ui/components/Button";
import { useState } from "react";
import Modal from "../ui/components/Modal";
import UserDataEdit from "../features/user/UserDataEdit";
import UserDataDisplay from "../features/user/UserDataDisplay";
import UserProfileEdit from "../features/user/UserProfileEdit";

function User() {
  const [isEditingData, setIsEditingData] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  function handleCloseData() {
    setIsEditingData(false);
  }
  function handleCloseProfile() {
    setIsEditingProfile(false);
  }
  return (
    <div className="flex w-fit flex-col gap-4">
      <UserDataDisplay />
      {isEditingData && (
        <Modal onClose={handleCloseData}>
          <UserDataEdit onClose={handleCloseData} />
        </Modal>
      )}
      {isEditingProfile && (
        <Modal onClose={handleCloseProfile}>
          <UserProfileEdit onClose={handleCloseProfile} />
        </Modal>
      )}
      <Button onClick={() => setIsEditingData(true)}>Edit</Button>
      <Button onClick={() => setIsEditingProfile(true)}>Edit Profile</Button>
    </div>
  );
}

export default User;
