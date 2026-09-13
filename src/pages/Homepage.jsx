import Banner from "../components/modules/Banner";
import Collection from "../components/modules/Collection";
import Hero from "../components/modules/Hero";
import StoreLocation from "../components/modules/Location";
import FeatureShowcase from "../components/modules/Showcase";
import Quote from "../components/modules/Quote";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Collection />
      <FeatureShowcase />
      <Quote />
      <StoreLocation />
    </>
  );
};

export default Homepage;
