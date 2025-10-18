import React from "react";
import { Home, Utensils, Star, PhoneCall, Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg flex justify-between items-center px-8 py-4 text-white">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          🍴 <span className="text-yellow-300">Spice</span>Villa
        </h1>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold items-center">
          <li className="relative group cursor-pointer flex items-center gap-2 hover:text-yellow-300 transition-all duration-300">
            <Home size={20} /> Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-2 hover:text-yellow-300 transition-all duration-300">
            <Utensils size={20} /> Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-2 hover:text-yellow-300 transition-all duration-300">
            <Star size={20} /> Specials
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer flex items-center gap-2 hover:text-yellow-300 transition-all duration-300">
            <PhoneCall size={20} /> Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-yellow-400/40 transition-all duration-300">
          <Calendar size={18} /> Book Table
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
