'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2, Eye, Map, History, Activity, Satellite, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

// Data Proyek
const projects = [
    {
        title: "JagaMata",
        description: "Capstone project berupa aplikasi untuk mendeteksi potensi penyakit mata dan memberikan rekomendasi terapi akupresur kepada pengguna.",
        role: "Developer / Capstone Project",
        icon: <Eye className="size-6 text-primary" />,
        tech: ["Python", "Flutter", "Python"],
        github: "#",
        demo: "#"
    },
    {
        title: "Hilirisasi Rempah Tour",
        description: "Pengembangan Virtual Tour interaktif untuk situs bersejarah. Proyek ini mendigitalkan pengalaman pariwisata ke dalam bentuk web.",
        role: "Frontend & 360 Photo Editor",
        icon: <Map className="size-6 text-orange-500" />,
        tech: ["Laravel", "Web Design", "360 Virtual Tour"],
        github: "#",
        demo: "#"
    },
    {
        title: "Sport Seventeen",
        description: "Website E-commerce yang memfasilitasi transaksi jual beli berbagai macam alat dan perlengkapan olahraga secara online.",
        role: "Web Developer",
        icon: <ShoppingBag className="size-6 text-rose-500" />,
        tech: ["Laravel", "Livewire", "Tailwind CSS"],
        github: "#",
        demo: "#"
    }
]

export default function ProjectPage() {
    return (
        // Tambahkan overflow-hidden agar dekorasi background tidak membuat scroll horizontal
        <div className="relative min-h-screen bg-background pb-20 overflow-hidden">
            
            {/* --- DEKORASI BACKGROUND (PENTING UNTUK EFEK KACA) --- */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-background">
                {/* Bola cahaya kiri atas */}
                <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
                {/* Bola cahaya kanan bawah */}
                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
                {/* Bola cahaya tengah */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
            </div>

            <Navbar />

            <main className="container relative z-10 mx-auto px-4 pt-32 lg:pt-40">
                <div className="mx-auto max-w-6xl">
                    
                    {/* Header Halaman */}
                    <div className="mb-12 md:mb-20 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                            <FolderGit2 className="size-4 mr-2" />
                            Portofolio
                        </Badge>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                            Koleksi <span className="text-primary">Proyek</span> Saya
                        </h1>
                        <p className="max-w-2xl text-lg text-muted-foreground">
                            Eksplorasi dan implementasi teknologi dalam memecahkan masalah. Dari pengembangan aplikasi mobile, website, hingga riset kecerdasan buatan.
                        </p>
                    </div>

                    {/* Grid Proyek */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card 
                                key={index} 
                                // CLASS GLASSMORPHISM DI SINI:
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95"
                                style={{ animationFillMode: "both", animationDelay: `${index * 150}ms` }}
                            >
                                {/* Efek pantulan cahaya mengkilap (Glossy reflection) saat di-hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <CardHeader className="relative z-10 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2.5 rounded-xl bg-white/20 dark:bg-black/20 shadow-inner backdrop-blur-md border border-white/10">
                                            {project.icon}
                                        </div>
                                        <Badge variant="secondary" className="bg-background/50 backdrop-blur-md text-[10px] border-none uppercase tracking-wider font-semibold">
                                            {project.role}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                
                                <CardContent className="relative z-10 flex-1 pb-4">
                                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-[10px] border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/10 backdrop-blur-sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="relative z-10 pt-4 border-t border-white/10 dark:border-white/5 bg-white/5 dark:bg-black/10 flex gap-3 backdrop-blur-md">
                                    <Button variant="outline" size="sm" className="w-full text-xs font-semibold bg-transparent border-white/20 hover:bg-white/10" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="size-3.5 mr-2" />
                                            Source
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="w-full text-xs font-semibold shadow-lg shadow-primary/20" asChild>
                                        <Link href={project.demo} target="_blank">
                                            <ExternalLink className="size-3.5 mr-2" />
                                            Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    )
}