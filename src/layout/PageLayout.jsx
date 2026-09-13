import AnnoucementBar from "../components/elements/AnnoucementBar";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Hero from "../components/modules/Hero";
import Banner from "../components/modules/Banner";
import { Outlet } from "react-router-dom";
import Collection from "../components/modules/Collection";
import FeatureShowcase from "../components/modules/Showcase";
import Quote from "../components/modules/Quote";
import StoreLocation from "../components/modules/Location";

const PageLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Navbar />
      </div>
      <Hero />
      <Banner />
      <Collection />
      <FeatureShowcase />
      <Quote />
      <StoreLocation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
