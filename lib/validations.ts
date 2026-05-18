import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte geben Sie Ihren vollständigen Namen ein.")
    .max(80, "Der Name ist zu lang."),
  phone: z
    .string()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein.")
    .regex(
      /^[\d\s+()/\-]+$/,
      "Nur Ziffern und übliche Telefonzeichen sind erlaubt.",
    ),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  routeFrom: z
    .string()
    .min(2, "Bitte geben Sie den Auszugsort an.")
    .max(120, "Die Adresse ist zu lang."),
  routeTo: z
    .string()
    .min(2, "Bitte geben Sie den Einzugsort an.")
    .max(120, "Die Adresse ist zu lang."),
  moveDate: z
    .string()
    .min(1, "Bitte wählen Sie ein Umzugsdatum.")
    .refine((value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(date.getTime()) && date >= today;
    }, "Das Datum muss heute oder in der Zukunft liegen."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
