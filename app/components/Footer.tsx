/**
 * Footer component that displays copyright information and current year.
 * @returns The footer component.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-text-secondary">
      <p>&copy; {new Date().getFullYear()} Alera. All rights reserved.</p>
    </footer>
  );
}