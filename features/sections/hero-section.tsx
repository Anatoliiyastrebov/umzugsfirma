"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_POINTS = [
  "Festpreis ohne Überraschungen",
  "Über 2.500 zufriedene Kunden",
  "Deutschlandweit verfügbar",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50" />
        <motion.div
          className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b812_1px,transparent_1px),linear-gradient(to_bottom,#94a3b812_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          aria-hidden
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
            4,9/5 — über 380 Bewertungen
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Stressfrei umziehen in ganz Deutschland
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Schnell, zuverlässig und mit Festpreis-Garantie — Ihr Premium-Umzug
            von der Planung bis zum letzten Karton. Transparent, versichert und
            termingerecht.
          </p>

          <ul className="mt-8 space-y-3">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
              >
                <CheckCircle2
                  className="size-5 shrink-0 text-brand-600"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("vorteile")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Mehr erfahren
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/60 backdrop-blur-sm">
            <Image
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=85"
              alt="Professionelles Umzugsteam lädt Möbel in einen LKW"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Nächster freier Termin
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                In 48 Stunden verfügbar
              </p>
            </div>
          </div>

          <motion.div
            className="absolute -right-4 -top-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-2xl font-bold text-brand-600">98%</p>
            <p className="text-xs text-slate-500">Pünktlichkeitsrate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
