import { useState } from "react";
import { getCurrentUser, logoutUser } from "../services/userService";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPackage,
  FiHeart,
  FiLogOut,
  FiEdit2,
} from "react-icons/fi";
import Button from "../components/elements/Button";

const AccountPages = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const user = getCurrentUser();

  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#faf9f6] px-6">
        {" "}
        <div className="text-center">
          {" "}
          <FiUser
            size={40}
            strokeWidth={1}
            className="mx-auto text-gray-400"
          />{" "}
          <h1 className="mt-5 font-[Cormorant_Garamond] text-4xl text-gray-900">
            {" "}
            Please Log In{" "}
          </h1>{" "}
          <p className="mt-2 text-sm text-gray-500">
            {" "}
            You need to log in to view your account.{" "}
          </p>{" "}
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="mt-6 bg-gray-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-gray-700"
          >
            {" "}
            Login{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }

  const menuItems = [
    { name: "My Profile", icon: FiUser, value: "profile" },
    { name: "My Orders", icon: FiPackage, value: "orders" },
    { name: "Wishlist", icon: FiHeart, value: "wishlist" },
  ];
  return (
    <section>
      <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
        Welcome, {user.firstName}
      </h2>
      <p>Manage your account, ordera and personal information</p>
      <div className="grid grid-cols-1 gap-8 ">
        <aside className="h-fit border border-[#e6e1d9] bg-white">
          <div className="p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <span className="font-[Cormorant_Garamond] text-3xl text-gray-700">
                {" "}
                {user.firstName?.charAt(0)} {user.lastName?.charAt(0)}{" "}
              </span>
            </div>
            <h2 className="font-serif text-3xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
          </div>
          <nav className="border-t border-[#e6e1d9]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.value}
                  onClick={() => setActiveTab(item.value)}
                  className={`flex w-full items-center gap-4 px-6 py-4 text-left text-sm transition ${activeTab === item.value ? "bg-[#f5f2ed] text-gray-900" : "text-gray-500 hover:bg-[#faf9f6]"}`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <Button
              onClick={() => {
                logoutUser();
                window.location.href = "/login";
              }}
            >
              <FiLogOut size={18} strokeWidth={1.5} />
              <span>Logout</span>
            </Button>
          </nav>
        </aside>
        <main>
          {activeTab === "profile" && (
            <div>
              <div className="mb-7 flex items-end justify-between">
                <div>
                  <p>Account</p>
                  <h2 className="font-serif text-2xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
                    Personal Information
                  </h2>
                </div>
                <button className="hidden items-center gap-2 border border-gray-300 px-5 py-2.5 text-xs uppercase tracking-widest text-gray-600 transition hover:bg-gray-900 hover:text-white md:flex">
                  {" "}
                  <FiEdit2 size={14} /> Edit{" "}
                </button>
                <div className="border border-[#e6e1d9] bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-[#e6e1d9] p-6 md:border-r">
                      <div className="mb-3 flex items-center gap-3">
                        <FiUser
                          size={17}
                          strokeWidth={1.5}
                          className="text-gray-400"
                        />
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                          First Name
                        </span>
                      </div>
                      <p className="text-sm">
                        {user.firstName || "Not provided"}
                      </p>
                    </div>
                    <div className="border-b border-[#e6e1d9] p-6 md:border-r">
                      <div className="mb-3 flex items-center gap-3">
                        <FiUser
                          size={17}
                          strokeWidth={1.5}
                          className="text-gray-400"
                        />
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                          Last Name
                        </span>
                      </div>
                      <p className="text-sm">
                        {user.lastName || "Not provided"}
                      </p>
                    </div>
                    <div className="border-b border-[#e6e1d9] p-6 md:border-r">
                      <div className="mb-3 flex items-center gap-3">
                        <FiMail
                          size={17}
                          strokeWidth={1.5}
                          className="text-gray-400"
                        />
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                          Email
                        </span>
                      </div>
                      <p className="break-all text-sm text-gray-800">
                        {user.email || "Not provided"}
                      </p>
                    </div>
                    <div className="border-b border-[#e6e1d9] p-6 md:border-b-0">
                      {" "}
                      <div className="mb-3 flex items-center gap-3">
                        {" "}
                        <FiPhone
                          size={17}
                          strokeWidth={1.5}
                          className="text-gray-400"
                        />{" "}
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                          {" "}
                          Phone{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="text-sm text-gray-800">
                        {" "}
                        {user.phone || "Not provided"}{" "}
                      </p>{" "}
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="mb-7">
                    <p className="text-sm uppercase">Delivery</p>
                    <h2 className="mt-2 font-[Cormorant_Garamond] text-4xl text-gray-900 md:text-5xl">
                      {" "}
                      Shipping Address{" "}
                    </h2>
                  </div>
                  <div className="flex items-start justify-between border border-[#e6e1d9] bg-white p-6 md:p-8">
                    <div className="flex gap-4">
                      <FiMapPin
                        size={20}
                        strokeWidth={1.5}
                        className="mt-1 flex-shrink-0 text-gray-400"
                      />
                      <div>
                        <p className="text-sm font-sm leading-6 text-gray-500">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="mt-2 test-sm leading-6 text-gray-500">
                          {user.address || "No shipping addrerss added yet"}
                        </p>
                      </div>
                    </div>
                    <button className="hidden text-xs uppercase tracking-widest text-gray-500 transition hover:text-black md:block">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
                My Orders
              </h2>
              <div className="mt-8 border border-[#e6e1d9] bg-white px-6 py-16 text-center">
                {" "}
                <FiPackage
                  size={38}
                  strokeWidth={1}
                  className="mx-auto text-gray-400"
                />{" "}
                <h3 className="mt-5 font-[Cormorant_Garamond] text-3xl text-gray-900">
                  {" "}
                  No orders yet{" "}
                </h3>{" "}
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  {" "}
                  Your orders will appear here once you purchase something from
                  our collection.{" "}
                </p>{" "}
                <button className="mt-7 bg-gray-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-gray-700">
                  {" "}
                  Shop Jewelry{" "}
                </button>{" "}
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div>
              <h2 className="font-serif text-4xl leading-snug text-[#1a1a1a] mb-1 text-semibold text-center">
                My Wishlist
              </h2>
              <div className="mt-8 border border-[#e6e1d9] bg-white px-6 py-16 text-center">
                {" "}
                <FiHeart
                  size={38}
                  strokeWidth={1}
                  className="mx-auto text-gray-400"
                />{" "}
                <h3 className="mt-5 font-[Cormorant_Garamond] text-3xl text-gray-900">
                  {" "}
                  Your wishlist is empty{" "}
                </h3>{" "}
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  {" "}
                  Save the jewelry you love and find all your favorite pieces
                  here.{" "}
                </p>{" "}
                <button className="mt-7 bg-gray-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-gray-700">
                  {" "}
                  Explore Collection{" "}
                </button>{" "}
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Account;
