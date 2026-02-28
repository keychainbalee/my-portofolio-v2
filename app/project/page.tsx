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
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <main className="container mx-auto px-4 pt-32 lg:pt-40">
                <div className="mx-auto max-w-6xl">
                    
                    {/* Bagian Header Halaman */}
                    <div className="mb-12 md:mb-20 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 text-sm">
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
                                className="group flex flex-col overflow-hidden border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in-95"
                                style={{ animationFillMode: "both", animationDelay: `${index * 150}ms` }}
                            >
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                                            {project.icon}
                                        </div>
                                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-semibold">
                                            {project.role}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                
                                <CardContent className="flex-1 pb-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-[10px] bg-background">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-4 border-t border-border/50 bg-muted/20 flex gap-3">
                                    <Button variant="outline" size="sm" className="w-full text-xs font-semibold" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="size-3.5 mr-2" />
                                            Source Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="w-full text-xs font-semibold" asChild>
                                        <Link href={project.demo} target="_blank">
                                            <ExternalLink className="size-3.5 mr-2" />
                                            Live Demo
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