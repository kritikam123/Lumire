import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";
import { PiPawPrint } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { LuMinus, LuCheck } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import products from "../data/products";
import { AuthContext } from "../context/AuthContext";
import { addToCart, checkCart } from "../services/cartServices";

const CURRENCY = "$"; // change to your store currency
const LOGIN_ROUTE = "/login"; // change to your login route

const benefits = [
  { icon: BiLeaf, label: "Vegan" },
  { icon: PiPawPrint, label: "Cruelty free" },
  { icon: BsStars, label: "Clean" },
];

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [showImage, setShowImage] = useState(0);
  const [showAdded, setShowAdded] = useState(false);

  const currentProduct = products.find((p) => Number(p.id) === Number(id));

  useEffect(() => {
    if (user && currentProduct) {
      setShowAdded(Boolean(checkCart(user.id, currentProduct.id)));
    }
  }, [user, currentProduct?.id]);

  if (!currentProduct) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="font-serif text-3xl text-[#3E2F24]">
          We couldn't find that piece
        </h2>
        <p className="text-[#6F6258]">
          It may have been removed or the link is incorrect.
        </p>
        <Link
          to="/"
          className="rounded-sm bg-[#5B4636] px-6 py-3 text-sm text-white transition hover:bg-[#3E2F24]"
        >
          Back to shop
        </Link>
      </section>
    );
  }

  const inStock = currentProduct.stock !== 0;
  const lowStock = inStock && currentProduct.stock <= 5;
  const maxQty = currentProduct.stock ?? Infinity;
  const rating = Math.floor(currentProduct.rating || 0);

  const quantityIncrement = () =>
    setQuantity((prev) => Math.min(prev + 1, maxQty));
  const quantityDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    if (!user) {
      navigate(LOGIN_ROUTE);
      return;
    }
    if (!checkCart(user.id, currentProduct.id)) {
      addToCart(user.id, currentProduct.id, quantity);
    }
    setShowAdded(Boolean(checkCart(user.id, currentProduct.id)));
  };

  const buttonDisabled = !inStock || showAdded;
  const buttonLabel = !inStock
    ? "Out of stock"
    : showAdded
      ? "Added to cart"
      : user
        ? "Add to cart"
        : "Sign in to add to cart";

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 lg:py-14">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-2 text-sm text-[#8A7B6E]"
      >
        <Link to="/" className="hover:text-[#5B4636]">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-[#5B4636]">{currentProduct.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col gap-4 lg:flex-row-reverse">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-[#F3EEE8] lg:aspect-[4/5]">
            <img
              src={currentProduct.images[showImage]}
              alt={`${currentProduct.title} – view ${showImage + 1}`}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div
            className="flex gap-3 overflow-x-auto lg:w-20 lg:shrink-0 lg:flex-col lg:overflow-visible"
            role="tablist"
            aria-label="Product images"
          >
            {currentProduct.images.map((img, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={showImage === index}
                aria-label={`Show image ${index + 1}`}
                onClick={() => setShowImage(index)}
                className={`aspect-square w-16 shrink-0 cursor-pointer overflow-hidden rounded-sm bg-[#F3EEE8] outline-offset-2 transition focus-visible:outline-2 focus-visible:outline-[#5B4636] lg:w-full ${
                  showImage === index
                    ? "ring-2 ring-[#5B4636]"
                    : "opacity-70 ring-1 ring-[#E4DBD1] hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-8 lg:py-2">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-3xl leading-tight text-[#3E2F24] md:text-4xl">
              {currentProduct.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div
                className="flex gap-1"
                role="img"
                aria-label={`Rated ${currentProduct.rating} out of 5`}
              >
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={15}
                    className={
                      index < rating ? "text-[#C9963B]" : "text-[#DDD3C8]"
                    }
                  />
                ))}
              </div>

              <span
                className={`inline-flex items-center gap-1.5 text-sm ${
                  inStock ? "text-[#4F7A4A]" : "text-[#B3472F]"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    inStock ? "bg-[#4F7A4A]" : "bg-[#B3472F]"
                  }`}
                />
                {inStock ? "In stock" : "Out of stock"}
              </span>
            </div>

            {currentProduct.price != null && (
              <p className="text-2xl font-medium text-[#5B4636]">
                {CURRENCY}
                {Number(currentProduct.price).toLocaleString()}
              </p>
            )}

            <p className="max-w-prose text-base leading-relaxed text-[#6F6258]">
              {currentProduct.description}
            </p>
          </div>

          <hr className="border-[#E4DBD1]" />

          {/* Purchase */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div
                className="flex h-12 items-center justify-between rounded-sm border border-[#CFC2B4] sm:w-36"
                role="group"
                aria-label="Quantity"
              >
                <button
                  type="button"
                  onClick={quantityDecrement}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-full w-11 cursor-pointer items-center justify-center text-[#5B4636] transition hover:bg-[#F3EEE8] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <LuMinus size={16} />
                </button>
                <span
                  className="min-w-6 text-center text-[#3E2F24]"
                  aria-live="polite"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={quantityIncrement}
                  disabled={quantity >= maxQty}
                  aria-label="Increase quantity"
                  className="flex h-full w-11 cursor-pointer items-center justify-center text-[#5B4636] transition hover:bg-[#F3EEE8] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <GoPlus size={18} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={buttonDisabled}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-sm px-6 text-sm font-medium tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B4636] ${
                  buttonDisabled
                    ? "cursor-not-allowed bg-[#E4DBD1] text-[#8A7B6E]"
                    : "cursor-pointer bg-[#5B4636] text-white hover:bg-[#3E2F24]"
                }`}
              >
                {showAdded && <LuCheck size={16} />}
                {buttonLabel}
              </button>
            </div>

            {lowStock && (
              <p className="text-sm text-[#B3472F]">
                Only {currentProduct.stock} left
              </p>
            )}
          </div>

          {/* Benefits */}
          <div className="rounded-md bg-[#F7F3EE] px-6 py-5">
            <h2 className="mb-4 font-serif text-lg text-[#3E2F24]">
              Why you'll love it
            </h2>
            <ul className="grid grid-cols-3 gap-4">
              {benefits.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#CFC2B4] bg-white">
                    <Icon className="h-5 w-5 text-[#5B4636]" />
                  </span>
                  <span className="text-xs text-[#5B4636]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
