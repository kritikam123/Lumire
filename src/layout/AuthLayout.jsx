import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/modules/Navbar";
import loginImage from "../assets/auth/loginImage.jpg";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center px-6 bg-no-repeat bg-right bg-cover"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="w-full max-w-80.5 -translate-25">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
