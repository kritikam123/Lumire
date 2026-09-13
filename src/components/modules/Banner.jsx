import Button from "../elements/Button";

const Banner = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center w-full text-center">
      <p className=" font-serif text-l leading-snug mb-4">
        15,000+ FIVE-STAR REVIEWS
      </p>

      <p className=" font-serif text-3xl leading-snug mb-6 text-center">
        Ethical, sustainable, unique jewelry at half the price of luxury brands
      </p>

      <Button className="bg-[#f4f2ee] text-black px-7 py-3 text-sm font-medium hover:bg-[#1c3b52]">
        SHOP SUSTAINABLE LUXURY
      </Button>
    </div>
  );
};
export default Banner;
