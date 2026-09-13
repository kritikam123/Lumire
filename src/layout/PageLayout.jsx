import AnnouncementBar from "../components/elements/AnnouncementBar";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
