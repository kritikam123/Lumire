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
import ProtectedRoute from "./ProtectedRoute";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <Aboutpage /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "jewelry",
        element: <Jewelrypage />,
      },
      {
        path: "rings",
        element: <Rings />,
      },
      {
        path: "necklaces",
        element: <Necklaces />,
      },
      {
        path: "earrings",
        element: <Earrings />,
      },
      {
        path: "braclets",
        element: <Bracelet />,
      },
      {
        path: "contactus",
        element: <ContactusPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
