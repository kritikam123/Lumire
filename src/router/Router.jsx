import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Jewelrypage from "../pages/Jewelrypage";
import Aboutpage from "../pages/Aboutpage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },

  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/jewelry",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Jewelrypage />,
      },
    ],
  },
  {
    path: "/about",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Aboutpage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
