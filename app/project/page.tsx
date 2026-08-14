'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Map, ShoppingBag, Github, ExternalLink, Smartphone, PersonStandingIcon, ScanEye,GraduationCapIcon, Code2, GraduationCap, Footprints, Users, FileText, Briefcase, Award, ArrowLeft, ArrowRight, ScanFace, Leaf, Gamepad2, MessageCircle, X} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils' // Pastikan ini ada untuk menggabungkan class Tailwind

// 1. DATA ARRAY PROYEK
// Kita tambahkan properti 'colSpan' agar masing-masing card tahu ukurannya
const projectsData = [
    {
        title: "My Portofolio Web",
        description: "Aplikasi Portofolio Pribadi",
        role: "Fullstack Dev",
        icon: <PersonStandingIcon className="size-8 text-primary mb-4" />,
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        color: "text-primary",
        colSpan: "md:col-span-2", // Ukuran kotak standar (sepertiga)
        github: "https://github.com/keychainbalee/my-portofolio-v2",
        demo: null // Isi URL jika ada, biarkan null jika tidak ada tombol demo
    },
    {
        title: "JagaMata App",
        description: "Aplikasi deteksi potensi penyakit mata & rekomendasi terapi akupresur berbasis AI.",
        role: "AI Engineer",
        icon: <Eye className="size-8 text-blue-700 mb-4" />,
        tech: ['Python', 'Flutter'],
        color: "text-blue-700",
        colSpan: "md:col-span-2", // Ukuran kotak standar (sepertiga)
        github: "https://github.com/mataminus-capstone/final_layout_jagamata",
        demo: null 
    },
    {
        title: "Quizzin App",
        description: "Platform Pembelajaran Latihan Soal Adaptif dengan Penilaian Esai Otomatis",
        role: "Mobile Dev & AI Engineer",
        icon: <GraduationCapIcon className="size-8 text-blue-500 mb-4" />,
        tech: ['Flutter', 'Python', 'TensorFlow'],
        color: "text-blue-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/quizzin_mobile",
        demo: "https://quizzin.web.id/"
    },
    {
        title: "Fareky AI",
        description: "chatbot AI berbasis LLM (Large Language Model) untuk membantu menjawab pertanyaan",
        role: "Fullstack Dev & AI Engineer",
        icon: <MessageCircle className="size-8 text-purple-500 mb-4" />,
        tech: ['Next.js', 'TypeScript'],
        color: "text-purple-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/fareky_ai",
        demo: "https://fareky-ai.vercel.app/"
    },
    {
        title: "Localize",
        description: "Platform penjualan sepatu lokal berbasis mobile.",
        role: "Mobile Dev & Backend Dev",
        icon: <Footprints className="size-8 text-yellow-500 mb-4" />,
        tech: ['Flutter', 'Express.js', 'Drizzle ORM'],
        color: "text-yellow-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/localize_app",
        demo: null
    },
    {
        title: "Rempah Tour",
        description: "Web design & frontend untuk Hilirisasi Rempah Virtual Tour 360 derajat.",
        role: "Frontend Dev",
        icon: <Map className="size-8 text-orange-500 mb-4" />,
        tech: ['Laravel', 'Livewire', 'Tailwind CSS'],
        color: "text-orange-500",
        colSpan: "md:col-span-2",
        github: null,
        demo: null
    },
    {
        title: "Sport Seventeen",
        description: "Website E-commerce memfasilitasi transaksi jual beli alat olahraga.",
        role: "Frontend Dev",
        icon: <ShoppingBag className="size-8 text-rose-500 mb-4" />,
        tech: ['Laravel', 'Tailwind CSS'],
        color: "text-rose-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/sport-ecommerce",
        demo: null
    },
    {
        title: "Ini Gadget",
        description: "Website E-commerce komprehensif yang memfasilitasi transaksi jual beli Gadget.",
        role: "Fullstack Dev & Unit Tester",
        icon: <Smartphone className="size-8 text-blue-500 mb-4" />,
        tech: ['Laravel', 'Tailwind CSS'],
        color: "text-blue-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/inigadget-app",
        demo: null
    },
    {
        title: "Model Pendeteksi 5 Penyakit Mata",
        description: "Model Deep Learning untuk mendeteksi 5 jenis penyakit mata menggunakan berbagai sumber dataset.",
        role: "AI Engineer",
        icon: <ScanEye className="size-8 text-red-600 mb-4" />,
        tech: ['Python', 'TensorFlow', 'Keras'],
        color: "text-red-600",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/test-and-train-v10",
        demo: null
    },
    {
        title: "Model Pendeteksi Mata Lelah",
        description: "Model Deep Learning untuk mendeteksi mata lelah menggunakan dataset Kaggle.",
        role: "AI Engineer",
        icon: <ScanFace className="size-8 text-pink-600 mb-4" />,
        tech: ['Python', 'TensorFlow', 'Keras'],
        color: "text-pink-600",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/test-and-train-drowsiness-v1",
        demo: null
    },
    {
        title: "Model Pendeteksi Sayuran",
        description: "Model Deep Learning untuk mendeteksi Nama Sayuran menggunakan dataset Kaggle.",
        role: "AI Engineer",
        icon: <Leaf className="size-8 text-green-500 mb-4" />,
        tech: ['Python', 'TensorFlow', 'Keras'],
        color: "text-green-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/klasifikasi-sayuran-cnn",
        demo: null
    },
    {
        title: "Olivia's Nightmares Game",
        description: "Game FPS dengan nuansa horor dan misteri, yang dikembangkan menggunakan Unity Engine",
        role: "Game Developer",
        icon: <Gamepad2 className="size-8 text-purple-500 mb-4" />,
        tech: ['Unity', 'C#'],
        color: "text-purple-500",
        colSpan: "md:col-span-2",
        github: "https://github.com/keychainbalee/olivias_nightmares_games",
        demo: "https://olivenights.vercel.app/"
    },
]

type Project = typeof projectsData[number]

export default function ProjectBento() {
    const [selected, setSelected] = useState<Project | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelected(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [selected])

    return (
        <div className="min-h-screen bg-transparent pb-20 overflow-hidden">

            {/* Dekorasi Cahaya */}
            <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
            </div>

            <main className="container mx-auto px-4 pt-24 md:pt-32">
                <div className="mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                            Koleksi <span className="text-primary">Proyek</span> Saya
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Eksplorasi dari teknologi Web, Mobile, hingga Machine Learning.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">

                        {/* 2. PROSES MAPPING DATA ARRAY */}
                        {projectsData.map((project, index) => (
                            <Card
                                key={index}
                                onClick={() => setSelected(project)}
                                // Gabungkan class colSpan dari array dengan class bawaan card
                                className={cn(
                                    project.colSpan,
                                    "group relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in zoom-in-95 cursor-pointer"
                                )}
                                style={{ animationFillMode: "both", animationDelay: `${index * 150}ms` }}
                            >
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="p-6 flex-1">
                                        {project.icon}
                                        <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                                        <p className="text-sm text-foreground/80">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tech.map(t => (
                                                <Badge key={t} variant="outline" className="text-[10px] bg-background/50 backdrop-blur-sm">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto bg-white/5 dark:bg-black/10 p-4 border-t border-white/10 flex justify-between items-center">
                                        <span className={cn("text-[10px] font-bold uppercase tracking-widest", project.color)}>
                                            {project.role}
                                        </span>

                                        <div className="flex gap-3">
                                            {project.github && (
                                                <Github className={cn("size-4 text-muted-foreground", project.color)} />
                                            )}
                                            {project.demo && (
                                                <ExternalLink className={cn("size-4 text-muted-foreground", project.color)} />
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                    {/* --- TOMBOL NAVIGASI BAWAH (FLOATING) --- */}
                    <div className="mt-10 bottom-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
                        {/* pointer-events-auto agar tombolnya saja yang bisa diklik, ruang kosong di tengahnya tidak menghalangi web */}
                        <Button variant="secondary" className="rounded-full shadow-xl gap-2 hover:-translate-x-1 transition-transform pointer-events-auto" asChild>
                            <Link href="/about">
                                <ArrowLeft className="size-4" />
                                About
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            {/* --- MODAL DETAIL PROYEK --- */}
            {selected && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative w-full max-w-lg rounded-3xl border border-white/20 dark:border-white/10 bg-background shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Dekorasi header */}
                        <div className="p-6 pb-4 flex items-start justify-between bg-white/5 dark:bg-white/5">
                            <div className="flex items-center gap-3">
                                {selected.icon}
                                <h3 className="text-2xl font-black tracking-tighter">{selected.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                                aria-label="Tutup"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <div className="p-6 pt-2 space-y-5">
                            <p className={cn("text-xs font-bold uppercase tracking-widest", selected.color)}>
                                {selected.role}
                            </p>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {selected.description}
                            </p>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                    Teknologi
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selected.tech.map(t => (
                                        <Badge key={t} variant="outline" className="bg-background/50 backdrop-blur-sm">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                {selected.github && (
                                    <Button asChild className="flex-1 gap-2 rounded-full">
                                        <Link href={selected.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="size-4" />
                                            Lihat Repository
                                        </Link>
                                    </Button>
                                )}
                                {selected.demo && (
                                    <Button asChild variant="outline" className="flex-1 gap-2 rounded-full">
                                        <Link href={selected.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="size-4" />
                                            Kunjungi Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}