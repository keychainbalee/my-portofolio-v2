'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, FileText, ShieldAlert, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Import CvViewer dynamically to disable SSR rendering
const CvViewer = dynamic(() => import('@/components/CvViewer'), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center p-12 gap-3 text-muted-foreground min-h-[400px]">
            <Loader2 className="animate-spin rounded-full size-8 text-primary" />
            <p className="text-sm font-medium">Mempersiapkan penampil PDF...</p>
        </div>
    )
})

// Ubah variabel ini di kode untuk mengaktifkan/menonaktifkan penampil CV
const isActive = true

export default function CvPage() {
    return (
        <div className="min-h-screen bg-transparent pb-20">
            {/* Dekorasi Cahaya */}
            <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-blue-500/20 blur-[120px]" />
            </div>

            <main className="container mx-auto px-4 pt-24 md:pt-32">
                <div className="mx-auto max-w-4xl">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Link href="/about" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <ArrowLeft className="size-4 mr-1" /> Kembali ke About
                                </Link>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center gap-3">
                                <FileText className="size-8 md:size-12 text-primary" /> Curriculum Vitae
                            </h1>
                            <p className="text-muted-foreground mt-2">
                                Muhammad Iqbal Saputra — Mahasiswa Teknik Informatika & AI/Web Developer
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    {isActive ? (
                        <div className="space-y-6">
                            <div className="flex justify-end gap-3 mb-2">
                            </div>
                            <CvViewer pdfUrl="/assets/cv/CV_Muhammad_Iqbal_Saputra.pdf" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl border border-dashed border-border/80 bg-muted/10 backdrop-blur-xs min-h-[400px] animate-in fade-in duration-500">
                            <div className="p-4 rounded-full bg-amber-500/10 text-amber-500 mb-6 animate-pulse">
                                <ShieldAlert className="size-10" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-2">CV Sedang Update / Tidak Ada</h3>
                            <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
                                Mohon maaf, saat ini berkas CV sedang dalam proses pembaruan atau tidak tersedia untuk sementara waktu. Silakan periksa kembali nanti.
                            </p>
                        </div>
                    )}

                </div>
            </main>
        </div>
    )
}
