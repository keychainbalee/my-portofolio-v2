import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function ProjectBento() {
  return (
    <div className="min-h-screen bg-transparent pb-20 overflow-hidden">
      <main className="container mx-auto px-4 pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Koleksi <span className="text-primary">Proyek</span> Saya
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eksplorasi dari teknologi Web, Mobile, hingga Machine Learning.
            </p>
          </div>

          <ProjectGrid />

          {/* Tombol Navigasi Bawah */}
          <div className="mt-10 bottom-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
            <Button
              variant="secondary"
              className="rounded-full shadow-xl gap-2 hover:-translate-x-1 transition-transform pointer-events-auto"
              asChild
            >
              <Link href="/about">
                <ArrowLeft className="size-4" />
                About
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
