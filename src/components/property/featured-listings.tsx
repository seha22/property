import { PropertyCard, Property } from "./property-card";

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Skyline Residence Penthouse",
    location: "SCBD, Jakarta Selatan",
    price: "Rp 8,5 Miliar",
    beds: 4,
    baths: 3,
    area: "420 m²",
    image: "/property-01.svg",
    tag: "Baru",
  },
  {
    id: "2",
    title: "Emerald Bay Private Villa",
    location: "Nusa Dua, Bali",
    price: "Rp 12,4 Miliar",
    beds: 5,
    baths: 5,
    area: "680 m²",
    image: "/property-02.svg",
    tag: "Eksklusif",
  },
  {
    id: "3",
    title: "Aurora Park Signature House",
    location: "BSD City, Tangerang",
    price: "Rp 6,2 Miliar",
    beds: 4,
    baths: 4,
    area: "350 m²",
    image: "/property-03.svg",
  },
];

export function FeaturedListings() {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Pilihan Unggulan</p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Koleksi Properti Premium
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-500 dark:text-slate-300">
          Jelajahi portofolio eksklusif kami dengan kurasi ketat untuk memastikan setiap hunian memenuhi standar
          kenyamanan dan estetika kelas dunia.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
