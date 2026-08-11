import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-iron text-concrete">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={logo.url} alt="Leo Warriors Unisex Gym" className="h-16 w-16 object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            100, South Mada Street, Thirumazhisai, Chennai – 600124. Near Thirumazhisai Post Office.
          </p>
          <p className="mt-3 font-mono text-sm text-chalk">Open every day · 5:00 AM – 10:00 PM</p>
          <p className="font-mono text-sm text-olive-light">Ladies timing · 10:00 AM – 3:00 PM</p>
        </div>

        <div>
          <h3 className="label-stamp text-concrete-dark">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="link-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/trainer" className="link-underline">
                Trainer
              </Link>
            </li>
            <li>
              <Link to="/packages" className="link-underline">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="label-stamp text-concrete-dark">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+919092345230" className="link-underline font-mono">
                +91 90923 45230
              </a>
            </li>
            <li>
              <a href="tel:+918056051073" className="link-underline font-mono">
                +91 80560 51073
              </a>
            </li>
            <li>
              <a href="mailto:leosakthi04@gmail.com" className="link-underline">
                leosakthi04@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/leo__sakthi"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-plate/50">
        <p className="label-stamp mx-auto max-w-6xl px-5 py-5 text-concrete-dark">
          © {new Date().getFullYear()} Leo Warriors Unisex Gym · Estd 2021
        </p>
      </div>
    </footer>
  );
}
