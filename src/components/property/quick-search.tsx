import { MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function QuickSearch() {
  return (
    <Card className="border-0 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur dark:bg-slate-900/70">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-amber-500/20 p-2 text-amber-500">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Pencarian Cepat</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Temukan properti sesuai preferensi Anda hanya dengan beberapa klik.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="lokasi">Lokasi</Label>
            <div className="relative">
              <Input id="lokasi" placeholder="Contoh: Kebayoran Baru" className="pr-10" />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Rentang Harga (Miliar)</Label>
            <Slider defaultValue={[3, 12]} min={1} max={20} step={1} className="mt-4" />
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-300">
              <span>Rp 3M</span>
              <span>Rp 12M</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Tipe Properti</Label>
            <Select defaultValue="residential">
              <SelectTrigger className="bg-white/60 dark:bg-slate-900/60">
                <SelectValue placeholder="Pilih tipe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Rumah Tinggal</SelectItem>
                <SelectItem value="apartment">Apartemen</SelectItem>
                <SelectItem value="villa">Villa & Resort</SelectItem>
                <SelectItem value="commercial">Komersial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Kami menyediakan konsultasi pribadi untuk memastikan Anda mendapatkan rekomendasi terbaik.
          </p>
          <Button className="rounded-full bg-amber-500 text-slate-900 hover:bg-amber-400">Cari Properti</Button>
        </div>
      </CardContent>
    </Card>
  );
}
