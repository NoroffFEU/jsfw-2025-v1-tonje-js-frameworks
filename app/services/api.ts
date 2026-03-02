import type { Product, ApiResponse, ApiSingleProductResponse } from "../interfaces/products";

/**
 * Fetches all products from the Noroff Online Shop API.
 * @returns A promise that resolves to an array of products.
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://v2.api.noroff.dev/online-shop");
  const json: ApiResponse = await response.json();
  return json.data;
}

/**
 * Fetches a single product from the Noroff Online Shop API by its ID.
 * @param id - The product ID to fetch.
 * @returns A promise that resolves to a single product.
 */
export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const json: ApiSingleProductResponse = await response.json();
  return json.data;
}