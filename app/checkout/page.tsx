"use client";

import { useEffect } from "react";
import Link from "next/link";
import useCartStore from "../stores/cartStore";

/**
 * Checkout success page shown after completing a purchase.
 * Clears the cart and displays a confirmation message.
 * @returns The checkout success page component.
 */
export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-3xl font-bold uppercase">Thank You For Your Order</h1>
      <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <p className="mt-6 text-text-secondary">
        Your order has been successfully placed, and we are preparing it for
        shipment.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-3xl bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
      >
        Back to Shop
      </Link>
    </main>
  );
}