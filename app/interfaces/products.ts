export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface ProductImage {
    url: string;
    alt: string;
}

export interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
}

export interface ApiResponse {
    data: Product[];
}

export interface ApiSingleProductResponse {
    data: Product;
}