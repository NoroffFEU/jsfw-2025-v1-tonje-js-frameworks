import Link from "next/link";

/**
 * Footer component with company info, support links, legal links, and business links.
 * Includes copyright information and current year.
 * @returns The footer component.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold uppercase">Company</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/about" className="hover:text-text hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-text hover:underline">Contact</Link></li>
              <li><Link href="/sustainability" className="hover:text-text hover:underline">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold uppercase">Support</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/faq" className="hover:text-text hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-text hover:underline">Shipping Information</Link></li>
              <li><Link href="/returns" className="hover:text-text hover:underline">Returns & Refunds</Link></li>
              <li><Link href="/order-tracking" className="hover:text-text hover:underline">Order Tracking</Link></li>
              <li><Link href="/help" className="hover:text-text hover:underline">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold uppercase">Legal</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/terms" className="hover:text-text hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-text hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-text hover:underline">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-text hover:underline">Accessibility Statement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold uppercase">Business</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/press" className="hover:text-text hover:underline">Press</Link></li>
              <li><Link href="/affiliates" className="hover:text-text hover:underline">Affiliate Program</Link></li>
              <li><Link href="/b2b" className="hover:text-text hover:underline">B2B</Link></li>
              <li><Link href="/careers" className="hover:text-text hover:underline">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-3 pb-2 text-center text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Alera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}