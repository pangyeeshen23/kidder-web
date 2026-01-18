"use client";

import { navItems } from "@/app/data/navItems";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` ${styles.navbar} transition-all duration-300 border-b ${scrolled ? "bg-white/80 backdrop-blur-md" : ""}`}
    >
      <div className="flex gap-6 px-6 py-2">
        <img src="/img/sun.png" alt="Logo" className="w-20" />
        <div className="flex-auto"></div>
        <ul className="flex gap-6 justify-center items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              // onClick={() => refs[item.id].current?.scrollIntoView({ behavior: "smooth" })}
              className={`cursor-pointer text-[20px] ${styles.link} ${scrolled ? "text-black" : "text-white"}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
