import { useState } from "react";
import { Link } from "react-router-dom";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import NavbarLink from "./NavbarLink";
import products from "../../data/products";

const NavbarIcons = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  // products whose title contains what the user typed
  const results = query.trim()
    ? products
        .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : [];

  const closeSearch = () => {
    setShowSearch(false);
    setQuery("");
  };

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        {showSearch ? (
          <div className="flex items-center gap-2 border-b border-black">
            <IoSearchOutline className="size-4" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-44 bg-transparent py-1 font-serif outline-none"
            />
            <button
              type="button"
              onClick={closeSearch}
              className="cursor-pointer"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            className="font-serif leading-snug flex cursor-pointer items-center gap-1 text-[16px] uppercase"
          >
            <IoSearchOutline className="size-4" />
            Search
          </button>
        )}

        {/* results dropdown */}
        {showSearch && query.trim() && (
          <div className="absolute right-0 top-full z-50 mt-2 w-72 border border-gray-200 bg-white shadow-lg">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.id}
                  to={`/productdetails/${item.id}`}
                  onClick={closeSearch}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100"
                >
                  <img
                    src={item.images?.[0] ?? item.image}
                    alt=""
                    className="size-12 object-cover"
                  />
                  <span className="text-sm">{item.title}</span>
                </Link>
              ))
            ) : (
              <p className="p-3 text-sm text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>

      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/blog">Blog</NavbarLink>

      <NavbarLink to="/cart">
        <IoBagOutline className="size-5" />
      </NavbarLink>
    </div>
  );
};

export default NavbarIcons;
