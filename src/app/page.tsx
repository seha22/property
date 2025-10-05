"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { BrandMarquee } from "@/components/property/brand-marquee";
import { FeaturedListings } from "@/components/property/featured-listings";
import { QuickSearch } from "@/components/property/quick-search";
import { ServicesHighlight } from "@/components/property/services-highlight";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
          <div className="mx-auto h-full max-w-7xl bg-[radial-gradient(circle_at_top,_#facc1520,_transparent_60%)]" />
        </div>
        <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <SignedOut>
              <SignInButton>
                <Button size="sm" className="rounded-full bg-white/10 text-xs text-white hover:bg-white/20">
                  Masuk
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:py-24">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-amber-300">
              Era Private Collection
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Bangun portofolio properti premium Anda bersama konsultan tepercaya.
              </h1>
              <p className="text-base text-slate-200 sm:text-lg">
                Temukan hunian eksklusif, penthouse, hingga villa tepi laut yang terkurasi secara profesional untuk memenuhi gaya hidup modern nan elegan.
              </p>
            </div>
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Input
                    placeholder="Lokasi impian Anda"
                    className="h-12 rounded-2xl border-white/20 bg-white/70 pl-10 text-slate-900 placeholder:text-slate-500"
                  />
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                </div>
                <Button className="h-12 rounded-2xl bg-amber-400 px-6 font-semibold text-slate-900 hover:bg-amber-300">
                  Cari Properti
                </Button>
              </div>
              <p className="mt-3 text-xs text-slate-200">
                Nikmati akses awal ke listing eksklusif & pendampingan agen ahli.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-amber-400/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/20 via-white/5 to-transparent p-3">
              <div className="overflow-hidden rounded-[2rem] bg-slate-900/60">
                <Image src="/property-hero.svg" alt="Ilustrasi properti premium" width={640} height={480} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <BrandMarquee />
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6">
        <QuickSearch />
        <FeaturedListings />
        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">Mengapa Memilih Kami</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Layanan dengan Sentuhan ERA
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-500 dark:text-slate-300">
              Setiap interaksi dirancang personal oleh konsultan senior kami sehingga pengalaman memiliki properti terasa mulus dari survei hingga serah terima.
            </p>
          </div>
          <ServicesHighlight />
        </section>
      </main>
    </div>
  );
}
