import { useState } from "react";
import AuthContext from "../context/AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "Bala",
      role: "Admin"
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;