import UserProvider from "./provider/UserProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;