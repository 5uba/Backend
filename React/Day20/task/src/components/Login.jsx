
import { useState } from "react";

function Login({ setPage, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      setPage("dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="p-4">

      <h2 className="mb-6 text-center text-2xl font-bold">
        Login
      </h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded border border-gray-300 p-3 outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 w-full rounded border border-gray-300 p-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-600"
        >
          Login
        </button>

      </form>

      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => setPage("register")}
          className="font-semibold text-blue-500 hover:underline"
        >
          Register
        </button>
      </p>

    </div>
  );
}

export default Login;
