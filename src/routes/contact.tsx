import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Trial Booking | Leo Warriors Gym, Thirumazhisai" },
      {
        name: "description",
        content:
          "Leo Warriors Gym, 100 South Mada Street, Thirumazhisai, Chennai 600124. Call +91 90923 45230 or book a free trial session.",
      },
      { property: "og:title", content: "Contact Leo Warriors Gym, Thirumazhisai" },
      {
        property: "og:description",
        content: "Address, phone, hours and trial booking for Leo Warriors Unisex Gym.",
      },
    ],
  }),
  component: Contact,
});

const services = [
  "Aerobics",
  "Cardio",
  "Body Building",
  "Kids Dance Classes",
  "Weight Gain",
  "Weight Loss",
  "Muscle Building",
];

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "mt-2 w-full border border-plate/60 bg-concrete px-4 py-3 text-sm text-iron placeholder:text-plate/70 focus:border-olive focus:outline-none";

  return (
    <div className="min-h-screen bg-concrete">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-20">
        <p className="label-stamp text-plate">Visit / Call</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-iron md:text-5xl">
          Near Thirumazhisai Post Office. Walk in any day.
        </h1>

        <div className="rule-double mt-14 grid gap-14 pt-12 md:grid-cols-2">
          <div>
            <dl className="space-y-7">
              <div>
                <dt className="label-stamp text-plate">Address</dt>
                <dd className="mt-2 text-iron">
                  100, South Mada Street, Thirumazhisai, Chennai – 600124
                  <span className="mt-1 block text-sm text-plate">
                    Landmark: Near Thirumazhisai Post Office
                  </span>
                </dd>
              </div>
              <div>
                <dt className="label-stamp text-plate">Phone</dt>
                <dd className="mt-2 flex flex-col gap-1 font-mono text-iron">
                  <a href="tel:+919092345230" className="link-underline">
                    +91 90923 45230
                  </a>
                  <a href="tel:+918056051073" className="link-underline">
                    +91 80560 51073
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-stamp text-plate">Email &amp; Instagram</dt>
                <dd className="mt-2 flex flex-col gap-1 text-iron">
                  <a href="mailto:leosakthi04@gmail.com" className="link-underline">
                    leosakthi04@gmail.com
                  </a>
                  <a
                    href="https://www.instagram.com/leo__sakthi"
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    @leo__sakthi
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-stamp text-plate">Hours</dt>
                <dd className="mt-2 font-mono text-sm text-iron">
                  Every day · 5:00 AM – 10:00 PM
                  <span className="mt-1 block text-olive">Ladies timing · 10:00 AM – 3:00 PM</span>
                </dd>
              </div>
              <div>
                <dt className="label-stamp text-plate">Services</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="border border-plate/60 px-3 py-1 font-mono text-xs text-iron"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="bg-iron px-7 py-8 text-chalk">
              <h2 className="font-display text-2xl">Book a trial</h2>
              <p className="mt-2 text-sm text-concrete">
                Leave your number and a preferred timing. Sakthi will call back to confirm.
              </p>

              {sent ? (
                <p className="mt-8 border border-olive-light bg-olive/25 px-4 py-6 font-mono text-sm">
                  Thanks — your request is noted. For an immediate slot, call +91 90923 45230.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="label-stamp text-concrete-dark">
                      Name
                    </label>
                    <input id="name" name="name" required className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-stamp text-concrete-dark">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={field}
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div>
                    <label htmlFor="timing" className="label-stamp text-concrete-dark">
                      Preferred timing
                    </label>
                    <input
                      id="timing"
                      name="timing"
                      className={field}
                      placeholder="e.g. weekday mornings"
                    />
                  </div>
                  <div>
                    <label htmlFor="goal" className="label-stamp text-concrete-dark">
                      What are you training for?
                    </label>
                    <textarea id="goal" name="goal" rows={3} className={field} />
                  </div>
                  <button
                    type="submit"
                    className="label-stamp w-full bg-olive px-6 py-3 text-chalk hover:bg-olive-light"
                  >
                    Book a Trial
                  </button>
                </form>
              )}
            </div>

            <iframe
              title="Leo Warriors Gym location map"
              className="mt-4 h-72 w-full border border-plate/50"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=100%20South%20Mada%20Street%2C%20Thirumazhisai%2C%20Chennai%20600124&output=embed"
            />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
