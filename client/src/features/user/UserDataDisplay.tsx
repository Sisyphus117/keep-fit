import { RootState } from "@/store";
import { useSelector } from "react-redux";

function UserDataDisplay() {
  const { name, gender, age, height, weight } = useSelector(
    (store: RootState) => store.user,
  );
  if (!gender || !age || !height || !weight) {
    return (
      <p>Please fill your personal info to have better using experience</p>
    );
  }
  return (
    <div className="">
      <ul className="flex items-center gap-5">
        <li className="w-32">Name</li>
        <li className="w-32">{name}</li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="w-32">Gender</li>
        <li className="w-32">{gender}</li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="w-32">Age</li>
        <li className="w-32">{age}</li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="w-32">Height</li>
        <li className="w-32">{`${height} cm`}</li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="w-32">Weight</li>
        <li className="w-32">{`${weight} kg`}</li>
      </ul>
    </div>
  );
}

export default UserDataDisplay;
