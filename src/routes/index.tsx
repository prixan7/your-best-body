import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import gym1 from "@/assets/gym-1.png.asset.json";
import gym3 from "@/assets/gym-3.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Warriors Unisex Gym — Thirumazhisai, Chennai" },
      {
        name: "description",
        content:
          "Coached strength training on South Mada Street, Thirumazhisai. A/C floor, open 5 AM–10 PM daily, ladies timing 10 AM–3 PM.",
      },
      { property: "og:title", content: "Leo Warriors Unisex Gym — Thirumazhisai" },
      {
        property: "og:description",
        content: "Coached training, air-conditioned floor, open every day 5 AM to 10 PM.",
      },
    ],
  }),
  component: Home,
});

const facts = [
  { k: "Hours", v: "5:00 AM – 10:00 PM" },
  { k: "Ladies timing", v: "10:00 AM – 3:00 PM" },
  { k: "Rating", v: "4.7 / 5 · 100+ reviews" },
  { k: "Floor", v: "Air-conditioned, unisex" },
];

const services = [
  "Aerobics",
  "Cardio",
  "Body Building",
  "Kids Dance Classes",
  "Weight Gain",
  "Weight Loss",
  "Muscle Building",
];

const reviews = [
  {
    body: "Sakthi corrects your form while you are lifting, not after. Three months in and my squat finally feels right.",
    who: "Member, morning batch",
  },
  {
    body: "Clean floor, air conditioned, and never overcrowded even at 7 PM. The coaches actually know your name.",
    who: "Member, evening batch",
  },
  {
    body: "I joined for weight loss and stayed for the training. Friendly place, nobody makes you feel out of place.",
    who: "Member, ladies timing",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-concrete">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-plate/40 bg-concrete">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="label-stamp text-plate">Estd 2021 · South Mada Street, Thirumazhisai</p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-iron sm:text-5xl md:text-6xl">
              A gym on South Mada Street, run properly.
            </h1>
            <div className="rule-double mt-8 max-w-2xl pt-6">
              <p className="max-w-xl text-base leading-relaxed text-plate">
                Coached training on an air-conditioned floor. Open every day from 5:00 AM to 10:00
                PM, with a dedicated ladies timing between 10:00 AM and 3:00 PM.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/packages"
                className="label-stamp bg-iron px-6 py-3 text-chalk hover:bg-iron-2"
              >
                See Packages
              </Link>
              <Link
                to="/trainer"
                className="label-stamp border border-iron px-6 py-3 text-iron hover:bg-iron hover:text-chalk"
              >
                Meet Sakthi
              </Link>
            </div>
          </div>
        </section>

        {/* Facts strip */}
        <section className="bg-iron-2">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-plate/40 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="bg-iron-2 px-5 py-7">
                <dt className="label-stamp text-concrete-dark">{f.k}</dt>
                <dd className="mt-2 font-mono text-sm text-chalk">{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Floor photos */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl text-iron">The floor</h2>
          <p className="mt-3 max-w-xl text-plate">
            Free weights, plate-loaded machines, cardio row and a turf lane — all inside one
            air-conditioned hall.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <img
              src={gym1.url}
              alt="Treadmills and turf lane on the air-conditioned training floor"
              loading="lazy"
              className="h-72 w-full object-cover"
            />
            <img
              src={gym3.url}
              alt="Main gym floor with blue neon accent lighting"
              loading="lazy"
              className="h-72 w-full object-cover"
            />
            <img
              src="/images/gym-4.webp"
              alt="Free weight plate rack, leg press, and spin bikes"
              loading="lazy"
              className="h-72 w-full object-cover"
            />
          </div>
        </section>

        {/* Pointer blocks */}
        <section className="border-y border-plate/40 bg-concrete-dark/40">
          <div className="mx-auto grid max-w-6xl gap-px bg-plate/30 md:grid-cols-2">
            <Link
              to="/trainer"
              className="group bg-concrete px-8 py-14 transition-colors hover:bg-iron"
            >
              <p className="label-stamp text-plate group-hover:text-concrete-dark">01 — Coaching</p>
              <h3 className="mt-4 font-display text-2xl text-iron group-hover:text-chalk">
                Sakthi coaches on the floor, every session
              </h3>
              <p className="mt-3 max-w-sm text-sm text-plate group-hover:text-concrete">
                Hands-on correction, batch flexibility, and a second coach — Thiru — on strength and
                conditioning.
              </p>
              <span className="label-stamp mt-6 inline-block text-olive group-hover:text-olive-light">
                Meet Sakthi →
              </span>
            </Link>

            <Link
              to="/packages"
              className="group bg-concrete px-8 py-14 transition-colors hover:bg-iron"
            >
              <p className="label-stamp text-plate group-hover:text-concrete-dark">02 — Plans</p>
              <h3 className="mt-4 font-display text-2xl text-iron group-hover:text-chalk">
                Three tiers, priced by how much coaching you want
              </h3>
              <p className="mt-3 max-w-sm text-sm text-plate group-hover:text-concrete">
                Floor access, group coaching or one-to-one personal training. Trial session
                available.
              </p>
              <span className="label-stamp mt-6 inline-block text-olive group-hover:text-olive-light">
                See Packages →
              </span>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl text-iron">What we run</h2>
          <ul className="mt-8 grid gap-px bg-plate/30 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => (
              <li key={s} className="bg-concrete px-5 py-7">
                <span className="label-stamp text-plate">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-lg text-iron">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section className="bg-iron text-chalk">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="label-stamp text-concrete-dark">What members say · 4.7/5 on Google</p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {reviews.map((r) => (
                <blockquote key={r.who}>
                  <p className="font-display text-lg leading-snug">“{r.body}”</p>
                  <footer className="label-stamp mt-4 text-concrete-dark">{r.who}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
