import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <p>Welcome {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;