'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Map, ShoppingBag, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils' // Pastikan ini ada untuk menggabungkan class Tailwind

// 1. DATA ARRAY PROYEK
// Kita tambahkan properti 'colSpan' agar masing-masing card tahu ukurannya
const projectsData = [
    {
        title: "JagaMata",
        description: "Aplikasi deteksi penyakit mata & rekomendasi terapi akupresur berbasis AI.",
        role: "AI Engineer",
        icon: <Eye className="size-8 text-primary mb-4" />,
        tech: ['Python', 'Flutter'],
        color: "text-primary",
        colSpan: "md:col-span-2", // Ukuran kotak standar (sepertiga)
        github: "#",
        demo: null // Isi URL jika ada, biarkan null jika tidak ada tombol demo
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
        demo: "#"
    },
    {
        title: "Sport Seventeen",
        description: "Website E-commerce komprehensif yang memfasilitasi transaksi jual beli alat olahraga.",
        role: "Frontend Dev",
        icon: <ShoppingBag className="size-8 text-rose-500 mb-4" />,
        tech: ['Laravel', 'Tailwind CSS'],
        color: "text-rose-500",
        colSpan: "md:col-span-2",
        github: "#",
        demo: "#"
    }
]

export default function ProjectBento() {
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
                            Eksplorasi dan implementasi teknologi dari Web, Mobile, hingga Machine Learning.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
                        
                        {/* 2. PROSES MAPPING DATA ARRAY */}
                        {projectsData.map((project, index) => (
                            <Card 
                                key={index} 
                                // Gabungkan class colSpan dari array dengan class bawaan card
                                className={cn(
                                    project.colSpan, 
                                    "group relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in zoom-in-95"
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
                                            {/* Render icon Github HANYA jika link github diisi */}
                                            {project.github && (
                                                <Link href={project.github} className={cn("text-muted-foreground transition-colors hover:", project.color)}>
                                                    <Github className="size-4" />
                                                </Link>
                                            )}
                                            {/* Render icon External Link HANYA jika link demo diisi */}
                                            {project.demo && (
                                                <Link href={project.demo} className={cn("text-muted-foreground transition-colors hover:", project.color)}>
                                                    <ExternalLink className="size-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                </div>
            </main>
        </div>
    )
}