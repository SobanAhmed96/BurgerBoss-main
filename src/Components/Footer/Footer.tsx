import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <Outlet/>
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Burger<span className="text-yellow-400">Boss</span>
          </h2>
          <p className="text-sm leading-6">
            Delicious burgers made with fresh ingredients.
            Fast delivery and great taste in every bite!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 duration-200">Home</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400 duration-200">Menu</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 duration-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-yellow-400 duration-200" href="#">Help Center</a></li>
            <li><a className="hover:text-yellow-400 duration-200" href="#">Delivery Info</a></li>
            <li><a className="hover:text-yellow-400 duration-200" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-yellow-400 duration-200" href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BurgerBoss. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
