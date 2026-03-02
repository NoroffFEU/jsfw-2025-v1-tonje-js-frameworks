
import { Product, ApiResponse } from "./interfaces/products";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

/**
 * Fetches products from the Noroff Online Shop API.
 * @returns A promise that resolves to an array of products.
 */
async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://v2.api.noroff.dev/online-shop");
  const json: ApiResponse = await response.json();
  return json.data;
}

/**
 * The home page component that displays a hero section and a grid of product cards.
 * Fetches products server-side and passes them to SearchBar and ProductCard.
 */
export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <section 
        className="bg-card px-6 py-20 text-center md:py-32">

        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">Elevate Every Day</h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">Enjoy variety, quality, and convenience in one modern shopping destination.</p>
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
