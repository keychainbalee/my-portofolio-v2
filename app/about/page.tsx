'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Code2, GraduationCap, Users, FileText, Briefcase, Award, ExternalLink, ArrowLeft, ArrowRight, Trophy, ChevronDown,
    Brain, Cpu, Eye, Smile, Medal
} from 'lucide-react'
import { FaPython, FaLaravel } from "react-icons/fa"
import { SiDart, SiFlutter, SiJavascript, SiNextdotjs } from "react-icons/si"
import Image from 'next/image'
import Link from 'next/link'

const certificates = [
    { title: "AI Engineer Intermediate", src: "/assets/sertifikat/sertifaiintermediate.jpg", link: "https://drive.google.com/file/d/15erPHteNeIQAubvMMsaZX1Th2WEThjCz/view?usp=sharing" },
    { title: "Projek Deep Learning Mahir (Dicoding)", src: "/assets/sertifikat/sertif_dl_mahir.jpg", link: "https://www.dicoding.com/certificates/L4PQ928V2PO1" },
    { title: "Backend Pemula Dengan Javascript (Dicoding)", src: "/assets/sertifikat/backend.jpg", link: "https://www.dicoding.com/certificates/QLZ96D21MZ5D" },
    { title: "Machine Learning Terapan (Dicoding)", src: "/assets/sertifikat/sertif_ml_terapan.jpg", link: "https://www.dicoding.com/certificates/KEXLQ2MOWPG2" },
]

const techSkills = [
    { name: 'Python', icon: FaPython },
    { name: 'Dart', icon: SiDart },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Laravel', icon: FaLaravel },
    { name: 'Javascript', icon: SiJavascript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Deep Learning', icon: Cpu },
    { name: 'Sentiment Analysis', icon: Smile },
    { name: 'Computer Vision', icon: Eye }
]

const achievements = [
    {
        title: "Peraih Pendanaan Program Kreativitas Mahasiswa",
        description: "Peraih Program Kreativitas Mahasiswa pada Bidang Karsa Cipta (PKM-KC) dari Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia",
        date: "2026"
    },
    {
        title: "Beasiswa IDCamp 2025 AI-Engineer (Expert)",
        description: "Peraih Beasiswa IDCamp 2025 AI-Engineer (Expert) dari Indosat Ooredoo Hutchison dan Dicoding",
        date: "2025"
    },
    {
        title: "Beasiswa IDCamp 2025 AI-Engineer (Intermediate)",
        description: "Peraih Beasiswa IDCamp 2025 AI-Engineer (Intermediate) dari Indosat Ooredoo Hutchison dan Dicoding",
        date: "2025"
    }
]

export default function AboutBento() {
    const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null)

    const toggleAchievement = (index: number) => {
        setExpandedAchievement(expandedAchievement === index ? null : index)
    }

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
                            <Link href="/cv">
                                <FileText className="size-4 mr-2" />
                                Lihat CV
                            </Link>
                        </Button>
                    </div>

                    {/* Grid wrapper */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 animate-in fade-in slide-in-from-top-4 duration-1000">

                        {/* Main Profile */}
                        <Card className="md:col-span-6 md:row-span-3 overflow-hidden border-none bg-linear-to-br from-primary/10 via-transparent to-muted">
                            <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full">
                                <div className="relative size-40 md:size-48 lg:size-56 shrink-0 shadow-2xl rounded-3xl overflow-hidden md:rotate-3 md:hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/assets/fotoprofil/fotosaya4.webp"  
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
                                        Halo Namaku Muhammad Iqbal Saputra, seorang Mahasiswa Aktif Teknik Informatika. Aku memiliki minat yang besar dalam bidang teknologi, terutama dalam pengembangan Artificial Intelligence dan Pengembangan Aplikasi Web serta Mobile. Dengan pengalaman yang aku miliki, aku selalu bersemangat untuk belajar hal baru dan menerapkan pengetahuan yang aku dapatkan dalam proyek-proyek nyata.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Education */}
                        <Card className="md:col-span-2 md:row-span-2 md:row-start-4 flex flex-col justify-center p-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="size-7 text-primary" />
                                <h3 className="font-bold text-xl tracking-tight">Pendidikan</h3>
                            </div>
                            <div>
                                <p className="font-bold text-primary">Universitas Harkat Negeri</p>
                                <p className="text-sm text-muted-foreground mt-1">D4 Teknik Informatika</p>
                                <p className="text-sm text-muted-foreground mt-1">Semester 6</p>
                            </div>
                        </Card>

                        {/* Tech Stack */}
                        <Card className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-4 p-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="size-7 text-primary" />
                                <h3 className="font-bold text-xl tracking-tight">Keahlian Teknis</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {techSkills.map((skill) => (
                                    <Badge 
                                        key={skill.name} 
                                        variant="outline" 
                                        className="flex items-center gap-2 px-3 py-1.5 text-[10px] md:text-xs border-primary/20 hover:scale-105 hover:bg-primary/10 transition-all duration-200 cursor-default"
                                    >
                                        {skill.icon && <skill.icon className="size-4 text-primary" />}
                                        <span>{skill.name}</span>
                                    </Badge>
                                ))}
                            </div>
                        </Card>

                        {/*Pengalaman */}
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
                                {/* <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Kunjungan Industri D4 Teknik Informatika</p>
                                    <p className="text-sm text-muted-foreground mt-1">Sekretaris 1</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2025</Badge>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Pelatihan Jurnalistik Tingkat Dasar</p>
                                    <p className="text-sm text-muted-foreground mt-1">Ketua Pelaksana</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2024</Badge>
                                </div> */}
                                {/* <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Panitia PKKMB</p>
                                    <p className="text-sm text-muted-foreground mt-1">Koordinator Divisi Publikasi</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2024</Badge>
                                </div> */}
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary">
                                    <p className="font-semibold text-sm md:text-base leading-snug">Sharanife Dexanet</p>
                                    <p className="text-sm text-muted-foreground mt-1">Network Engineer</p>
                                    <Badge variant="secondary" className="mt-2 text-[10px]">2022</Badge>
                                </div>
                            </div>
                        </Card>

                        {/* Organisasi dengan UI Timeline */}
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

                        {/* Pencapaian (Achievements) */}
                        <Card className="md:col-span-6 p-6 flex flex-col animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex items-center gap-3 mb-6">
                                <Trophy className="size-7 text-primary" />
                                <h3 className="font-bold text-xl tracking-tight">Pencapaian</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                                {achievements.map((item, index) => {
                                    const isOpen = expandedAchievement === index
                                    return (
                                        <div 
                                            key={index}
                                            className="flex flex-col justify-between p-5 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:shadow-sm h-fit"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-3">
                                                    <Badge variant="secondary" className="text-[10px]">{item.date}</Badge>
                                                    <Medal className="size-5 text-primary" />
                                                </div>
                                                <button
                                                    onClick={() => toggleAchievement(index)}
                                                    className="flex items-center justify-between w-full text-left font-bold text-base tracking-tight group/btn cursor-pointer"
                                                >
                                                    <span>{item.title}</span>
                                                    <ChevronDown className={cn(
                                                        "size-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-2",
                                                        isOpen && "rotate-180 text-primary"
                                                    )} />
                                                </button>
                                                <div className={cn(
                                                    "grid transition-all duration-300 ease-in-out",
                                                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                                )}>
                                                    <div className="overflow-hidden">
                                                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Card>

                        {/* Sertifikat */}
                        <Card className="md:col-span-6 p-6 flex flex-col bg-primary/5 border-primary/10 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <Award className="size-7 text-primary" />
                                    <h3 className="font-bold text-xl tracking-tight">Sertifikat</h3>
                                </div>
                                {/* <Button variant="outline" size="sm" asChild>
                                    <Link href="#" target="_blank"><ExternalLink className="size-4 mr-2" /> Lihat Semua</Link>
                                </Button> */}
                            </div>

                            {/* GRID UTAMA SERTIFIKAT */}
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

                        {/* TOMBOL NAVIGASI BAWAH */}
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