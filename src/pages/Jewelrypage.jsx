import HomeCollection01 from "../assets/home/HomeCollection01.png";
import HomeCollection02 from "../assets/home/HomeCollection02.png";
import HomeCollection03 from "../assets/home/HomeCollection03.png";
import HomeCollection04 from "../assets/home/HomeCollection04.png";

const jewelryItems = [
  {
    title: "Necklaces",
    image: HomeCollection01,
    path: "/necklaces",
  },
  {
    title: "Rings",
    image: HomeCollection02,
    path: "/rings",
  },
  {
    title: "Earrings",
    image: HomeCollection03,
    path: "/earrings",
  },
  {
    title: "Bracelets",
    image: HomeCollection04,
    path: "/bracelets",
  },
  {
    title: "Lab Diamonds",
    image: HomeCollection04,
    path: "/lab-diamonds",
  },
];

const Jewelrypage = () => {
  return (
    <section className="px-10 py-12">
      <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
        Explore Our Collection
      </h2>
      <p className="font-[Cormorant_Garamond] mt-2 mb-6 text-xl text-center ">
        Discover the perfect jewelry to complement your style
      </p>
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-4 gap-1 flex-1">
          {jewelryItems.map((item) => (
            <a key={item.title} href={item.path} className="group">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-serif text-xl leading-snug mt-4">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jewelrypage;
