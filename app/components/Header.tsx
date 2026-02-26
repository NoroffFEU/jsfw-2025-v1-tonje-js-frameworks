"use client";

import { useState } from "react";
import Link from "next/link";
import useCartStore from "../stores/cartStore";

/**
 * Responsive navigation with brandlogo, links to shop and contact page, and a shopping cart icon.
 * On mobile, the links are hidden behind a hamburger menu that toggles when clicked.
 * The cart icon links to the shopping cart page, where users can view and manage their cart items.
 * @returns The header component with navigation and cart icon.
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link href="/" className="font-brand text-2xl">
          Alera
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/" className="hover:text-text-secondary">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-text-secondary">
            Contact Us
          </Link>
        </div>

        <Link href="/cart" aria-label="Shopping cart" className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      </nav>

      {isMenuOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-text-secondary"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-text-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}