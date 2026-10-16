import { User } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import { Link } from "lucide-react";
import Button from "./Button";
import { addToCart, checkCart } from "../../services/cartServices";

const Card = ({
  cardId,
  silderClassName,
  cardImage,
  ImageClassName,
  imageCenterLabelColor = "white",
  imageCenterLabelSize = "xl",
  imageCenterLabel,
  cardTitle,
  cardCategory,
  cardPrice,
  cardButton,
}) => {
  const { user } = useContext(AuthContext);
  const [showAdded, setShowAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (userId, cardId) => {
    if (!userId) {
      navigate("/login");
      toast.message("Please Login First!", {
        description: `Login to use add to cart`,
        duration: 4000,
        type: "success",
      });
      return;
    }
    if (!checkCart(userId, cardId)) {
      addToCart(userId, cardId);
      setShowAdded(true);
    } else {
      toast.message("Product already added!", {
        description: `Your product was already added`,
        duration: 4000,
        type: "success",
      });
    }
  };

  const currentProduct = products.find((p) => Number(p.id) == Number(cardId));

  useEffect(() => {
    checkCart(user?.id, currentProduct?.id)
      ? setShowAdded(true)
      : setShowAdded(false);
  }, [user]);

  return (
    <div className="w-full justify-center">
      <div>
        <div id={cardId} className={`relative`}>
          <div className="w-full h-93 flex items-center justify-center">
            <img
              src={cardImage}
              alt="Card Image"
              className={`w-full h-full object-cover ${ImageClassName}`}
            />
          </div>
          {imageCenterLabel && (
            <p
              className={`absolute top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 items-center text-${imageCenterLabelColor} py-4 font-bold text-${imageCenterLabelSize}`}
            >
              {imageCenterLabel}
            </p>
          )}
        </div>
        {cardTitle && cardCategory && cardPrice && (
          <div>
            <p>{cardTitle}</p>
            <p>{`$ ${cardPrice}`}</p>
          </div>
        )}
        {cardButton && (
          <Button
            buttonId={cardId}
            onClick={() => handleAddToCart(user?.id, cardId)}
          >
            {user ? (showAdded ? "Added" : "Add to cart") : "Add to cart"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
