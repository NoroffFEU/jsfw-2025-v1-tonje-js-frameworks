import Link from "next/link";
import Image from "next/image";
import type { Product } from "../interfaces/products";

interface ProductCardProps {
  product: Product;
}

//* Calculates the discount percentage based on original and discounted prices.
function getDiscountPercentage(price: number, discountedPrice: number): number {
  return Math.round(((price - discountedPrice) / price) * 100);
}

/**
 * Displays the product as a clickable card with image, rating, title, and price.
 * Shows a discount badge and crossed-out original price if the product is on sale.
 * @param product - The product to display in the card.
 * @returns The product card component.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.price > product.discountedPrice;
  const discount = hasDiscount
    ? getDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group overflow-hidden rounded-md shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-56 bg-background">
        {hasDiscount && (
          <span className="absolute right-2 top-2 z-10 bg-accent px-3 py-1 text-xs text-white">
            -{discount}%
          </span>
        )}
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="bg-card p-4">
        <div className="text-sm">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>

        <h3 className="mt-1 font-bold uppercase">{product.title}</h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold">
            {product.discountedPrice} kr
          </span>
          {hasDiscount && (
            <span className="text-sm text-text-secondary line-through">
              {product.price} kr
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}