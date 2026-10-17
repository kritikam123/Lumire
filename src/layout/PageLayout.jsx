import AnnouncementBar from "../components/elements/AnnouncementBar";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import { Outlet } from "react-router-dom";
import CartDrawer from "../components/elements/CartDrawer";

const PageLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <AnnouncementBar />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default PageLayout;
