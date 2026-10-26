
import AuthProvider from "./provider/AuthProvider";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
