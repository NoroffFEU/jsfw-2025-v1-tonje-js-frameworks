"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCartStore from "../stores/cartStore";

/**
 * Shopping cart page that displays all items in the cart.
 * Users can adjust quantities, remove items and proceed to checkout.
 * @returns The cart page component.
 */
export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const router = useRouter();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold uppercase">Cart</h1>
        <p className="text-text-secondary">Your cart is empty.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-white hover:opacity-90"
        >
          Shop now
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold uppercase">Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b border-border pb-4"
          >
            <div className="relative h-20 w-20 shrink-0">
              <Image
                src={item.image.url}
                alt={item.image.alt}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold uppercase">{item.title}</h2>
              <p className="text-sm text-text-secondary">
                {item.discountedPrice} kr
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="flex h-8 w-8 items-center justify-center border border-border"
              >
                -
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="flex h-8 w-8 items-center justify-center border border-border"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-text-secondary hover:text-text"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-lg">
          Total: <span className="font-bold">{totalPrice.toFixed(2)} kr</span>
        </p>
        <button
          onClick={handleCheckout}
          className="mt-4 w-full rounded-md bg-accent py-3 font-medium uppercase text-white hover:opacity-90"
        >
          Checkout
        </button>
      </div>
    </main>
  );
}