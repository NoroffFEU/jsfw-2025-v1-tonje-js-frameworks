import ContactForm from "../components/ContactForm";

/**
 * Contact page with a validated contact form.
 * @returns The contact page component
 */

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold uppercase">
        Contact Us
      </h1>
      <ContactForm />
    </main>
  );
}