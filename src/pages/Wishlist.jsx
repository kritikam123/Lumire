import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistItems, setWishListItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const wishlist = getWishlist();

    const userWishlist = wishlist.find((item) => item.userId === user.id);

    if (!userWishlist) {
      setWishListItems([]);
      return;
    }

    const items = userWishlist.items
      .map((wishItem) => product.find((p) => p.id === wishItem.productId))
      .filter(Boolean);

      setWishListItems(items);
  }, [user]);
  return (
    <section className="px-6 md:px-12 lg:px-20 space-y-12">
      <div>
        <h1 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
          Wishlist
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={product.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-cols items-center justify-center py-20 gap-4">
            <p className="text-lg text-gray-600">
              You don't have any products in your wishlist
            </p>

            <Button>Shop Now</Button>
          </div>
        )}
      </div>
    </section>
  );
};
