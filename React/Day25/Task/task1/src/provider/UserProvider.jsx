import UserContext from "../context/UserContext";

function UserProvider({ children }) {
  const user = {
    name: "Bala",
    role: "Developer"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;