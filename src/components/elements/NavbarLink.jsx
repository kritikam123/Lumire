import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={`font-serif leading-snug text-[16px] text-[#4B5563] uppercase tracking-wide ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default NavbarLink;
