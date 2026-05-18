export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4"
      role="status"
      aria-label="Seite wird geladen"
    >
      <span className="size-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      <p className="text-sm font-medium text-slate-600">Wird geladen…</p>
    </div>
  );
}
