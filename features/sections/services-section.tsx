"use client";

import { FadeInView } from "@/components/animations/fade-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Alles aus einer Hand"
          description="Vom Privatumzug bis zur kompletten Büroverlagerung — modular buchbar und perfekt abgestimmt."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInView key={service.title} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/8"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-xl bg-white/95 text-brand-600 shadow-lg">
                      <Icon className="size-5" aria-hidden />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
