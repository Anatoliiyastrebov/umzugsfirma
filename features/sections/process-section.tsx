"use client";

import { FadeInView } from "@/components/animations/fade-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ablauf"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ablauf"
          title="In vier Schritten zum Ziel"
          description="Ein klarer, transparenter Prozess — von der ersten Anfrage bis zum erfolgreichen Abschluss Ihres Umzugs."
        />

        <div ref={ref} className="relative mt-16">
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-slate-200 md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden
          >
            <motion.div
              className="w-full origin-top bg-brand-600"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%" }}
            />
          </div>

          <ol className="space-y-10 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeInView key={step.step} delay={index * 0.12}>
                  <li className="relative md:grid md:grid-cols-2 md:gap-8 md:py-8">
                    <div
                      className={`md:col-span-1 ${
                        isEven
                          ? "md:pr-12 md:text-right"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white shadow-lg shadow-brand-600/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                        {step.step}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900 md:mt-0">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                    <div
                      className={`hidden md:col-span-1 md:block ${
                        isEven ? "md:col-start-2" : ""
                      }`}
                      aria-hidden
                    />
                  </li>
                </FadeInView>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
