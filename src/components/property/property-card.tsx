import Image from "next/image";
import { Bed, Bath, Square } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  tag?: string;
};

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden border-muted/40 bg-slate-950 text-slate-100 shadow-lg shadow-slate-900/50">
      <div className="relative h-52">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
        />
        {property.tag ? (
          <Badge className="absolute left-4 top-4 bg-amber-500 text-slate-900 shadow-md">
            {property.tag}
          </Badge>
        ) : null}
      </div>
      <CardHeader className="space-y-1 pb-2">
        <h3 className="text-xl font-semibold tracking-tight text-slate-50">{property.title}</h3>
        <p className="text-sm text-slate-300">{property.location}</p>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-lg font-semibold text-amber-300">{property.price}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-amber-400" />
            <span>{property.beds} KT</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-amber-400" />
            <span>{property.baths} KM</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-amber-400" />
            <span>{property.area}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <button className="mt-2 inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-300/20">
          Lihat Detail
        </button>
      </CardFooter>
    </Card>
  );
}
