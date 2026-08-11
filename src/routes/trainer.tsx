import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import gym2 from "@/assets/gym-2.png.asset.json";

export const Route = createFileRoute("/trainer")({
  head: () => ({
    meta: [
      { title: "Coaches — Sakthi & Thiru | Leo Warriors Gym" },
      {
        name: "description",
        content:
          "Sakthi, founder and head coach at Leo Warriors Thirumazhisai, plus Thiru on strength and conditioning. Hands-on coaching on every session.",
      },
      { property: "og:title", content: "Coaches at Leo Warriors Gym" },
      {
        property: "og:description",
        content: "Hands-on coaching from Sakthi and Thiru at Leo Warriors, Thirumazhisai.",
      },
    ],
  }),
  component: Trainer,
});

function Nameplate({ name, role }: { name: string; role: string }) {
  return (
    <div className="inline-block border border-plate bg-iron px-6 py-4">
      <span className="block font-display text-3xl tracking-tight text-chalk">{name}</span>
      <span className="label-stamp mt-1 block text-olive-light">{role}</span>
    </div>
  );
}

function Trainer() {
  return (
    <div className="min-h-screen bg-concrete">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-20">
        <p className="label-stamp text-plate">The coaches</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-iron md:text-5xl">
          Two coaches on the floor. Nobody trains alone here.
        </h1>

        <div className="rule-double mt-14 grid gap-12 pt-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Nameplate name="Sakthi" role="Founder · Head coach" />
            <div className="mt-8 space-y-4 text-plate">
              <p>
                Sakthi opened Leo Warriors in 2021 and still runs the floor himself. He coaches body
                building, muscle building, and weight gain or weight loss programmes, and he sets
                the batch plan around your working hours rather than the other way round.
              </p>
              <p>
                His coaching is hands-on: he corrects form during the set, not after it, and he
                keeps loads honest so beginners progress without picking up injuries. Members
                describe him as cooperative, friendly, and straightforward about what will and won't
                work.
              </p>
              <p>
                If you're new to a gym, start with him. He'll walk you through the machines, set a
                first-month plan, and check in on it.
              </p>
            </div>
            <Link
              to="/contact"
              className="label-stamp mt-8 inline-block bg-iron px-6 py-3 text-chalk hover:bg-iron-2"
            >
              Book a Trial
            </Link>
          </div>

          <div>
            <img
              src={gym2.url}
              alt="Head Coach Sakthi at Leo Warriors Gym"
              loading="lazy"
              className="h-96 w-full object-cover object-top"
            />
            <blockquote className="mt-4 bg-iron px-7 py-8 text-chalk">
              <p className="font-display text-xl leading-snug">
                “He watches every rep. I came in not knowing how to hold a bar and I'm now training
                five days a week.”
              </p>
              <footer className="label-stamp mt-4 text-concrete-dark">
                Paraphrased from Google reviews
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="rule-double mt-16 grid gap-10 pt-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="inline-block border border-plate bg-iron px-5 py-3">
              <span className="block font-display text-2xl text-chalk">Thiru</span>
              <span className="label-stamp mt-1 block text-olive-light">
                Strength &amp; conditioning
              </span>
            </div>
          </div>
          <div className="space-y-4 text-plate">
            <p>
              Thiru handles the conditioning side — cardio programming, circuit work on the turf
              lane, and the aerobics batches. He also takes over the floor during the ladies timing
              between 10:00 AM and 3:00 PM.
            </p>
            <p>
              Between the two of them the gym stays coached from open to close, every day of the
              week.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
