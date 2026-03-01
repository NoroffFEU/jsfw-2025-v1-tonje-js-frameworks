import Link from "next/link";

/**
 * Custom 404 page shown when a page is not found.
 * @returns The not found page component.
 */
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-text-secondary">
        The page you are looking for does not exist. Please check the URL or return to the shop.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white hover:opacity-90"
      >
        Back to Shop
      </Link>
    </main>
  );
}