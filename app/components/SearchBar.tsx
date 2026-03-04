"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "../interfaces/products";

interface SearchBarProps {
  products: Product[];
}

/**
 * Search bar component that filters products by title as the user types.
 * Displays a dropdown with up to 5 products matching the search term, showing their image and title.
 * @param products - The list of products to search through.
 * @returns The search bar component.
 */
export default function SearchBar({ products }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative mx-auto mb-8 max-w-md">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-3xl border border-border bg-card px-4 py-2 pr-10 outline-none focus:border-accent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {searchTerm && (
        <div className="absolute z-20 mt-1 w-full rounded-md border border-border bg-card shadow-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 px-4 py-2 hover:bg-background"
              >
                <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    width={40}
                    height={40}
                    className="rounded object-cover"
                />
                <span className="text-sm">{product.title}</span>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-text-secondary">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}