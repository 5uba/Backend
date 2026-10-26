import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h2 className="text-xl font-bold">My App</h2>

      {user && (
        <div className="flex items-center gap-4">
          <span>Welcome {user.name}</span>

          <button
            onClick={logout}
            className="border px-3 py-1"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;