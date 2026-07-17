'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Loader2 } from 'lucide-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface CvViewerProps {
    pdfUrl: string
}

// Efek transisi lembaran kertas 3D (page-flip effect)
const pageVariants: Variants = {
    initial: (direction: number) => ({
        rotateY: direction > 0 ? 80 : -80,
        opacity: 0,
        scale: 0.9,
        x: direction > 0 ? 100 : -100,
        transformOrigin: direction > 0 ? "right center" : "left center",
    }),
    animate: {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        x: 0,
        transformOrigin: "center center",
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number], // easeOutQuint untuk transisi super halus
        }
    },
    exit: (direction: number) => ({
        rotateY: direction > 0 ? -80 : 80,
        opacity: 0,
        scale: 0.9,
        x: direction > 0 ? -100 : 100,
        transformOrigin: direction > 0 ? "left center" : "right center",
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
        }
    })
}

export default function CvViewer({ pdfUrl }: CvViewerProps) {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [direction, setDirection] = useState<number>(0) // 1 = next, -1 = prev
    const [scale, setScale] = useState<number>(1.0)
    const [rotation, setRotation] = useState<number>(0)

    // Deteksi ukuran container agar PDF pas (100% width)
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
    const [containerWidth, setContainerWidth] = useState<number>(750)

    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
        const [entry] = entries
        if (entry) {
            setContainerWidth(entry.contentRect.width)
        }
    }, [])

    useEffect(() => {
        if (!containerRef) return
        const observer = new ResizeObserver(onResize)
        observer.observe(containerRef)
        return () => {
            observer.disconnect()
        }
    }, [containerRef, onResize])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setPageNumber(1)
        setDirection(0)
    }

    const goToPrevPage = () => {
        if (pageNumber > 1) {
            setDirection(-1)
            setPageNumber(prev => prev - 1)
        }
    }

    const goToNextPage = () => {
        if (numPages && pageNumber < numPages) {
            setDirection(1)
            setPageNumber(prev => prev + 1)
        }
    }

    // Hitung lebar PDF yang ideal dengan padding container
    const padding = 32
    const pdfWidth = Math.min(Math.max(containerWidth - padding, 280), 800)

    return (
        <div className="flex flex-col items-center w-full gap-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-background/60 border border-border/50 backdrop-blur-md shadow-lg w-full max-w-2xl">
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                        className="rounded-full size-8"
                    >
                        <ChevronLeft className="size-4" />
                    </Button>
                    <span className="text-xs font-semibold px-2 min-w-[100px] text-center select-none">
                        Halaman {pageNumber} dari {numPages || '?'}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToNextPage}
                        disabled={numPages === null || pageNumber >= numPages}
                        className="rounded-full size-8"
                    >
                        <ChevronRight className="size-4" />
                    </Button>
                </div>
                
                <div className="h-6 w-px bg-border/50 mx-2 hidden sm:block" />

                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setScale(prev => Math.max(prev - 0.2, 0.6))}
                        disabled={scale <= 0.6}
                        className="rounded-full size-8"
                    >
                        <ZoomOut className="size-4" />
                    </Button>
                    <span className="text-xs font-semibold w-12 text-center select-none">
                        {Math.round(scale * 100)}%
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setScale(prev => Math.min(prev + 0.2, 2.0))}
                        disabled={scale >= 2.0}
                        className="rounded-full size-8"
                    >
                        <ZoomIn className="size-4" />
                    </Button>
                </div>

                <div className="h-6 w-px bg-border/50 mx-2 hidden sm:block" />

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setRotation(prev => (prev + 90) % 360)}
                    className="rounded-full size-8"
                    title="Putar PDF"
                >
                    <RotateCw className="size-4" />
                </Button>
            </div>

            {/* Document Container */}
            <div 
                ref={setContainerRef}
                className="w-full flex justify-center p-4 rounded-3xl bg-muted/20 border border-border/50 relative shadow-inner overflow-hidden min-h-[450px]"
                style={{ perspective: 1500 }} // Memberi kedalaman 3D untuk efek lembaran kertas
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 gap-3 text-muted-foreground bg-muted/5 backdrop-blur-xs">
                            <Loader2 className="animate-spin rounded-full size-8 text-primary" />
                            <p className="text-sm font-medium">Memuat PDF...</p>
                        </div>
                    }
                    error={
                        <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-destructive font-medium">
                            Gagal memuat dokumen PDF. Pastikan file tersedia.
                        </div>
                    }
                >
                    <div className="relative w-full flex justify-center items-center overflow-visible">
                        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                            <motion.div
                                key={pageNumber}
                                custom={direction}
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full flex justify-center"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <Page 
                                    pageNumber={pageNumber} 
                                    width={pdfWidth}
                                    scale={scale} 
                                    rotate={rotation}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                    className="shadow-2xl rounded-xl overflow-hidden border border-border transition-all duration-300 bg-background"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Document>
            </div>
        </div>
    )
}
