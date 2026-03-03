"use client";

/**
 * Button that scrolls the user down to the product grid when clicked.
 */
export default function ScrollToProductsButton() {
  const handleScroll = () => {
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="mt-6 w-40 cursor-pointer rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80"
    >
      Shop Now
    </button>
  );
}