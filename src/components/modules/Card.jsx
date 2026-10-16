import { useState } from "react";
import Button from "../elements/Button";

const Card = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const { name, material, price, discountPrice, image } = product;

  const handleAddToCart = () => {
    onAddToCart?.(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="w-full max-w-xs rounded-2xl overflow-hidden bg-white border border-stone-200 flex flex-col justify-between">
      <div className="aspect-square w-full overflow-hidden bg-stone-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
        <div className="text-center space-y-1">
          <h3 className="font-serif text-lg leading-snug text-[#1a1a1a] font-semibold">
            {name}
          </h3>

          {material && (
            <p className="italic text-xs text-stone-500">{material}</p>
          )}

          <div className="pt-1 flex items-center justify-center gap-2">
            {discountPrice ? (
              <>
                <span className="text-sm font-semibold text-stone-900">
                  ${discountPrice}
                </span>
                <span className="text-xs text-stone-400 line-through">
                  ${price}
                </span>
              </>
            ) : (
              <span className="text-sm font-semibold text-stone-900">
                ${price}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={added}
          className="mt-3 w-full flex items-center justify-center gap-2 rounded-full py-2 text-sm font-medium bg-stone-900 text-white hover:bg-stone-700 transition-colors disabled:opacity-70"
        >
          {added ? "Added" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
