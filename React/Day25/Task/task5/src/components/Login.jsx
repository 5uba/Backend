import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const { login, user } = useContext(AuthContext);

  if (user) {
    return null;
  }

  return (
    <button
      onClick={login}
      className="border px-4 py-2"
    >
      Login
    </button>
  );
}

export default Login;