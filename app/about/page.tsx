'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Github, Instagram, Linkedin, Mail,
    Code2, GraduationCap, Eye, Map,
    History, Users, Volleyball
} from 'lucide-react'
import Image from 'next/image'

export default function AboutBento() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />

            <main className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-6 grid-rows-9 gap-5 h-[1100px]">

                        {/* 4: Main Profile (col-span-6 row-span-3) */}
                        <Card className="col-span-6 row-span-3 overflow-hidden border-none bg-gradient-to-br from-primary/10 via-transparent to-muted">
                            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10 h-full">
                                <div className="relative size-48 lg:size-56 shrink-0 shadow-2xl rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/assets/logo/Logo bale 2.png"
                                        alt="Muhammad Iqbal Saputra"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-center md:text-left">
                                    <Badge className="w-fit mb-4 mx-auto md:mx-0 bg-primary/20 text-primary hover:bg-primary/30 border-none">
                                        Mahasiswa Teknik Informatika
                                    </Badge>
                                    <h1 className="text-4xl lg:text-6xl font-black tracking-tighter">
                                        Muhammad Iqbal Saputra
                                    </h1>
                                    <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
                                        Mahasiswa Universitas Harkat Negeri yang berfokus pada **Python, Dart, dan Flutter**.
                                        Senang menggabungkan teknologi dengan kreativitas lewat proyek digital.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 6: Education (col-span-2 row-span-2) */}
                        <Card className="col-span-2 row-span-2 row-start-4 flex flex-col justify-center p-6">
                            <GraduationCap className="size-8 text-primary mb-4" />
                            <h3 className="font-bold text-xl tracking-tight">Pendidikan</h3>
                            <div className="mt-3">
                                <p className="font-bold text-primary">Universitas Harkat Negeri</p>
                                <p className="text-sm text-muted-foreground mt-1">D4 Teknik Informatika</p>
                                {/* <Badge variant="secondary" className="mt-2 text-[10px]">NIM: 23090120</Badge> */}
                            </div>
                        </Card>

                        {/* 7: Tech Stack (col-span-4 row-span-2) */}
                        <Card className="col-span-4 row-span-2 col-start-3 row-start-4 p-6">
                            <Code2 className="size-8 text-primary mb-4" />
                            <h3 className="font-bold text-xl tracking-tight">Keahlian Teknis</h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {['Python', 'Dart', 'Flutter', 'Next.js', 'Machine Learning', 'Sentiment Analysis', 'PostgreSQL'].map((s) => (
                                    <Badge key={s} variant="outline" className="px-4 py-1 text-xs border-primary/20">{s}</Badge>
                                ))}
                            </div>
                        </Card>

                        {/* 8: Project 1 - JagaMata (col-span-2 row-span-3) */}
                        <Card className="col-span-2 row-span-3 row-start-6 group overflow-hidden border-primary/10">
                            <CardContent className="p-0 flex flex-col h-full">
                                <div className="p-6">
                                    <Eye className="size-6 text-primary mb-3" />
                                    <h4 className="font-bold text-lg">JagaMata</h4>
                                    <p className="text-sm text-muted-foreground mt-2">Deteksi penyakit mata & terapi akupresur.</p>
                                </div>
                                <div className="mt-auto bg-muted/50 p-4 border-t group-hover:bg-primary/5 transition-colors">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Capstone Project</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 14: Project 2 - Hilirisasi Rempah (col-span-2 row-span-3) */}
                        <Card className="col-span-2 row-span-3 col-start-3 row-start-6 group overflow-hidden">
                            <CardContent className="p-0 flex flex-col h-full">
                                <div className="p-6">
                                    <Map className="size-6 text-orange-500 mb-3" />
                                    <h4 className="font-bold text-lg">Rempah Tour</h4>
                                    <p className="text-sm text-muted-foreground mt-2">Web design & frontend untuk Hilirisasi Rempah Tour.</p>
                                </div>
                                <div className="mt-auto bg-muted/50 p-4 border-t group-hover:bg-orange-50 transition-colors">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">Frontend & 360 Editor</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 15: Project 3 */}
                        <Card className="col-span-2 row-span-3 col-start-5 row-start-6 group overflow-hidden">
                            <CardContent className="p-0 flex flex-col h-full">
                                <div className="p-6">
                                    <Volleyball className="size-6 text-blue-500 mb-3" />
                                    <h4 className="font-bold text-lg">Sport Seventeen</h4>
                                    <p className="text-sm text-muted-foreground mt-2">Website Ecommerce jual beli alat olahraga.</p>
                                </div>
                                <div className="mt-auto bg-muted/50 p-4 border-t group-hover:bg-blue-50 transition-colors">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600"></span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 16: Organization (col-span-6 row-start-9) */}
                        <Card className="col-span-6 row-start-9 bg-primary text-primary-foreground flex items-center px-8 border-none">
                            <div className="flex items-center gap-6 w-full overflow-hidden whitespace-nowrap">
                                <Users className="size-5 shrink-0" />
                                <div className="flex gap-10 animate-marquee font-medium">
                                    <span>UKM Pers Semata</span>
                                    <span>Forum Riset Teknologi Informasi (FORTI)</span>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    )
}