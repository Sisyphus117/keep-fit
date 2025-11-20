import { useSelector } from "react-redux";

function User() {
  const { name, age, height, weight } = useSelector((store) => store.user);
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li className="w-32">Name</li>
        <li className="w-32">{name}</li>
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
      {/* <ul className="flex items-center gap-5">
        <li className="w-32">Name</li>
        <li className="w-32">{`${name}`}</li>
      </ul> */}
    </div>
  );
}

export default User;
