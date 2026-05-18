"use client";

import { FadeInView } from "@/components/animations/fade-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { BENEFITS } from "@/lib/constants";
import { motion } from "framer-motion";

export function BenefitsSection() {
  return (
    <section
      id="vorteile"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ihre Vorteile"
          title="Warum Kunden uns vertrauen"
          description="Premium-Service mit Fokus auf Geschwindigkeit, Sicherheit und faire Festpreise — ohne versteckte Kosten."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FadeInView key={benefit.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-shadow hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25 transition-transform group-hover:scale-105">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </motion.article>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
