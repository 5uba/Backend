
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [page, setPage] = useState(
    localStorage.getItem("loggedIn") === "true"
      ? "dashboard"
      : "register"
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">

        {page === "register" && (
          <Register setPage={setPage} />
        )}

        {page === "login" && (
          <Login
            setPage={setPage}
            setLoggedIn={setLoggedIn}
          />
        )}

        {page === "dashboard" && loggedIn && (
          <Dashboard
            setPage={setPage}
            setLoggedIn={setLoggedIn}
          />
        )}

      </div>

    </div>
  );
}

export default App;
