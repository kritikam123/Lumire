import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import NavbarLink from "./NavbarLink";

const NavbarIcons = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="font-serif leading-snug flex items-center gap-1 text-[16px] uppercase">
        <IoSearchOutline className="size-4" />
        Search
      </button>

      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/blog">Blog</NavbarLink>

      <NavbarLink to="/cart">
        <IoBagOutline className="size-5" />
      </NavbarLink>
    </div>
  );
};

export default NavbarIcons;
