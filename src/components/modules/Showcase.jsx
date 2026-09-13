import { Star } from "lucide-react";
import HomeCollection05 from "../../assets/home/HomeCollection05.png";
import HomeCollection06 from "../../assets/home/HomeCollection06.png";
import HomeCollection07 from "../../assets/home/HomeCollection07.png";

const FeatureShowcase = () => {
  return (
    <section className="px-10 py-12">
      <div className="flex gap-10 items-center">
        <div className="max-w-6xl grid grid-cols-2 gap-2">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={HomeCollection05}
              alt="Model wearing gold hoop earrings"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-rows-2 gap-2">
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={HomeCollection06}
                alt="Gold huggie earrings with crystals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={HomeCollection07}
                alt="Gold bangle bracelet with crystals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="font-serif text-3xl text-[#1a1a1a] leading-snug">
            Designed for thoughtful individuals—people who curate their lives
            and the objects they own
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Each piece is made from 14k gold and finished by hand, designed to
            be worn together or alone, every day. We craft our products using
            the most sustainable materials available to us, like recycled 14k
            gold & 925 silver and lab grown diamonds. Our gold vermeil pieces
            use an ultra thick layer of gold over a silver base that lasts many
            times longer than gold-plated jewelry. Our hope is that you'll enjoy
            these pieces for many years—even generations.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default FeatureShowcase;
