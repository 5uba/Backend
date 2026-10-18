
import { useState } from "react";

function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
    setPage("login");
  };

  return (
    <div className="p-4">

      <h2 className="mb-6 text-center text-2xl font-bold">
        Register
      </h2>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4 w-full rounded border border-gray-300 p-3 outline-none focus:border-blue-500"
        />

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
          Register
        </button>

      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <button
          onClick={() => setPage("login")}
          className="font-semibold text-blue-500 hover:underline"
        >
          Login
        </button>
      </p>

    </div>
  );
}

export default Register;
