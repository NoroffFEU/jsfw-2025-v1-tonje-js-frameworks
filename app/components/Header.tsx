"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCartStore from "../stores/cartStore";

/**
 * Responsive navigation with brandlogo, navigation links, and a shopping cart icon.
 * On mobile, the links are hidden behind a hamburger menu that toggles when clicked.
 * The cart icon links to the shopping cart page, where users can view and manage their cart items.
 * @returns The header component with navigation and cart icon.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const links = [
    { href: "/", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/sustainability", label: "Sustainability" },
  ];

  return (
    <header className="relative border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="hidden gap-8 md:flex md:w-1/3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-text-secondary ${
                pathname === link.href
                  ? "underline"
                  : "hover:underline"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link 
          href="/" 
          className="font-brand text-2xl md:w-1/3 md:text-center">
          Alera
        </Link>

        <div className="flex md:w-1/3 md:justify-end">
          <Link 
            href="/cart" 
            aria-label="Shopping cart" 
            className="relative transition-transform hover:scale-110">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 border-t border-border bg-background px-6 py-4 shadow-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-text-secondary ${
                  pathname === link.href
                    ? "underline"
                    : "hover:underline"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}