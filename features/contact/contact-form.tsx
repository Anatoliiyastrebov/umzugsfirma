"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeInView } from "@/components/animations/fade-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      routeFrom: "",
      routeTo: "",
      moveDate: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="kontakt"
      className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontakt"
          title="Kostenloses Angebot anfordern"
          description="Füllen Sie das Formular aus — wir melden uns innerhalb von 2 Stunden mit Ihrem persönlichen Festpreisangebot."
        />

        <FadeInView className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="flex flex-col items-center py-10 text-center"
                  role="status"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="size-8" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="mt-3 max-w-md text-slate-600">
                    Wir haben Ihre Daten erhalten und melden uns in Kürze bei
                    Ihnen — in der Regel innerhalb von 2 Stunden.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Weitere Anfrage senden
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <Input
                    label="Vollständiger Name"
                    placeholder="Max Mustermann"
                    autoComplete="name"
                    error={errors.name?.message}
                    {...register("name")}
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Telefon"
                      type="tel"
                      placeholder="+49 170 1234567"
                      autoComplete="tel"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                    <Input
                      label="E-Mail"
                      type="email"
                      placeholder="max@beispiel.de"
                      autoComplete="email"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Von (Auszugsort)"
                      placeholder="z. B. Berlin, Mitte"
                      error={errors.routeFrom?.message}
                      {...register("routeFrom")}
                    />
                    <Input
                      label="Nach (Einzugsort)"
                      placeholder="z. B. München, Schwabing"
                      error={errors.routeTo?.message}
                      {...register("routeTo")}
                    />
                  </div>

                  <Input
                    label="Gewünschtes Umzugsdatum"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    error={errors.moveDate?.message}
                    {...register("moveDate")}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    {!isSubmitting ? (
                      <>
                        Angebot anfordern
                        <Send className="size-4" aria-hidden />
                      </>
                    ) : null}
                  </Button>

                  <p className="text-center text-xs text-slate-500">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                    gemäß unserer Datenschutzerklärung zu. Demo-Formular ohne
                    Backend.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
