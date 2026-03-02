"use client";

import useCartStore from "../stores/cartStore";
import toast from "react-hot-toast";
import type { Product } from "../interfaces/products";

interface AddToCartButtonProps {
  product: Product;
}

/**
 * Button that adds a product to the cart.
 * @returns The add to cart button component.
 */
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.title} added to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 w-full rounded-md bg-accent py-3 font-medium uppercase text-white hover:opacity-90"
    >
      Add to Cart
    </button>
  );
}