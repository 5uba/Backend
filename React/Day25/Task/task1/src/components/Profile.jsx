import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Role: {user.role}</h2>
    </div>
  );
}

export default Profile;