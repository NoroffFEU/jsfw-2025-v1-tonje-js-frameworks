import Link from "next/link";
import Image from "next/image";

/**
 * Sustainability page describing Alera's environmental and ethical commitments.
 */
export default function SustainabilityPage() {
  const commitments = [
    {
      title: "Responsible Sourcing",
      description:
        "We work only with suppliers who meet our ethical standards for labour, materials, and environmental impact.",
    },
    {
      title: "Minimal Packaging",
      description:
        "Our packaging is made from recycled materials and designed to be as minimal as possible without compromising product safety.",
    },
    {
      title: "Carbon Awareness",
      description:
        "We are actively working to map and reduce our carbon footprint across our supply chain and operations.",
    },
    {
      title: "Longevity Over Trends",
      description:
        "We curate products built to last, encouraging mindful consumption over fast fashion and throwaway culture.",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Sustainability
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          We believe that doing good and doing business are not mutually exclusive. Here is how we are working toward a more responsible future.
        </p>
      </section>

      <section className="mb-16">
        <div className="relative h-80 w-full overflow-hidden rounded-xl md:h-120">
          <Image
            src="/images/sustainability.webp"
            alt="Sustainable practices at Alera"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase">
          Our Commitments
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border p-6"
            >
              <h3 className="font-semibold uppercase">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-teal-950 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold uppercase">Want to Know More?</h2>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          We are always happy to talk about our practices and answer your questions.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:opacity-80"
        >
          Get in Touch
        </Link>
      </section>

    </main>
  );
}
