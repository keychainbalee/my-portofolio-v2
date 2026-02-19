import Link from "next/link";
import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { Instagram, Mail, Github, Linkedin } from 'lucide-react'


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-12 lg:pt-40">
        {/* Layout Grid dengan gap yang lebih rapat (gap-8) */}
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 lg:items-center">

          {/* Bagian Kiri: Teks */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* <div className="mb-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Available for Hire
            </div> */}

            <h1 className="max-w-md scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
              Hi, Saya <span className="text-primary">Muhammad Iqbal Saputra</span>.
            </h1>

            <p className="mt-4 max-w-md text-base text-muted-foreground lg:text-lg">
              Seorang mahasiswa Teknik Informatika yang memiliki minat besar dalam pengembangan web, mobile, AI.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Button size="sm" className="h-10 rounded-full px-6">
                Proyek
              </Button>
              {/* Instagram */}
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <Link href="https://instagram.com/balee.sa" target="_blank">
                  <Instagram className="size-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>

              {/* Gmail */}
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <Link href="mailto:muhammad.iqbal.sap@gmail.com">
                  <Mail className="size-5" />
                  <span className="sr-only">Gmail</span>
                </Link>
              </Button>

              {/* Github */}
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <Link href="https://github.com/muhammadiqbalsaputra" target="_blank">
                  <Github className="size-5" />
                  <span className="sr-only">Github</span>
                </Link>
              </Button>

              {/* Linkedin */}
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                <Link href="https://linkedin.com/in/miqbalptr" target="_blank">
                  <Linkedin className="size-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Bagian Kanan: Gambar (Ukuran lebih proporsional) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative size-56 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted shadow-xl lg:size-72">
              <Image
                src="/assets/logo/profilsaya.png" // Pastikan path benar
                alt="Profile"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section Table yang lebih dekat ke Hero (mt-16) */}
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border bg-card shadow-sm">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px]">Project</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Portfolio V1</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell className="text-right">2024</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}