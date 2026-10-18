
function Dashboard({ setPage, setLoggedIn }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    setPage("login");
  };

  return (
    <div className="p-4">

      <h2 className="mb-6 text-center text-2xl font-bold">
        Dashboard
      </h2>

      <div className="rounded border border-gray-300 p-4">

        <h3 className="mb-3 text-xl font-semibold">
          Welcome, {user?.name}
        </h3>

        <p className="mb-4 text-gray-600">
          Email: {user?.email}
        </p>

        <button
          onClick={handleLogout}
          className="w-full rounded bg-red-500 p-3 text-white hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;
