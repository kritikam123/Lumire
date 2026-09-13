import HomeCollection08 from "../../assets/home/HomeCollection08.png";
const Quote = () => {
  return (
    <section className="px-10 ">
      <div className="grid grid-cols-2 gap-2 items-center mt-2">
        <div className="px-4">
          <p className="font-serif text-6xl leading-snug text-[#1a1a1a]">
            The diamond <span className="italic">sparkles</span> beautifully in
            the light, adding a touch of elegance to any outfit.
          </p>

          <p className="mt-3 text-2xl text-[#1a1a1a]">— Claudia Bella</p>
          <p className="text-l text-gray-500">Ardsea, Hollywood</p>
        </div>

        <div className="aspect-square overflow-hidden">
          <img
            src={HomeCollection08}
            alt="Gold necklace with rocket and gemstone pendants"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
