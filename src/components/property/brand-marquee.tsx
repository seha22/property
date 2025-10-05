const brands = [
  "ERA Prestige",
  "Signature Living",
  "Harper & Co.",
  "Luxe Habitat",
  "Skyline Estates",
  "Azure Residences",
];

export function BrandMarquee() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60">
      <div className="flex animate-[scroll_20s_linear_infinite] gap-10 whitespace-nowrap px-8 py-6 text-sm font-medium uppercase tracking-[0.4em] text-slate-400">
        {brands.map((brand) => (
          <span key={brand} className="text-slate-500 dark:text-slate-300">
            {brand}
          </span>
        ))}
        {brands.map((brand) => (
          <span key={`${brand}-duplicate`} className="text-slate-500 dark:text-slate-300">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
