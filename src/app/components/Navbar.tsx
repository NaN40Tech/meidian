"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#testimonials", label: "Review" },
  { href: "#order", label: "Order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const ids = navLinks.map((l) => l.href.replace("#", ""));
  const elements = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  const onScroll = () => {
    setScrolled(window.scrollY > 50);

    const scrollPos = window.scrollY + window.innerHeight / 4;
    let current = "#home"; // default section

    for (const el of elements) {
      if (el.offsetTop <= scrollPos) {
        current = `#${el.id}`;
      }
    }
    setActive(current);
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // panggil sekali pas mount

  return () => window.removeEventListener("scroll", onScroll);
}, []);



  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4">
        {/* Logo di pojok kiri */}
        <Link
          href="#home"
          onClick={handleNavClick}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.webp"
            alt="Logo Mei Dian Dimsum Ayam Homemade"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold text-[var(--primary)]">
            Mei Dian
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`relative font-medium transition-colors
                ${
                  active === link.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--foreground)] hover:text-[var(--primary)]"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[var(--primary)]
                after:transition-all after:duration-300
                ${
                  active === link.href
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--foreground)]"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col gap-4 bg-white/95 shadow-md px-6 overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
            className={`font-medium ${
              active === link.href
                ? "text-[var(--primary)]"
                : "text-[var(--foreground)] hover:text-[var(--primary)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
