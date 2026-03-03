import Link from "next/link";

interface BreadcrumbProps {
  productTitle: string;
}

/**
 * Breadcrumb navigation showing the path: Shop > Product name.
 * @param productTitle - The name of the current product.
 */
export default function Breadcrumb({ productTitle }: BreadcrumbProps) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
      <Link href="/" className="hover:text-text hover:underline">
        Shop
      </Link>
      <span>/</span>
      <span className="text-text">{productTitle}</span>
    </nav>
  );
}