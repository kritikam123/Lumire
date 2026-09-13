import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
// import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    // children: [
    //   { index: true, element: <Homepage /> },
    // ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
