"use client";

import { FadeInView } from "@/components/animations/fade-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} von 5 Sternen`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="bewertungen"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Das sagen unsere Kunden"
          description="Echte Erfahrungen von Umzügen in ganz Deutschland — Qualität, die überzeugt."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeInView
              key={testimonial.name}
              delay={index * 0.08}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Quote
                  className="size-8 text-brand-200"
                  aria-hidden
                />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  {`„${testimonial.text}"`}
                </p>
                <footer className="mt-6 border-t border-slate-200 pt-4">
                  <StarRating rating={testimonial.rating} />
                  <cite className="mt-3 block not-italic">
                    <span className="font-semibold text-slate-900">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {" "}
                      — {testimonial.location}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
