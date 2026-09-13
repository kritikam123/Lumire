import { Link } from "react-router-dom";
import HeroBanner from "../../assets/home/hero.png";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <section
      className="relative flex w-full h-[60vh] aspect-video -mt-10"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full text-center">
        <p className="font-serif text-4xl leading-snug text-black mb-4">
          Timeless Essentials
        </p>

        <p className="font-serif text-xl leading-snug text-black mb-6">
          Discover fine jewelry, made for every occasion.
          <br />
          The perfect pieces to wear for years to come.
        </p>

        <div className="flex justify-center gap-3">
          <Button className=" bg-[#f4f2ee] text-black px-7 py-3 text-sm font-medium hover:bg-[#1c3b52]">
            SHOP JEWELRY
          </Button>

          <Button className=" bg-[#f4f2ee] text-black px-7 py-3 text-sm font-medium hover:bg-[#1c3b52]">
            SHOP BESTSELLERS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
