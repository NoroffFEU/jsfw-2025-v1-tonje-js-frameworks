import { fetchProducts } from "./services/api";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import ScrollToProductsButton from "./components/ScrollToProductsButton";
import Image from "next/image";

/**
 * The home page component that displays a hero section and a grid of product cards.
 * Fetches products server-side and passes them to SearchBar and ProductCard.
 */
export default async function Home() {
  const products = await fetchProducts();

  const categories = [
    {
      name: "Tech",
      description: "Headphones, speakers, accessories and more.",
      image: "/images/category-tech.webp",
    },
    {
      name: "Beauty",
      description: "Perfume, serums, and everyday essentials.",
      image: "/images/category-beauty.webp",
    },
    {
      name: "Fashion",
      description: "Bags, watches, sunglasses, and more.",
      image: "/images/category-fashion.webp",
    },
  ];

  return (
    <main>
      <section className="mx-auto max-w-6xl grid min-h-120 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-10 py-16 md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
            New Season Arrivals
          </p>
          <h1 className="font-header text-5xl font-bold italic leading-tight md:text-6xl">
            Elevate<br />Every Day
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-text-secondary">
            Enjoy variety, quality, and convenience in one modern shopping destination.
          </p>
          <ScrollToProductsButton />
        </div>


        <div className="relative min-h-80 bg-[#2a2a2a]">
          <Image
            src="/images/hero.webp"
            alt="Lifestyle products"
            fill
            priority
            sizes="50vh"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <h2 className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-text-secondary">
            Shop by Category
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-xl"
              >
                <div className="relative h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <h3 className="font-bold uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <p className="mt-2 max-w-xs px-4 text-sm text-white/80">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <h2 className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-text-secondary">
            Explore our products
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="mb-2 text-center text-3xl font-bold uppercase">
          Curated Essentials
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-text-secondary">
          Discover curated essentials designed to elevate your everyday lifestyle.
        </p>

        <SearchBar products={products} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}