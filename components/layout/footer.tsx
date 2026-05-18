import { Mail, MapPin, Phone, Truck } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-white"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Truck className="size-5" aria-hidden />
              </span>
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {SITE.tagline}. Professionelle Umzüge in ganz Deutschland —
              schnell, sicher und zum Festpreis.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                  aria-hidden
                />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                >
                  <Phone
                    className="size-4 shrink-0 text-brand-400"
                    aria-hidden
                  />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                >
                  <Mail
                    className="size-4 shrink-0 text-brand-400"
                    aria-hidden
                  />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">
              Impressum
            </a>
            <a href="#" className="hover:text-slate-300">
              Datenschutz
            </a>
            <a href="#" className="hover:text-slate-300">
              AGB
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-600">
          Dieses Projekt dient nur als Portfolio-Demonstration und stellt kein
          reales Unternehmen dar.
        </p>
      </div>
    </footer>
  );
}
