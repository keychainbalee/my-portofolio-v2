'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Code2, GraduationCap, Users, FileText, Briefcase, Award, ExternalLink, ArrowLeft, ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const certificates = [
    { title: "Belajar Machine Learning (Dicoding)", src: "/assets/sertifikat/belajarml.jpg", link: "https://www.dicoding.com/certificates/QLZ96O19MZ5D" },
    { title: "Belajar Fundamental Deep Learning (Dicoding)", src: "/assets/sertifikat/fundamentaldeeplearning.jpg", link: "https://www.dicoding.com/certificates/ERZRL4J6QZYV" },
    { title: "Network Support and Security (Cisco)", src: "/assets/sertifikat/networksupport.jpg", link: "https://drive.google.com/file/d/1CGwQrXh6GZhsJZQ3mXsMUzGkdFlpHK-t/view" },
    { title: "Backend Pemula Dengan Javascript (Dicoding)", src: "/assets/sertifikat/backend.jpg", link: "https://www.dicoding.com/certificates/QLZ96D21MZ5D" },
]

export default function AboutBento() {
    return (
        <div className="min-h-screen bg-transparent pb-20">
            {/* Dekorasi Cahaya */}
            <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-blue-500/20 blur-[120px]" />
            </div>

            {/* <Navbar /> */}

            <main className="container mx-auto px-4 pt-24 md:pt-32">
                <div className="mx-auto max-w-6xl">

                    {/* Tombol Lihat CV */}
                    <div className="flex justify-end mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <Button
                            asChild
                            className="rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <Link href="https://drive.google.com/file/d/1oC1rNXD7W5mTRpxXbKxVXcqzs7smIwHB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <FileText className="size-4 mr-2" />
                                Lihat CV
                            </Link>
                        </Button>
                    </div>

                    {/* Grid wrapper: Diperluas menjadi 15 baris (grid-rows-15) */}
                    <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-15 gap-4 md:gap-5 animate-in fade-in slide-in-from-top-4 duration-1000">

                        {/* 1. Main Profile (Baris 1-3) */}
                        <Card className="md:col-span-6 md:row-span-3 overflow-hidden border-none bg-linear-to-br from-primary/10 via-transparent to-muted">
                            <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full">
                                <div className="relative size-40 md:size-48 lg:size-56 shrink-0 shadow-2xl rounded-3xl overflow-hidden md:rotate-3 md:hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/assets/fotoprofil/profilesaya3.jpeg"  
                                        alt="Muhammad Iqbal Saputra"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-center md:text-left">
                                    <Badge className="w-fit mb-4 mx-auto md:mx-0 bg-primary/20 text-primary hover:bg-primary/30 border-none">
                                        Mahasiswa Teknik Informatika
                                    </Badge>
                                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter">
                                        Muhammad Iqbal Saputra
                                    </h1>
                                    <p className="mt-4 md:mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
                                        Halo Namaku Muhammad Iqbal Saputra, seorang Mahasiswa Aktif Teknik Informatika. Aku memiliki minat yang besar dalam bidang teknologi, terutama dalam pengembangan web, mobile, dan Artificial Intelegent. Dengan pengalaman yang aku miliki, aku selalu bersemangat untuk belajar hal baru dan menerapkan pengetahuan yang aku dapatkan dalam proyek-proyek nyata.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 2. Education (Baris 4-5) */}
                        <Card className="md:col-span-2 md:row-span-2 md:row-start-4 flex flex-col justify-center p-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <GraduationCap className="size-8 text-primary mb-4" />
                            <h3 className="font-bold text-xl tracking-tight">Pendidikan</h3>
                            <div className="mt-3">
                                <p className="font-bold text-primary">Universitas Harkat Negeri</p>
                                <p className="text-sm text-muted-foreground mt-1">D4 Teknik Informatika</p>
                                                                <p className="text-sm text-muted-foreground mt-1">Semester 6</p>
                            </div>
                        </Card>

                        {/* 3. Tech Stack (Baris 4-5) */}
                        <Card className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-4 p-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <Code2 className="size-8 text-primary mb-4" />
                            <h3 className="font-bold text-xl tracking-tight">Keahlian Teknis</h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {['Python', 'Dart', 'Flutter','Laravel','Javascript' , 'Next.js', 'Machine Learning','Deep Learning', 'Sentiment Analysis', 'PostgreSQL'].map((s) => (
                                    <Badge key={s} variant="outline" className="px-3 md:px-4 py-1 text-[10px] md:text-xs border-primary/20 hover:scale-115 hover:bg-primary/20 transition-transform duration-200">{s}</Badge>
                                ))}
                            </div>
                        </Card>

                        {/* 4. Pengalaman (Baris 6-9) */}
                        <Card className="md:col-span-3 md:row-span-4 md:row-start-6 p-6 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="size-7 text-primary" />
                                <h3 className="font-bold text-xl tracking-tight">Pengalaman</h3>
                            </div>
                            <div className="space-y-6 flex-1 pr-2">
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Project Hilirisasi Rempah Tour</p>
                                    <p className="text-sm text-muted-foreground mt-1">Frontend Developer</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2025</Badge>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Kunjungan Industri D4 Teknik Informatika</p>
                                    <p className="text-sm text-muted-foreground mt-1">Sekretaris 1</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2025</Badge>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Pelatihan Jurnalistik Tingkat Dasar</p>
                                    <p className="text-sm text-muted-foreground mt-1">Ketua Pelaksana</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2024</Badge>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Panitia PKKMB</p>
                                    <p className="text-sm text-muted-foreground mt-1">Koordinator Divisi Publikasi</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2024</Badge>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Sharanife Dexanet</p>
                                    <p className="text-sm text-muted-foreground mt-1">Network Engineer</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2022</Badge>
                                </div>
                            </div>
                        </Card>

                        {/* 5. Organisasi dengan UI Timeline (Baris 6-9, Kolom 4-6) */}
                        <Card className="md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-6 p-6 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-4 duration-1000">

                            <div className="flex items-center gap-3 mb-6">
                                <Users className="size-7 text-primary" />
                                <h3 className="font-bold text-xl tracking-tight">Organisasi</h3>
                            </div>

                            {/* Garis Timeline Kiri */}
                            <div className="space-y-5 flex-1 overflow-y-auto no-scrollbar pr-2 border-l-2 border-primary/20 ml-2">
                                
                                {/* Item 1 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-primary ring-4 ring-background" />
                                    <p className="font-bold text-sm md:text-base text-primary">Study Club ForTI</p>
                                    <p className="text-sm font-medium">Wakil Ketua</p>
                                    <p className="text-xs text-muted-foreground mt-1">Sep 2025 - Sekarang</p>
                                </div>

                                {/* Item 2 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-primary ring-4 ring-background" />
                                    <p className="font-bold text-sm md:text-base text-primary">UKM Pers Semata</p>
                                    <p className="text-sm font-medium">Pimpinan Umum</p>
                                    <p className="text-xs text-muted-foreground mt-1">Feb 2025 - Feb 2026</p>
                                </div>

                                {/* Item 3 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-primary/40 ring-4 ring-background" />
                                    <p className="font-semibold text-sm md:text-base">UKM Pers Semata</p>
                                    <p className="text-sm text-foreground/80">Audio & Visual</p>
                                    <p className="text-xs text-muted-foreground mt-1">Feb 2024 - Feb 2025</p>
                                </div>

                                {/* Item 4 */}
                                <div className="relative pl-6">
                                    <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-primary/40 ring-4 ring-background" />
                                    <p className="font-semibold text-sm md:text-base">Study Club PlugIn</p>
                                    <p className="text-sm text-foreground/80 leading-snug">Anggota Web Beginner & Intermediate</p>
                                    <p className="text-xs text-muted-foreground mt-1">Nov 2023 - Ags 2024</p>
                                </div>
                            </div>
                        </Card>

                        {/* 6. Sertifikat - GRID KANAN KIRI (Baris 10-15) */}
                        <Card className="md:col-span-6 md:row-span-6 md:row-start-10 p-6 flex flex-col bg-primary/5 border-primary/10 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <Award className="size-7 text-primary" />
                                    <h3 className="font-bold text-xl tracking-tight">Sertifikat</h3>
                                </div>
                                {/* <Button variant="outline" size="sm" asChild>
                                    <Link href="#" target="_blank"><ExternalLink className="size-4 mr-2" /> Lihat Semua</Link>
                                </Button> */}
                            </div>

                            {/* --- GRID UTAMA SERTIFIKAT (2 KOLOM) --- */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col rounded-xl overflow-hidden border border-border/50 bg-background hover:shadow-md transition-all"
                                    >
                                        {/* Area Gambar (Rasio 16:9 agar paten) */}
                                        <div className="relative aspect-video w-full overflow-hidden bg-muted/30">
                                            <Image
                                                src={cert.src}
                                                alt={cert.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Footer per-item */}
                                        <div className="flex items-center justify-between p-3 border-t border-border/50 bg-muted/5">
                                            <p className="font-semibold text-sm truncate">{cert.title}</p>
                                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full" asChild title="Lihat Sertifikat">
                                                <Link href={cert.link} target="_blank">
                                                    <ExternalLink className="size-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* --- TOMBOL NAVIGASI BAWAH (FLOATING) --- */}
                        <div className="bottom-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none animate-in fade-in slide-in-from-top-4 duration-1000">
                            {/* pointer-events-auto agar tombolnya saja yang bisa diklik, ruang kosong di tengahnya tidak menghalangi web */}
                            <Button variant="secondary" className="rounded-full shadow-xl gap-2 hover:-translate-x-1 transition-transform pointer-events-auto" asChild>
                                <Link href="/">
                                    <ArrowLeft className="size-4" />
                                    Home
                                </Link>
                            </Button>

                            <Button className="rounded-full shadow-xl gap-2 hover:translate-x-1 transition-transform pointer-events-auto" asChild>
                                <Link href="/project">
                                    Project
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}