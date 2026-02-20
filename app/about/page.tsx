'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Instagram, Linkedin, Mail, Code2, GraduationCap, PenTool, Terminal } from 'lucide-react'
import Image from 'next/image'

export default function AboutBento() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />
            
            <main className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-5 grid-rows-8 gap-5 h-[900px]">
                        
                        {/* 4: Hero Profile Section (col-span-5 row-span-3) */}
                        <Card className="col-span-5 row-span-3 overflow-hidden relative border-none bg-primary/5">
                            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8 h-full">
                                <div className="relative size-40 lg:size-48 shrink-0">
                                    <Image
                                        src="/assets/logo/Logo bale 2.png"
                                        alt="Muhammad Iqbal Saputra"
                                        fill
                                        className="object-cover rounded-2xl shadow-xl"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-center md:text-left">
                                    <Badge className="w-fit mb-4 mx-auto md:mx-0">Software Engineering Student</Badge>
                                    <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                                        Muhammad Iqbal Saputra
                                    </h1>
                                    <p className="mt-4 text-muted-foreground max-w-xl">
                                        Mahasiswa Universitas Harkat Negeri yang berfokus pada pengembangan aplikasi modern dengan Python, Dart, dan Flutter.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 6: Education (col-span-2 row-span-2) */}
                        <Card className="col-span-2 row-span-2 row-start-4 bg-card">
                            <CardContent className="p-6 flex flex-col h-full">
                                <GraduationCap className="size-6 text-primary mb-2" />
                                <h3 className="font-bold text-lg">Pendidikan</h3>
                                <div className="mt-2 space-y-1">
                                    <p className="text-sm font-semibold text-primary">Universitas Harkat Negeri</p>
                                    <p className="text-xs text-muted-foreground">Mataram | ID: 23090120</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 7: Tech Stack (col-span-3 row-span-2) */}
                        <Card className="col-span-3 row-span-2 col-start-3 row-start-4 bg-card">
                            <CardContent className="p-6">
                                <Code2 className="size-6 text-primary mb-2" />
                                <h3 className="font-bold text-lg">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {['Python', 'Dart', 'Flutter', 'Next.js', 'PostgreSQL', 'Machine Learning'].map((s) => (
                                        <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* 8-12: Social Media & Contacts (row-span-2) */}
                        <Card className="row-span-2 row-start-6 flex items-center justify-center hover:bg-muted/50 transition-colors">
                            <a href="https://github.com" target="_blank" className="flex flex-col items-center gap-2">
                                <Github className="size-6" />
                                <span className="text-[10px] font-medium uppercase">Github</span>
                            </a>
                        </Card>

                        <Card className="row-span-2 row-start-6 flex items-center justify-center hover:bg-muted/50 transition-colors text-pink-500">
                             <a href="https://instagram.com" target="_blank" className="flex flex-col items-center gap-2">
                                <Instagram className="size-6" />
                                <span className="text-[10px] font-medium uppercase text-foreground">Insta</span>
                            </a>
                        </Card>

                        <Card className="row-span-2 row-start-6 flex items-center justify-center hover:bg-muted/50 transition-colors text-blue-600">
                             <a href="https://linkedin.com" target="_blank" className="flex flex-col items-center gap-2">
                                <Linkedin className="size-6" />
                                <span className="text-[10px] font-medium uppercase text-foreground">Linkd</span>
                            </a>
                        </Card>

                        <Card className="row-span-2 row-start-6 flex items-center justify-center hover:bg-muted/50 transition-colors text-red-500">
                             <a href="mailto:email@example.com" className="flex flex-col items-center gap-2">
                                <Mail className="size-6" />
                                <span className="text-[10px] font-medium uppercase text-foreground">Mail</span>
                            </a>
                        </Card>

                        <Card className="row-span-2 row-start-6 flex items-center justify-center hover:bg-muted/50 transition-colors">
                             <div className="flex flex-col items-center gap-2">
                                <Terminal className="size-6 text-primary" />
                                <span className="text-[10px] font-medium uppercase">CV</span>
                            </div>
                        </Card>

                        {/* 13: Organization Footer (col-span-5 row-start-8) */}
                        <Card className="col-span-5 row-start-8 flex items-center justify-center bg-muted/30">
                            <CardContent className="p-0 flex items-center gap-4 text-sm font-medium text-muted-foreground">
                                <PenTool className="size-4" />
                                <span>Aktif di UKM Pers Semata & Teater Banyu Biru</span>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    )
}