import React, { useEffect, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

export default function Index() {
  const slides = [
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F5fb9c64814aa442287ce75382bcf775a?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F1a24c3a47e8f4160a1222442016b72a6?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2Fef69b82564af4ab2a558fd631900be3a?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F4d55615f3db8411ca399892fd3a22593?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F5742aeac18544ed89c4e88297e8de435?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F44ee2ecb9eed409cba894a6b5bec0436?format=webp&width=1600",
  ];
  const [active, setActive] = useState(0);
  const gap = 5000; // ms

  useEffect(() => {
    const t = setInterval(() => {
      setActive((s) => (s + 1) % slides.length);
    }, gap);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`hero-${i}`}
              aria-hidden={i !== active}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative container min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-4xl md:text-6xl leading-tight">
              <span className="opacity-95">Weaving traditions and</span>
              <br />
              <span className="italic">art</span> into every story.
            </h1>
            <p className="mt-4 text-lg text-white/85 max-w-2xl">
              Connecting with real artisans and their creations.
            </p>

            <div className="mt-8 flex w-full max-w-xl items-center rounded-full bg-white p-2 shadow-card">
              <Search className="mx-3 h-5 w-5 text-foreground/50" />
              <input
                placeholder="what would you like to buy"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/50 text-foreground"
              />
              <button className="ml-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F033970a824884363a4fadfb1bd9df0a0?format=webp&width=1600" alt="About background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container relative py-20">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl">About Us</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              At <span className="font-semibold">kalasetu</span>, we believe every handcrafted piece tells a story—woven from
              tradition, skill, culture, and the dreams of the artisans behind it. Our platform is more than
              just a marketplace; it is a bridge connecting you directly with the creators of timeless crafts,
              preserving rich heritage while empowering communities to thrive in the modern world.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-soft hover:bg-white/20">
              Browse your Interests <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#905245] text-white overflow-hidden">
        <div className="container grid gap-10 md:grid-cols-2 items-start pt-12 md:pt-28 pb-12">
          <div className="pr-6 md:pr-12">
            <h3 className="font-heading italic text-4xl md:text-6xl lg:text-7xl leading-tight">Our Mission</h3>

            <ul className="mt-8 space-y-6 text-lg md:text-xl max-w-xl">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-white" />
                <span className="leading-relaxed">Connecting artisans directly to customers for fair earnings and craft preservation.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-white" />
                <span className="leading-relaxed">Preserving ancient art and culture by safeguarding heritage crafts for future generations.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-white" />
                <span className="leading-relaxed">Artisans are supported through training, local hubs, and eco‑friendly practises.</span>
              </li>
            </ul>
          </div>

          <div className="relative flex items-start justify-end">
            <div className="relative">
              {/* decorative quote */}
              <div className="absolute -left-6 -top-8 text-6xl md:text-8xl text-black/90">“</div>

              <div className="rounded-3xl shadow-card bg-transparent overflow-visible md:translate-y-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2Fc66a9724804c4c54b7d66bc16e95258a?format=webp&width=1200"
                  alt="Mission visual"
                  className="w-[320px] md:w-[420px] lg:w-[520px] h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F3b01ab82417f422a85e076cc18a7f669%2F93b61477bc114f0aacd9613d1cd85eae?format=webp&width=1600" alt="Voices background" className="absolute inset-0 m-auto max-h-full max-w-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        </div>
        <div className="container relative flex items-center justify-center min-h-[520px] md:min-h-[720px] py-20">
          {/* Only background and CTA button remain */}
          <div className="z-10">
            <a href="/stories" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft">Explore Stories</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pt-20 md:pt-28">
        <div className="rounded-3xl bg-accent/20 p-6 md:p-10 shadow-soft">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="font-heading text-2xl md:text-3xl">Let’s Weave Stories Together</h4>
              <p className="mt-2 text-foreground/75">
                Join our community to explore artisan tales, share your passion for handmade art, and stay inspired by timeless creativity.
              </p>
            </div>
            <form className="mt-6 md:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:max-w-2xl">
              <input placeholder="Enter Your Name" className="col-span-1 rounded-full border border-border bg-white px-4 py-3 text-sm outline-none" />
              <input placeholder="Enter Your Email Address" className="col-span-1 sm:col-span-2 rounded-full border border-border bg-white px-4 py-3 text-sm outline-none" />
              <button className="sm:col-span-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Join Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
