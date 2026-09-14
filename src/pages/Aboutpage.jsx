import Aboutus01 from "../assets/about/Aboutus01.png";
import Aboutus02 from "../assets/about/Aboutus02.png";
import Aboutus03 from "../assets/about/Aboutus03.png";

const Aboutpage = () => {
  return (
    <section className="px-60 py-12">
      <h1 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
        Our Story
      </h1>
      <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-xl text-left mb-10 leading-12">
        Jewelry made to become part of your story. Lumire was born from a simple
        belief: the most beautiful things don’t always need to be loud. We
        created Lumire for those little moments that deserve to be remembered —
        a new beginning, a quiet celebration, a meaningful gift, or simply a day
        when you want to feel a little more like yourself. Inspired by timeless
        elegance and the beauty of simplicity, each piece is thoughtfully
        designed to feel effortless, delicate, and enduring. Jewelry that
        complements who you are rather than defining you. For us, jewelry is
        more than an accessory. It carries memories, marks milestones, and
        becomes a small part of the stories we tell about ourselves. <br />
        Wear it every day. Keep it forever. Make it yours. <br />
        Welcome to Lumire.
      </p>
      <div className="flex items-center gap-4 mb-22">
        <div className="flex-1 space-y-4">
          <h2 className="font-serif text-3xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
            Superior Craftsmanship
          </h2>
          <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-xl text-left mb-10 leading-12">
            We work with factories and artisans that supply Europe's leading
            luxury brands. (But our products are much more affordable ;))
          </p>
        </div>

        <div className="flex-1 px-2">
          <img
            src={Aboutus01}
            alt="Luxury Materials"
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-22">
        <div className="flex-1 px-2">
          <img
            src={Aboutus02}
            alt="Luxury Materials"
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="font-serif text-3xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
            Luxury-grade Materials
          </h2>
          <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-xl text-left mb-10 leading-12">
            We carefully select each component in our accessories, like the
            Swiss movements in each of our watches, the premium leather in our
            bags, and the ethically-sourced stones in our jewelry.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 space-y-4">
          <h2 className="font-serif text-3xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
            Sustainability
          </h2>
          <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-xl text-left mb-10 leading-12">
            We make our products to last and use the most eco-friendly materials
            available to us. Plus, we offset carbon emissions for every shipment
            we dispatch to our customers.
          </p>
        </div>

        <div className="flex-1 px-2">
          <img
            src={Aboutus03}
            alt="Luxury Materials"
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
