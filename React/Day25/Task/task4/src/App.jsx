
import { useContext } from "react";
import AuthProvider from "./provider/AuthProvider";
import AuthContext from "./context/AuthContext";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);

function AppContent() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="p-5">
      <button
        onClick={isLoggedIn ? logout : login}
        className="border px-4 py-2"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? (
        <>
          <ProtectedDashboard />
          <ProtectedProfile />
        </>
      ) : (
        <h2 className="mt-4">Please Login</h2>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
