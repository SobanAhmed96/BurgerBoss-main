import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Burger<span className="text-yellow-400">Boss</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:text-yellow-400 duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Button Sample */}
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 duration-200">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-3 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-2 text-lg hover:text-yellow-400 duration-200"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 duration-200">
            Order Now
          </button>
        </div>
      )}

      {/* Page Content */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
