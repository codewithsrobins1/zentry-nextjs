import React from "react";
import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const navlinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://tiktok.com", icon: <FaTiktok /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://x.com", icon: <FaTwitter /> },
];

export const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Zentry 2025. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {navlinks.map((link: any, idx: number) => (
            <a
              href={link.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
