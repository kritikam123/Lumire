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
import Bracelets from "../pages/Bracelets";
import LabDiamonds from "../pages/LabDiamonds";
import Gifts from "../pages/Gifts";
import Trending from "../pages/Trending";
import ProtectedRoute from "./ProtectedRoute";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetails";

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
      { path: "about", element: <Aboutpage /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      { path: "jewelry", element: <Jewelrypage /> },
      { path: "rings", element: <Rings /> },
      { path: "necklaces", element: <Necklaces /> },
      { path: "earrings", element: <Earrings /> },
      { path: "bracelets", element: <Bracelets /> },
      { path: "lab-diamonds", element: <LabDiamonds /> },
      { path: "gifts", element: <Gifts /> },
      { path: "trending", element: <Trending /> },
      { path: "contactus", element: <ContactusPage /> },
      { path: "productdetails/:id", element: <ProductDetails /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
