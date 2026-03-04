import Image from "next/image";

/**
 * About page displaying the brand story, values, and team image.
 */
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          About Alera
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          We believe that the things you surround yourself with should be thoughtfully chosen — beautiful, functional, and built to last.
        </p>
      </section>

      <section className="mb-16">
        <div className="relative h-80 w-full overflow-hidden rounded-xl md:h-120">
          <Image
            src="/images/team.webp"
            alt="The Alera team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mb-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold uppercase">Our Story</h2>
          <p className="mt-4 text-text-secondary">
            Alera was founded with a simple idea: that everyday products should bring you joy. We started as a small team with a shared love for design and quality, curating products that fit seamlessly into modern life.
          </p>
          <p className="mt-4 text-text-secondary">
            Today, we offer a carefully selected range of tech, beauty, and fashion essentials — all held to the same standard of quality and style we set from day one.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase">Our Values</h2>
          <ul className="mt-4 space-y-3 text-text-secondary">
            <li>
              <span className="font-semibold text-text">Quality first</span> — Every product is handpicked and held to a high standard.
            </li>
            <li>
              <span className="font-semibold text-text">Transparency</span> — We are honest about what we sell and where it comes from.
            </li>
            <li>
              <span className="font-semibold text-text">Sustainability</span> — We are committed to reducing our environmental footprint.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
