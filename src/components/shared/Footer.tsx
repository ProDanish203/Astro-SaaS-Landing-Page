import React from "react";
import { socialIcons } from "../../lib/data";

export const Footer = () => {
  return (
    <footer className="py-24 bg-zinc-950">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="/assets/images/logo.svg" alt="BlockForge Logo" />
          </div>
          <nav className="hidden md:flex text-zinc-500 font-heading font-black gap-12">
            <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className="mt-12 md:mt-48 md:flex justify-between items-center">
          <p className="text-zinc-400 ">
            &copy; 2024 BlockForge. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6">
            {socialIcons.map(({ icon }, index) => (
              <div
                key={index}
                className="size-10 bg-zinc-800 rounded-full inline-flex justify-center items-center"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
