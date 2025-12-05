import { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import Menu from "../../Pages/Menu/Menu";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListUl,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";

const MobileApp = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <FaHome /> },
    { label: "Menu", path: "/menu", icon: <FaListUl /> },
    { label: "About", path: "/about", icon: <FaInfoCircle /> },
    { label: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  const getTitle = () => {
    switch (location.pathname) {
      case "/menu":
        return "Menuuuuuuu";
      case "/about":
        return "About";
      case "/contact":
        return "Contact";
      default:
        return "BurgerBoss";
    }
  };

  const renderContent = () => {
    switch (location.pathname) {
      case "/menu":
        return <Menu />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      default:
        return (
          <>
            <Slider />
       
          </>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col from-gray-950 via-gray-950 to-black text-white pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* Mobile app bar (title only) */}
      <header className="px-4 py-2 flex items-center justify-center bg-orange-900/98 backdrop-blur border-b border-gray-800 shadow-md">
        <h1 className="text-base font-semibold tracking-wide">{getTitle()}</h1>
      </header>

      {/* Content area (scrollable) – extra bottom padding so content is not too close to nav */}
      <main className="flex-1 overflow-y-auto pb-24">{renderContent()}</main>

      {/* Bottom nav with centered floating cart button */}
      <nav className="fixed inset-x-0 bottom-0 z-20 bg-gray-950/95 backdrop-blur border-t border-gray-800">
        <div className="relative flex justify-between items-center px-8 py-3">
          {/* Left two items */}
          <div className="flex gap-4">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 text-[11px] px-3 py-1 rounded-full transition ${
                  location.pathname === item.path
                    ? "text-yellow-300 bg-yellow-400/10"
                    : "text-gray-300 active:bg-gray-800/80"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right two items */}
          <div className="flex gap-4">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 text-[11px] px-3 py-1 rounded-full transition ${
                  location.pathname === item.path
                    ? "text-yellow-300 bg-yellow-400/10"
                    : "text-gray-300 active:bg-gray-800/80"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Floating cart button in the center */}
          <button
            className="absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl shadow-lg border-4 border-gray-950 active:scale-95 transition"
            type="button"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />
          </button>
        </div>
      </nav>

      {/* Simple cart bottom sheet with empty state */}
      {isCartOpen && (
        <div className="fixed inset-0 z-30 flex items-end justify-center md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Sheet */}
          <div className="relative w-full max-w-md mx-auto bg-gray-900 rounded-t-3xl border-t border-gray-700 shadow-2xl pb-[env(safe-area-inset-bottom)]">
            <div className="pt-3 pb-2 flex justify-center">
              <div className="h-1 w-10 rounded-full bg-gray-600" />
            </div>
            <div className="px-5 pb-5">
              <h2 className="text-lg font-semibold mb-1">Your Cart</h2>
              <p className="text-xs text-gray-400 mb-4">
                This is a demo empty cart. You can connect real items later.
              </p>

              {/* Empty state */}
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-yellow-300 mb-3">
                  <FaShoppingCart />
                </div>
                <p className="text-sm font-medium mb-1">Your cart is empty</p>
                <p className="text-[11px] text-gray-400 mb-4">
                  Browse the menu and add some delicious burgers.
                </p>
                <button
                  type="button"
                  className="bg-yellow-400 text-black text-xs px-4 py-2 rounded-full font-semibold active:scale-95 transition"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileApp;
