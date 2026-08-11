import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Membership Packages | Leo Warriors Gym, Thirumazhisai" },
      {
        name: "description",
        content:
          "Three membership tiers at Leo Warriors: floor access, coached training, and one-to-one personal training. Trial session available.",
      },
      { property: "og:title", content: "Membership Packages — Leo Warriors Gym" },
      {
        property: "og:description",
        content: "Floor access, coached training, or personal training at Leo Warriors gym.",
      },
    ],
  }),
  component: Packages,
});

const tiers = [
  {
    weight: "5",
    name: "Floor Access",
    size: 168,
    price: "— confirm with client —",
    includes: [
      "Full access to the A/C training floor",
      "All cardio and plate-loaded machines",
      "Any timing, 5:00 AM – 10:00 PM",
      "One trial session before you join",
    ],
  },
  {
    weight: "10",
    name: "Coached Training",
    size: 216,
    price: "— confirm with client —",
    includes: [
      "Everything in Floor Access",
      "Group coaching in your batch",
      "Programme set by Sakthi, reviewed monthly",
      "Aerobics and circuit batches included",
    ],
  },
  {
    weight: "20",
    name: "Personal Training",
    size: 268,
    price: "— confirm with client —",
    includes: [
      "Everything in Coached Training",
      "One-to-one sessions with Sakthi",
      "Individual programme for gain, loss or build",
      "Flexible batch switching",
    ],
  },
];

const faqs = [
  {
    q: "Can I try before joining?",
    a: "Yes. One trial session is free — call ahead so a coach is free to take you through the floor.",
  },
  {
    q: "What are the timings?",
    a: "Open every day, 5:00 AM to 10:00 PM. Ladies timing runs 10:00 AM to 3:00 PM.",
  },
  {
    q: "Can personal training be added to a monthly plan?",
    a: "Yes. Personal training can be added on top of any monthly membership — ask Sakthi for the current add-on rate.",
  },
];

function Plate({ size, weight }: { size: number; weight: string }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center border-[10px] border-iron bg-iron-2"
      data-round
      style={{ width: size, height: size, borderRadius: "9999px" }}
      aria-hidden
    >
      <div
        className="absolute border-4 border-olive"
        data-round
        style={{ inset: 14, borderRadius: "9999px" }}
      />
      <div
        className="absolute border border-plate bg-concrete-dark"
        data-round
        style={{ inset: size * 0.34, borderRadius: "9999px" }}
      />
      <span className="relative font-mono text-2xl font-bold text-iron">{weight}</span>
      <span className="label-stamp absolute bottom-5 text-concrete-dark">kg</span>
    </div>
  );
}

function Packages() {
  return (
    <div className="min-h-screen bg-concrete">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-20">
        <p className="label-stamp text-plate">Memberships</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-iron md:text-5xl">
          Three tiers. Pick by how much coaching you want.
        </h1>

        <p className="mt-6 border border-olive bg-olive/10 px-4 py-3 font-mono text-xs text-iron">
          NOTE: prices below are placeholders and must be confirmed with the gym before publishing.
        </p>

        <div className="mt-16 space-y-14">
          {tiers.map((t) => (
            <article
              key={t.name}
              className="rule-double flex flex-col items-start gap-10 pt-12 md:flex-row md:items-center md:gap-16"
            >
              <div className="scale-75 origin-left md:scale-100">
                <Plate size={t.size} weight={t.weight} />
              </div>

              <div className="flex-1">
                <h2 className="font-display text-3xl text-iron">{t.name}</h2>
                <p className="mt-2 font-mono text-sm text-olive">{t.price}</p>
                <ul className="mt-6 space-y-2 text-plate">
                  {t.includes.map((i) => (
                    <li key={i} className="border-l-2 border-plate/50 pl-4 text-sm">
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="label-stamp mt-7 inline-block border border-iron px-6 py-3 text-iron hover:bg-iron hover:text-chalk"
                >
                  Book a Trial
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24">
          <h2 className="font-display text-3xl text-iron">Questions</h2>
          <dl className="mt-8 divide-y divide-plate/40 border-y border-plate/40">
            {faqs.map((f) => (
              <div key={f.q} className="py-6 md:grid md:grid-cols-[1fr_1.4fr] md:gap-10">
                <dt className="font-display text-lg text-iron">{f.q}</dt>
                <dd className="mt-2 text-sm text-plate md:mt-0">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
