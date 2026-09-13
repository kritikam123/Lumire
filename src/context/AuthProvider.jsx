import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentUser, logoutUser } from "../services/userService";
import { getData } from "../services/storage";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return getCurrentUser();
  });

  const login = (data) => {
    const users = getData("users");

    const userData = users.find(
      (u) =>
        u.email === data.email.toLowerCase().trim() &&
        u.password === data.password,
    );
    setUser(userData);
    return userData;
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
