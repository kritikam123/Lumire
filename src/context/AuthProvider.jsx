import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentUser, logoutUser } from "../services/userService";
import { getData } from "../services/storage";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentUser());

  // Returns the user if email + password match, otherwise null
  const login = (data) => {
    const users = getData("users");
    const email = data.email.toLowerCase().trim();

    const found = users.find(
      (u) => u.email === email && u.password === data.password
    );

    if (!found) return null; // don't touch the current session

    // Keep the password out of the logged-in session
    const { password: _password, ...safeUser } = found;

    localStorage.setItem("currentUser", JSON.stringify(safeUser));
    setUser(safeUser);
    return safeUser;
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;