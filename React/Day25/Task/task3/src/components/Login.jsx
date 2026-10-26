import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const { isLoggedIn, username, login, logout } =
    useContext(AuthContext);

  return (
    <div className="min-h-screen p-10 bg-white text-black">
      {isLoggedIn ? (
        <div>
          <h2 className="text-2xl">
            Welcome {username}
          </h2>

          <button
            onClick={logout}
            className="mt-4 border px-4 py-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl">
            Please Login
          </h2>

          <button
            onClick={login}
            className="mt-4 border px-4 py-2"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
