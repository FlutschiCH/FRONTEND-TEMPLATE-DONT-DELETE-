import React from "react";

export const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl rounded-[2.5rem] p-6 m-6 text-white tracking-tight font-medium">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block hover:text-sky-400 transition-colors">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-sky-400 transition-colors">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-sky-400 transition-colors">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
