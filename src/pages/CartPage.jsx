import { useContext, useState } from "react";
import { removeFromCart, updateQuantity } from "../services/cartServices";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState({ items: [] });

  const handleIncrement = (foundProductId, currentQty) => {
    const stockProduct = products.find((p) => p.id === foundProductId);
    updateQuantity(
      user.id,
      foundProductId,
      stockProduct.stock > currentQty ? currentQty + 1 : currentQty,
    );
    refreshCart();
  };

  const handleDecrement = (foundProductId, currentQty) => {
    updateQuantity(
      user.id,
      foundProductId,
      currentQty <= 1 ? currentQty : currentQty - 1,
    );
    refreshCart();
  };

  const handleRemove = (productId) => {
    removeFromCart(user.id, productId);
    refreshCart();
  };

  const totalPrice = cartData.items.reduce()
  return (
    <section className="bg-white flex flex-col gap-4 px-27">
      <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
        CART
      </h2>
      <table className="w-full text-left border-seperate broder-spacing-y-3">
        <thead>
          <tr className="text-base tracking-[10%] text-gray-800">
            <th scope="col" className="w-1/4 font-normal">
              PRODUCT
            </th>
            <th scope="col" className="w-1/4 font-normal">
              PRICE
            </th>
            <th scope="col" className="w-1/4 font-normal">
              QUANTITY
            </th>
            <th scope="col" className="w-1/4 font-normal">
              SUB TOTAL
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
};
