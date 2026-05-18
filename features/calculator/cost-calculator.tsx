"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpFromLine, Calculator, Home, MapPin, Ruler } from "lucide-react";
import { FadeInView } from "@/components/animations/fade-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CALCULATOR_DEFAULTS,
  calculateMovePrice,
  type CalculatorInput,
} from "@/lib/calculator";
import { formatEuro } from "@/lib/utils";

export function CostCalculator() {
  const [input, setInput] = useState<CalculatorInput>(CALCULATOR_DEFAULTS);

  const price = useMemo(() => calculateMovePrice(input), [input]);

  const update = <K extends keyof CalculatorInput>(
    key: K,
    value: CalculatorInput[K],
  ) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section
      id="rechner"
      className="py-20 sm:py-28"
      aria-labelledby="calculator-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preisrechner"
          title="Ihren Umzugspreis sofort schätzen"
          description="Geben Sie die wichtigsten Details ein und erhalten Sie eine realistische Preisindikation — unverbindlich und transparent."
        />

        <FadeInView className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <div className="grid lg:grid-cols-5">
              <div className="space-y-8 border-b border-slate-200 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Calculator className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Umzugsdetails
                    </h3>
                    <p className="text-sm text-slate-500">
                      Alle Felder anpassen für eine aktuelle Schätzung
                    </p>
                  </div>
                </div>

                <CalculatorField
                  icon={MapPin}
                  label="Entfernung (km)"
                  htmlFor="distance"
                >
                  <input
                    id="distance"
                    type="range"
                    min={5}
                    max={800}
                    step={5}
                    value={input.distanceKm}
                    onChange={(e) =>
                      update("distanceKm", Number(e.target.value))
                    }
                    className="w-full accent-brand-600"
                    aria-valuemin={5}
                    aria-valuemax={800}
                    aria-valuenow={input.distanceKm}
                  />
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-slate-500">5 km</span>
                    <span className="font-semibold text-brand-700">
                      {input.distanceKm} km
                    </span>
                    <span className="text-slate-500">800 km</span>
                  </div>
                </CalculatorField>

                <CalculatorField
                  icon={Home}
                  label="Anzahl Zimmer"
                  htmlFor="rooms"
                >
                  <input
                    id="rooms"
                    type="range"
                    min={1}
                    max={8}
                    step={1}
                    value={input.rooms}
                    onChange={(e) => update("rooms", Number(e.target.value))}
                    className="w-full accent-brand-600"
                    aria-valuemin={1}
                    aria-valuemax={8}
                    aria-valuenow={input.rooms}
                  />
                  <p className="mt-2 text-center text-sm font-semibold text-brand-700">
                    {input.rooms} {input.rooms === 1 ? "Zimmer" : "Zimmer"}
                  </p>
                </CalculatorField>

                <CalculatorField
                  icon={Ruler}
                  label="Etage"
                  htmlFor="floor"
                >
                  <input
                    id="floor"
                    type="range"
                    min={0}
                    max={10}
                    step={1}
                    value={input.floor}
                    onChange={(e) => update("floor", Number(e.target.value))}
                    className="w-full accent-brand-600"
                    aria-valuemin={0}
                    aria-valuemax={10}
                    aria-valuenow={input.floor}
                  />
                  <p className="mt-2 text-center text-sm font-semibold text-brand-700">
                    {input.floor}. Etage
                    {input.floor === 0 ? " (Erdgeschoss)" : ""}
                  </p>
                </CalculatorField>

                <fieldset>
                  <legend className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <ArrowUpFromLine className="size-4 text-brand-600" aria-hidden />
                    Aufzug vorhanden?
                  </legend>
                  <div className="flex gap-3">
                    <ToggleOption
                      label="Ja"
                      selected={input.hasElevator}
                      onClick={() => update("hasElevator", true)}
                    />
                    <ToggleOption
                      label="Nein"
                      selected={!input.hasElevator}
                      onClick={() => update("hasElevator", false)}
                    />
                  </div>
                </fieldset>
              </div>

              <div className="flex flex-col justify-center bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white sm:p-8 lg:col-span-2">
                <p className="text-sm font-medium text-brand-100">
                  Geschätzter Festpreis
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={price}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
                    aria-live="polite"
                  >
                    {formatEuro(price)}
                  </motion.p>
                </AnimatePresence>
                <p className="mt-4 text-sm leading-relaxed text-brand-100">
                  Unverbindliche Schätzung auf Basis von Entfernung, Zimmern,
                  Etage und Aufzug. Der finale Festpreis wird nach
                  Besichtigung bestätigt.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-brand-50">
                  <li>• Inkl. Transportversicherung</li>
                  <li>• Keine versteckten Gebühren</li>
                  <li>• Kostenlose Nachbesichtigung</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

function CalculatorField({
  icon: Icon,
  label,
  htmlFor,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700"
      >
        <Icon className="size-4 text-brand-600" aria-hidden />
        {label}
      </label>
      {children}
    </div>
  );
}

function ToggleOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
        selected
          ? "border-brand-600 bg-brand-50 text-brand-700 shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}
