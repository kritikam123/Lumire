import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LuCheck, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const CURRENCY = "$";
const ITEMS_PER_PAGE = 8;
const DETAILS_ROUTE = "/productdetails"; // matches your route: /productdetails/:id

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A to Z" },
];

const ProductCard = ({ item, isAdded, onAdd }) => {
  const mainImage = item.images?.[0] ?? item.image;
  const hoverImage = item.images?.[1];

  return (
    <article className="group flex flex-col">
      <Link
        to={`${DETAILS_ROUTE}/${item.id}`}
        className="flex flex-col gap-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#5B4636]"
      >
        <div className="relative aspect-4/5 overflow-hidden rounded-md bg-[#F3EEE8]">
          <img
            src={mainImage}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {hoverImage && (
            <img
              src={hoverImage}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
          {item.stock === 0 && (
            <span className="absolute left-3 top-3 rounded-sm bg-white/90 px-2.5 py-1 text-xs text-[#B3472F]">
              Sold out
            </span>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[15px] leading-snug text-[#3E2F24]">
            {item.title}
          </h2>
          <p className="shrink-0 text-[15px] text-[#5B4636]">
            {CURRENCY}
            {Number(item.price).toLocaleString()}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={onAdd}
        disabled={isAdded || item.stock === 0}
        className={`mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-sm border text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B4636] ${
          isAdded
            ? "cursor-default border-[#E4DBD1] bg-[#F3EEE8] text-[#6F6258]"
            : item.stock === 0
              ? "cursor-not-allowed border-[#E4DBD1] text-[#B5A99D]"
              : "cursor-pointer border-[#5B4636] text-[#5B4636] hover:bg-[#5B4636] hover:text-white"
        }`}
      >
        {isAdded && <LuCheck size={15} />}
        {isAdded ? "Added to cart" : "Add to cart"}
      </button>
    </article>
  );
};

// Use either `category` (matches item.category) or `getProducts`
// (a function that receives all products and returns the list to show).
// Define getProducts outside your component so it stays stable between renders.
const CategoryPage = ({ category, getProducts, title, description }) => {
  // NOTE: if your CartContext names the cart array differently (e.g. cartItems),
  // change it here. Each cart entry needs an `id` or `productId`.
  const { addToCart, cart = [] } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");

  const necklaces = useMemo(() => {
    const list = getProducts
      ? getProducts(products)
      : products.filter((item) => item.category === category);
    switch (sortBy) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...list].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return list;
    }
  }, [category, getProducts, sortBy]);

  const cartIds = useMemo(
    () => new Set(cart.map((c) => Number(c.id ?? c.productId))),
    [cart],
  );

  const totalPages = Math.max(1, Math.ceil(necklaces.length / ITEMS_PER_PAGE));
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = necklaces.slice(start, start + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 lg:py-14">
      {/* Header */}
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <h1 className="font-serif text-4xl font-semibold text-[#3E2F24] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-md text-[15px] leading-relaxed text-[#6F6258]">
            {description}
          </p>
        )}
      </header>

      {/* Toolbar */}
      <div className="mb-8 flex items-center justify-between border-y border-[#E4DBD1] py-3">
        <p className="text-sm text-[#6F6258]">
          {necklaces.length} {necklaces.length === 1 ? "piece" : "pieces"}
        </p>
        <label className="flex items-center gap-2 text-sm text-[#6F6258]">
          Sort by
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="cursor-pointer rounded-sm border border-[#CFC2B4] bg-white px-3 py-1.5 text-[#3E2F24] focus-visible:outline-2 focus-visible:outline-[#5B4636]"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Grid */}
      {currentItems.length === 0 ? (
        <p className="py-20 text-center text-[#6F6258]">
          Nothing here yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {currentItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              isAdded={cartIds.has(Number(item.id))}
              onAdd={() => addToCart(item)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-14 flex items-center justify-center gap-1.5"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-[#5B4636] transition hover:bg-[#F3EEE8] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <LuChevronLeft size={18} />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            const active = currentPage === page;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`Page ${page}`}
                aria-current={active ? "page" : undefined}
                className={`h-10 w-10 cursor-pointer rounded-sm text-sm transition ${
                  active
                    ? "bg-[#5B4636] text-white"
                    : "text-[#5B4636] hover:bg-[#F3EEE8]"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-[#5B4636] transition hover:bg-[#F3EEE8] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <LuChevronRight size={18} />
          </button>
        </nav>
      )}
    </section>
  );
};

export default CategoryPage;