import type { ProductImage } from "./products";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    discountedPrice: number;
    image: ProductImage;
    quantity: number;
}

