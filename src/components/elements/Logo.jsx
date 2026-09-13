import { Link } from "react-router-dom";

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const Logo = ({ background = "transparent", size = "xl", className = "" }) => {
  return (
    <Link
      to="/"
      className={`font-serif text-3xl leading-snug inline-block py-4 text-[#0a0a0a] font bold ${size[size]} ${className}`}
    >
      LUMIRE
    </Link>
  );
};

export default Logo;
