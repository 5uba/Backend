import AuthProvider from "./provider/AuthProvider";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function AppContent() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="p-4">
        <Login />
        <ProtectedDashboard />
      </div>
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