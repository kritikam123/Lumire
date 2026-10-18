import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { getCartByUser, clearCart } from "../services/cartServices";
import { placeOrder } from "../services/orderServices.js";
import { AuthContext } from "../context/AuthContext.jsx";
import products from "../data/products.js";

const formatPrice = (n) => `$${n.toLocaleString("en-US")}`;
const SHIPPING_FEE = 10; // change this to your shipping price

// Each object here becomes one input box in the form
const fields = [
  { name: "fullName", label: "Full name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "address", label: "Street address", type: "text" },
  { name: "city", label: "City", type: "text" },
  { name: "postalCode", label: "Postal code", type: "text" },
  { name: "country", label: "Country", type: "text" },
];

const CheckoutPage = () => {
  const { user } = useContext(AuthContext);

  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [placedOrder, setPlacedOrder] = useState(null);

  // 1. Load the cart items of the logged-in user
  useEffect(() => {
    if (user) {
      setCartItems(getCartByUser(user.id).items);
    }
  }, [user]);

  // 2. Match each cart item with its product details
  const lines = cartItems
    .map((item) => ({
      quantity: item.quantity,
      product: products.find((p) => p.id === item.productId),
    }))
    .filter((line) => line.product);

  // 3. Work out the prices
  const subtotal = lines.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );
  const total = subtotal + SHIPPING_FEE;

  // Update the form when the user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 4. When the user clicks "Place order"
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the order in localStorage
    const order = placeOrder(user.id, {
      customer: form,
      paymentMethod,
      items: lines.map((line) => ({
        productId: line.product.id,
        title: line.product.title,
        price: line.product.price,
        quantity: line.quantity,
      })),
      subtotal,
      shipping: SHIPPING_FEE,
      total,
    });

    // Empty the cart (clearCart shows no toast, unlike removeFromCart)
    clearCart(user.id);
    setCartItems([]);

    setPlacedOrder(order);
    toast.success("Order placed!");
  };

  // ---------- Order placed screen ----------
  if (placedOrder) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl text-[#1a1a1a] font-semibold">
          THANK YOU
        </h2>
        <p className="mt-4 text-stone-600">
          Your order <strong>{placedOrder.id}</strong> has been placed.
        </p>
        <p className="mt-1 text-stone-500">
          Total: {formatPrice(placedOrder.total)} · {placedOrder.paymentMethod}
        </p>
        <Link
          to="/jewelry"
          className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  // ---------- Not logged in ----------
  if (!user) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl text-[#1a1a1a] font-semibold">
          CHECKOUT
        </h2>
        <p className="mt-4 text-stone-500">Please log in to check out.</p>
        <Link
          to="/login"
          className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Login
        </Link>
      </section>
    );
  }

  // ---------- Empty cart ----------
  if (lines.length === 0) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl text-[#1a1a1a] font-semibold">
          CHECKOUT
        </h2>
        <p className="mt-4 text-stone-500">Your cart is empty.</p>
        <Link
          to="/jewelry"
          className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  // ---------- Checkout page ----------
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
      <h2 className="mb-10 font-serif text-4xl leading-snug text-[#1a1a1a] font-semibold text-center">
        CHECKOUT
      </h2>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* ----- Form ----- */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h3 className="font-serif text-2xl text-[#1a1a1a]">
            Shipping details
          </h3>

          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-1 block text-sm text-stone-600"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-lg border border-stone-300 px-4 text-stone-900 focus:border-stone-900 focus:outline-none"
              />
            </div>
          ))}

          <h3 className="mt-4 font-serif text-2xl text-[#1a1a1a]">Payment</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="h-12 w-full rounded-lg border border-stone-300 px-4 text-stone-900 focus:border-stone-900 focus:outline-none"
          >
            <option>Cash on delivery</option>
            <option>Card</option>
          </select>

          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-full bg-stone-900 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-stone-700"
          >
            Place order · {formatPrice(total)}
          </button>
        </form>

        {/* ----- Order summary ----- */}
        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-6 lg:sticky lg:top-6">
          <h3 className="mb-5 font-serif text-xl tracking-[0.15em] text-stone-800">
            ORDER SUMMARY
          </h3>

          <ul className="flex flex-col gap-4">
            {lines.map(({ product, quantity }) => (
              <li key={product.id} className="flex items-center gap-4">
                <img
                  src={product.image ?? product.images?.[0]}
                  alt={product.title}
                  className="h-16 w-14 rounded-md bg-stone-100 object-cover"
                />
                <div className="flex-1 text-sm">
                  <p className="text-stone-900">{product.title}</p>
                  <p className="text-stone-500">Qty: {quantity}</p>
                </div>
                <p className="text-sm text-stone-900">
                  {formatPrice(product.price * quantity)}
                </p>
              </li>
            ))}
          </ul>

          <div className="my-5 border-t border-stone-200" />

          <div className="flex justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-stone-600">
            <span>Shipping</span>
            <span>{formatPrice(SHIPPING_FEE)}</span>
          </div>

          <div className="my-5 border-t border-stone-200" />

          <div className="flex justify-between text-base font-semibold text-stone-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutPage;
