import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl w-full max-w-7xl px-6 py-3 rounded-[2.5rem] flex items-center justify-between tracking-tight font-medium">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-white font-bold tracking-tight text-xl">
            Nexus
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-sm font-medium text-zinc-400 hover:text-sky-400 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium text-zinc-400 hover:text-sky-400 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-medium text-zinc-400 hover:text-sky-400 transition-colors"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
