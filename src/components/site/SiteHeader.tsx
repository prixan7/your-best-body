import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/trainer", label: "Trainer" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-iron text-chalk">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Leo Warriors Unisex Gym" className="h-11 w-11 object-contain" />
          <span className="leading-none">
            <span className="block font-display text-lg tracking-tight">LEO WARRIORS</span>
            <span className="label-stamp block text-concrete-dark">Unisex Gym · Thirumazhisai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-stamp text-concrete transition-colors hover:text-chalk [&.active]:text-olive-light"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+919092345230"
            className="label-stamp border border-olive-light bg-olive px-4 py-2 text-chalk hover:bg-olive-light"
          >
            Call +91 90923 45230
          </a>
        </nav>

        <button
          type="button"
          className="label-stamp border border-plate px-3 py-2 text-chalk md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-plate/60 px-5 pb-5 md:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-plate/40">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="label-stamp block py-3 text-concrete"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919092345230"
            className="label-stamp mt-4 block bg-olive px-4 py-3 text-center text-chalk"
          >
            Call +91 90923 45230
          </a>
        </nav>
      )}
    </header>
  );
}
