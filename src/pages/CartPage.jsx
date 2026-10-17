import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "sonner";

import {
  getCartByUser,
  removeFromCart,
  updateQuantity,
} from "../services/cartServices";
import { AuthContext } from "../context/AuthContext.jsx";
import products from "../data/products.js";

const formatPrice = (n) => `$${n.toLocaleString("en-US")}`;

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState({ items: [] });

  const refreshCart = () => setCartData(getCartByUser(user.id));

  useEffect(() => {
    if (user) {
      setCartData(getCartByUser(user.id));
    }
  }, [user]);

  const handleIncrement = (productId, currentQty) => {
    const stockProduct = products.find((p) => p.id === productId);
    if (!stockProduct || currentQty >= stockProduct.stock) return;
    updateQuantity(user.id, productId, currentQty + 1);
    refreshCart();
  };

  const handleDecrement = (productId, currentQty) => {
    if (currentQty <= 1) return;
    updateQuantity(user.id, productId, currentQty - 1);
    refreshCart();
  };

  const handleRemove = (productId) => {
    removeFromCart(user.id, productId);
    refreshCart();
    toast("Item removed from cart");
  };

  // Join cart items with product data once, skip products that no longer exist
  const lines = cartData.items
    .map((item) => ({
      quantity: Math.max(1, item.quantity),
      product: products.find((p) => p.id === item.productId),
    }))
    .filter((line) => line.product);

  const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0);
  const totalPrice = lines.reduce(
    (sum, l) => sum + l.product.price * l.quantity,
    0,
  );

  // Logged-out state
  if (!user) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl text-[#1a1a1a] font-semibold">
          CART
        </h2>
        <p className="mt-4 text-stone-500">Please log in to view your cart.</p>
        <Link
          to="/login"
          className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Login
        </Link>
      </section>
    );
  }

  // Empty state
  if (lines.length === 0) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl text-[#1a1a1a] font-semibold">
          CART
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

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
      <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] font-semibold text-center">
        CART
      </h2>
      <p className="mt-1 mb-10 text-center text-sm text-stone-500">
        {totalItems} {totalItems === 1 ? "item" : "items"}
      </p>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Items */}
        <ul className="divide-y divide-stone-200 border-y border-stone-200">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-4 sm:gap-6 py-6">
              <div className="h-28 w-24 sm:h-32 sm:w-28 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg leading-snug text-[#1a1a1a] font-semibold">
                      {product.title}
                    </h3>
                    {product.category && (
                      <p className="text-xs italic capitalize text-stone-500">
                        {product.category}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-stone-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <p className="font-semibold text-stone-900">
                    {formatPrice(product.price * quantity)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* Quantity stepper */}
                  <div className="inline-flex items-center rounded-full border border-stone-300">
                    <button
                      type="button"
                      onClick={() => handleDecrement(product.id, quantity)}
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-stone-600 transition-colors hover:text-[#8A6A45] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-medium text-stone-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(product.id, quantity)}
                      disabled={quantity >= product.stock}
                      aria-label="Increase quantity"
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-stone-600 transition-colors hover:text-[#8A6A45] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemove(product.id)}
                    className="flex cursor-pointer items-center gap-1 text-sm text-stone-400 transition-colors hover:text-red-500"
                  >
                    <RiDeleteBinLine size={18} />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-6 lg:sticky lg:top-6">
          <h3 className="mb-5 font-serif text-xl tracking-[0.15em] text-stone-800">
            ORDER SUMMARY
          </h3>

          <div className="flex justify-between text-sm text-stone-600">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-stone-600">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="my-5 border-t border-stone-200" />

          <div className="flex justify-between text-base font-semibold text-stone-900">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block w-full rounded-full bg-stone-900 py-3 text-center text-sm font-medium tracking-wide text-white transition-colors hover:bg-stone-700"
          >
            Checkout
          </Link>
          <Link
            to="/jewelry"
            className="mt-3 block text-center text-sm text-stone-500 transition-colors hover:text-[#8A6A45]"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
