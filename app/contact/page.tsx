import Image from "next/image";
import ContactForm from "../components/ContactForm";

/**
 * Contact page with a validated contact form.
 * @returns The contact page component
 */
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          Have questions or need assistance? Our team is here to help.
        </p>
      </section>

      <section className="flex flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="relative h-72 w-full overflow-hidden rounded-xl md:h-120">
            <Image
              src="/images/contact.webp"
              alt="Alera customer support"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}