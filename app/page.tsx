import Link from "next/link";
import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Instagram, Mail, Github, Linkedin, ArrowRightCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-12 lg:pt-40">

        {/* Layout Grid Baru: 5 Kolom, 5 Baris di Desktop */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-8 lg:gap-4 items-center">

          {/* Bagian Kiri (Box 1): Teks dan Tombol */}
          <div className="lg:col-span-3 lg:row-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Animasi Slide Up untuk Heading */}
            <h1 className="max-w-md scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Hi, Saya <span className="text-primary">Muhammad Iqbal Saputra</span>.
            </h1>

            {/* Animasi Slide Up untuk Paragraf dengan sedikit delay (duration lebih lama) */}
            <p className="mt-4 max-w-md text-base text-muted-foreground lg:text-lg animate-in fade-in slide-in-from-bottom-10 duration-[1500ms]">
              Jelajahi koleksi proyek saya. Tempat saya mendokumentasikan perjalanan dan hasil eksplorasi di bidang pengembangan web, mobile, dan AI.            
            </p>

            {/* Animasi Fade In untuk Kumpulan Tombol */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start items-center animate-in fade-in zoom-in-95 duration-[2000ms]">
              <Button size="sm" className="h-10 rounded-full px-5" asChild>
                <Link href="/about">
                  About Me
                  <ArrowRightCircle className="size-4 ml-0.5" />
                </Link>
              </Button>

              {/* Instagram */}
              <Button variant="outline" size="icon" className="rounded-full size-10 hover:-translate-y-1 transition-transform" asChild>
                <Link href="https://instagram.com/balee.sa" target="_blank">
                  <Instagram className="size-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>

              {/* Gmail */}
              <Button variant="outline" size="icon" className="rounded-full size-10 hover:-translate-y-1 transition-transform" asChild>
                <Link href="mailto:muhammad.iqbal.sap@gmail.com">
                  <Mail className="size-5" />
                  <span className="sr-only">Gmail</span>
                </Link>
              </Button>

              {/* Github */}
              <Button variant="outline" size="icon" className="rounded-full size-10 hover:-translate-y-1 transition-transform" asChild>
                <Link href="https://github.com/muhammadiqbalsaputra" target="_blank">
                  <Github className="size-5" />
                  <span className="sr-only">Github</span>
                </Link>
              </Button>

              {/* Linkedin */}
              <Button variant="outline" size="icon" className="rounded-full size-10 hover:-translate-y-1 transition-transform" asChild>
                <Link href="https://linkedin.com/in/miqbalptr" target="_blank">
                  <Linkedin className="size-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Bagian Kanan (Box 3): Gambar Profil */}
          {/* Animasi Slide dari Kanan untuk Gambar */}
          <div className="lg:col-span-2 lg:row-span-5 lg:col-start-4 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="relative size-56 overflow-hidden rounded-3xl border-2 border-primary/20 bg-muted shadow-xl lg:size-[300px]">
              <Image
                src="/assets/logo/profilsaya.png" // Pastikan path benar
                alt="Profile Muhammad Iqbal Saputra"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}