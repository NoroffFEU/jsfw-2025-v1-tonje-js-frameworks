
import { fetchProducts } from "./services/api";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Image from "next/image"; 

/**
 * The home page component that displays a hero section and a grid of product cards.
 * Fetches products server-side and passes them to SearchBar and ProductCard.
 */
export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <section className="relative px-6 py-20 text-center md:py-32">
        <Image
          src="/images/hero.webp"
          alt="Lifestyle products"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Elevate Every Day
          </h1>
          <p className="mx-auto mt-4 max-w-md text-text text: font-semibold">
            Enjoy variety, quality, and convenience in one modern shopping destination.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold uppercase">
          Explore
        </h2>

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
