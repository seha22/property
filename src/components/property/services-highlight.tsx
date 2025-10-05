import { CheckCircle2, Crown, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Crown,
    title: "Agen Properti Profesional",
    description:
      "Tim senior berlisensi dengan spesialisasi properti premium siap mendampingi proses negosiasi dan closing.",
  },
  {
    icon: CheckCircle2,
    title: "Listing Eksklusif Terverifikasi",
    description:
      "Seluruh portofolio kami melalui kurasi ketat, inspeksi menyeluruh, serta dilengkapi dokumen legal siap transaksi.",
  },
  {
    icon: Quote,
    title: "Testimoni Klien Kelas Dunia",
    description:
      "Lebih dari 500 keluarga & investor internasional mempercayakan strategi properti jangka panjang kepada kami.",
  },
];

export function ServicesHighlight() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {services.map((service) => (
        <Card
          key={service.title}
          className="border-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-100 shadow-xl"
        >
          <CardContent className="space-y-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
              <service.icon className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
