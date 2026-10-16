import { useEffect, useState } from "react";
import Card from "../components/elements/Card";
import products from "../data/products";

const Necklaces = () => {
  const necklaceProduct = products.filter((item) => item.category === "necklaces");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [necklaceProduct.length]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = necklaceProduct.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(necklaceProduct.length / itemsPerPage);
  return (
    <section className="md:px-12 lg:px-27 w-full h-full">
      <h1 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
        Necklaces
      </h1>

      <div className="grid grid-cols-4 gap-5">
        {currentItems.map((item) => (
          <Card
            key={item.id}
            cardId={item.id}
            cardImage={item.image}
            cardTitle={item.title}
            cardCategory={item.category}
            cardPrice={item.price}
            cardButton={"Add to Cart"}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded cursor-pointer ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disables:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Necklaces;
