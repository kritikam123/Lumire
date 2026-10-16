import { createContext, useState } from "react";
import { getData } from "../services/storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser"));
    } catch {
      return null;
    }
  });

  // Returns the user if email + password match, otherwise null
  const login = ({ email, password }) => {
    const users = getData("users");
    const cleanEmail = email.toLowerCase().trim();

    const user = users.find(
      (u) => u.email === cleanEmail && u.password === password
    );

    if (!user) return null;

    // Don't keep the password in the logged-in session
    const { password: _password, ...safeUser } = user;

    localStorage.setItem("currentUser", JSON.stringify(safeUser));
    setCurrentUser(safeUser);
    return safeUser;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};