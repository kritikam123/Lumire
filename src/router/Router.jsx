import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Jewelrypage from "../pages/Jewelrypage";
import Aboutpage from "../pages/Aboutpage";
import ContactusPage from "../pages/ContactusPage";
import Rings from "../pages/Rings";
import Earrings from "../pages/Earrings";
import Necklaces from "../pages/Necklaces";
import Bracelet from "../pages/Bracelet";

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
  {
    path: "/contactus",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <ContactusPage />,
      },
    ],
  },

  {
    path: "/earrings",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Earrings />,
      },
    ],
  },
  {
    path: "/necklaces",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Necklaces />,
      },
    ],
  },
  {
    path: "/bracelets",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Bracelet />,
      },
    ],
  },

  {
    path: "/rings",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Rings />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
