import {
  Building2,
  Clock,
  Package,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SITE = {
  name: "NordUmzug",
  tagline: "Premium Umzugsservice in Deutschland",
  phone: "+49 30 1234 5678",
  email: "kontakt@nordumzug-demo.de",
  address: "Friedrichstraße 123, 10117 Berlin",
} as const;

export const NAV_LINKS = [
  { href: "#vorteile", label: "Vorteile" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#rechner", label: "Preisrechner" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Schnell",
    description:
      "Termine innerhalb von 48 Stunden — effiziente Teams und optimierte Routenplanung.",
  },
  {
    icon: Shield,
    title: "Sicher",
    description:
      "Geschultes Personal, geprüfte Fahrzeuge und sorgfältiger Transport Ihrer Möbel.",
  },
  {
    icon: Truck,
    title: "Festpreis Garantie",
    description:
      "Transparente Kalkulation ohne versteckte Kosten — der vereinbarte Preis gilt.",
  },
  {
    icon: Package,
    title: "Versicherung inklusive",
    description:
      "Transportversicherung bis 650.000 € inklusive — für Ihre volle Sicherheit.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    icon: Truck,
    title: "Privatumzüge",
    description:
      "Vom Ein-Zimmer-Apartment bis zur Villa — maßgeschneidert für Familien und Singles.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Firmenumzüge",
    description:
      "Büroumzüge mit minimaler Ausfallzeit — IT, Möbel und Akten professionell geplant.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Möbelmontage",
    description:
      "Demontage und Montage von Küchen, Schränken und Betten durch erfahrene Monteure.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
  },
  {
    icon: Package,
    title: "Verpackungsservice",
    description:
      "Hochwertiges Verpackungsmaterial und sichere Einpackung durch unser Team.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Anfrage",
    description:
      "Kostenlose Anfrage online oder telefonisch — wir melden uns innerhalb von 2 Stunden.",
  },
  {
    step: 2,
    title: "Planung",
    description:
      "Besichtigung, Festpreisangebot und Terminabstimmung — alles transparent dokumentiert.",
  },
  {
    step: 3,
    title: "Umzug",
    description:
      "Professionelles Team, moderne LKW und sorgfältiger Transport an Ihrem Wunschtermin.",
  },
  {
    step: 4,
    title: "Abschluss",
    description:
      "Aufbau, Entsorgung optional und Abschlusskontrolle — erst dann ist der Umzug erledigt.",
  },
] as const;

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sabine Müller",
    location: "München",
    rating: 5,
    text: "Pünktlich, freundlich und der Festpreis wurde exakt eingehalten. Der Umzug von München nach Augsburg lief stressfrei.",
  },
  {
    name: "Thomas Weber",
    location: "Hamburg",
    rating: 5,
    text: "Firmenumzug mit 12 Arbeitsplätzen — alles war am Montagmorgen einsatzbereit. Sehr professionelle Planung.",
  },
  {
    name: "Julia Hartmann",
    location: "Berlin",
    rating: 5,
    text: "4. Stock ohne Aufzug — kein Problem für das Team. Möbel kamen ohne einen Kratzer an. Absolute Empfehlung!",
  },
  {
    name: "Markus Schneider",
    location: "Frankfurt",
    rating: 4,
    text: "Verpackungsservice hat uns viel Zeit gespart. Kommunikation war durchgehend klar und zuverlässig.",
  },
  {
    name: "Anna Krüger",
    location: "Köln",
    rating: 5,
    text: "Vom ersten Angebot bis zum Abschluss alles digital und unkompliziert. Preis-Leistung top.",
  },
];
