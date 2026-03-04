import Image from "next/image";
import { fetchProduct } from "../../services/api";
import AddToCartButton from "../../components/AddToCartButton";
import Breadcrumb from "../../components/Breadcrumb";

/**
 * Calculates the discount percentage based on the original price and the discounted price.
 * @param price - The original price of the product.
 * @param discountedPrice - The discounted price of the product.
 * @returns The discount percentage as a whole number (e.g., 20 for 20%).
 */
function getDiscountPercentage(price: number, discountedPrice: number): number {
  return Math.round(((price - discountedPrice) / price) * 100);
}

/**
 * Single product detail page showing image, title, description, price, tags, reviews and add to cart button.
 * @returns The product detail page component
 */
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await fetchProduct(id);

  const hasDiscount = product.price > product.discountedPrice;
  const discount = hasDiscount
    ? getDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  const averageRating =
    product.reviews.length > 0
      ? (
          product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.length
        ).toFixed(1)
      : null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumb productTitle={product.title} />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative aspect-square w-full md:w-1/2">
          {hasDiscount && (
            <span className="absolute right-2 top-2 z-10 bg-accent px-3 py-1 text-xs text-white">
              -{discount}%
            </span>
          )}
          <Image
            src={product.image.url}
            alt={product.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-3xl font-bold uppercase">{product.title}</h1>
          <p className="text-text-secondary">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">
              {product.discountedPrice} kr
            </span>
            {hasDiscount && (
              <span className="text-lg text-text-secondary line-through">
                {product.price} kr
              </span>
            )}
          </div>

          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-3xl border border-border px-3 py-1 text-sm text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <AddToCartButton product={product} />

          {product.reviews.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Reviews</h2>
              {averageRating && (
                <p className="mt-1 text-sm">
                  {"★".repeat(Math.round(Number(averageRating)))}
                  {"☆".repeat(5 - Math.round(Number(averageRating)))}{" "}
                  {averageRating} ({product.reviews.length}{" "}
                  {product.reviews.length === 1 ? "review" : "reviews"})
                </p>
              )}

              <div className="mt-4 space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-t border-border pt-4">
                    <p className="font-bold">{review.username}</p>
                    <p className="text-sm text-text-secondary">
                      {review.description}
                    </p>
                    <p className="mt-1 text-sm">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}