"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Map,
  ShoppingBag,
  Github,
  ExternalLink,
  Smartphone,
  PersonStandingIcon,
  ScanEye,
  GraduationCapIcon,
  Footprints,
  ChartColumn,
  ScanFace,
  Leaf,
  Gamepad2,
  MessageCircle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    title: "My Portofolio Web",
    description: "Aplikasi Portofolio Pribadi",
    role: "Fullstack Dev",
    icon: <PersonStandingIcon className="size-8 text-primary mb-4" />,
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    color: "text-primary",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/my-portofolio-v2",
    demo: null,
    image: null,
  },
  {
    title: "JagaMata App",
    description:
      "Aplikasi deteksi potensi penyakit mata & rekomendasi terapi akupresur berbasis AI.",
    role: "AI Engineer",
    icon: <Eye className="size-8 text-blue-700 mb-4" />,
    tech: ["Python", "Flutter"],
    color: "text-blue-700",
    colSpan: "md:col-span-2",
    github: "https://github.com/mataminus-capstone/final_layout_jagamata",
    demo: null,
    image: "/assets/project/Jagamata_Product.webp",
  },
  {
    title: "Quizzin App",
    description:
      "Platform Pembelajaran Latihan Soal Adaptif dengan Penilaian Esai Otomatis",
    role: "Mobile Dev & AI Engineer",
    icon: <GraduationCapIcon className="size-8 text-blue-500 mb-4" />,
    tech: ["Flutter", "Python", "TensorFlow"],
    color: "text-blue-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/quizzin_mobile",
    demo: "https://quizzin.web.id/",
    image: null,
  },
  {
    title: "Fareky AI",
    description:
      "chatbot AI berbasis LLM (Large Language Model) untuk membantu menjawab pertanyaan",
    role: "Fullstack Dev & AI Engineer",
    icon: <MessageCircle className="size-8 text-purple-500 mb-4" />,
    tech: ["Next.js", "TypeScript"],
    color: "text-purple-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/fareky_ai",
    demo: "https://fareky-ai.vercel.app/",
    image: null,
  },
  {
    title: "Localize",
    description: "Platform penjualan sepatu lokal berbasis mobile.",
    role: "Mobile Dev & Backend Dev",
    icon: <Footprints className="size-8 text-yellow-500 mb-4" />,
    tech: ["Flutter", "Express.js", "Drizzle ORM"],
    color: "text-yellow-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/localize_app",
    demo: null,
    image: null,
  },
  {
    title: "Rempah Tour",
    description:
      "Web design & frontend untuk Hilirisasi Rempah Virtual Tour 360 derajat.",
    role: "Frontend Dev",
    icon: <Map className="size-8 text-orange-500 mb-4" />,
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    color: "text-orange-500",
    colSpan: "md:col-span-2",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "LogIntern",
    description: "Website pencatatan kegiatan magang",
    role: "Fullstack Developer",
    icon: <Map className="size-8 text-shadow-amber-800 mb-4" />,
    tech: ["Nextjs", "Turso Sqlite", "Tailwind CSS"],
    color: "text-shadow-amber-800",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/logintern_web",
    demo: "https://logintern.vercel.app/",
    image: null,
  },
  {
    title: "Sport Seventeen",
    description:
      "Website E-commerce memfasilitasi transaksi jual beli alat olahraga.",
    role: "Frontend Dev",
    icon: <ShoppingBag className="size-8 text-rose-500 mb-4" />,
    tech: ["Laravel", "Tailwind CSS"],
    color: "text-rose-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/sport-ecommerce",
    demo: null,
    image: null,
  },
  {
    title: "Ini Gadget",
    description:
      "Website E-commerce komprehensif yang memfasilitasi transaksi jual beli Gadget.",
    role: "Fullstack Dev & Unit Tester",
    icon: <Smartphone className="size-8 text-blue-500 mb-4" />,
    tech: ["Laravel", "Tailwind CSS"],
    color: "text-blue-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/inigadget-app",
    demo: null,
    image: null,
  },
  {
    title: "Model Pendeteksi 5 Penyakit Mata",
    description:
      "Model Deep Learning untuk mendeteksi 5 jenis penyakit mata menggunakan berbagai sumber dataset.",
    role: "AI Engineer",
    icon: <ScanEye className="size-8 text-red-600 mb-4" />,
    tech: ["Python", "TensorFlow", "Keras"],
    color: "text-red-600",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/test-and-train-v10",
    demo: null,
    image: null,
  },
  {
    title: "Model Pendeteksi Mata Lelah",
    description:
      "Model Deep Learning untuk mendeteksi mata lelah menggunakan dataset Kaggle.",
    role: "AI Engineer",
    icon: <ScanFace className="size-8 text-pink-600 mb-4" />,
    tech: ["Python", "TensorFlow", "Keras"],
    color: "text-pink-600",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/test-and-train-drowsiness-v1",
    demo: null,
    image: null,
  },
  {
    title: "Model Pendeteksi Sayuran",
    description:
      "Model Deep Learning untuk mendeteksi Nama Sayuran menggunakan dataset Kaggle.",
    role: "AI Engineer",
    icon: <Leaf className="size-8 text-green-500 mb-4" />,
    tech: ["Python", "TensorFlow", "Keras"],
    color: "text-green-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/klasifikasi-sayuran-cnn",
    demo: null,
    image: null,
  },
  {
    title: "Analisis Pengembangan UMKM",
    description:
      "Mengembangkan model Logistic Regression untuk mengidentifikasi variabel yang paling berpengaruh terhadap hasil prediksi. Dilengkapi visualisasi data intuitif untuk mempermudah interpretasi koefisien dan penarikan kesimpulan.",
    role: "Data Analyst",
    icon: <ChartColumn className="size-8 text-orange-500 mb-4" />,
    tech: ["Python", "streamlit", "Matplotlib", "Seaborn", "Scikit-learn"],
    color: "text-orange-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/streamlit_umkm_logistic_regression",
    demo: "https://growthumkm.streamlit.app/",
    image: null,
  },
  {
    title: "Olivia's Nightmares Game",
    description:
      "Game FPS dengan nuansa horor dan misteri, yang dikembangkan menggunakan Unity Engine",
    role: "Game Developer",
    icon: <Gamepad2 className="size-8 text-purple-500 mb-4" />,
    tech: ["Unity", "C#"],
    color: "text-purple-500",
    colSpan: "md:col-span-2",
    github: "https://github.com/keychainbalee/olivias_nightmares_games",
    demo: "https://olivenights.vercel.app/",
    image: null,
  },
];

type Project = (typeof projectsData)[number];

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        {projectsData.map((project, index) => (
          <Card
            key={project.title}
            onClick={() => setSelected(project)}
            className={cn(
              project.colSpan,
              "h-[280px] group relative overflow-hidden rounded-xl border border-border/50 bg-card hover:border-border transition-colors duration-300 shadow-sm hover:shadow-md animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
            )}
            style={{
              animationFillMode: "both",
              animationDelay: `${index * 150}ms`,
            }}
          >
            <CardContent className="p-0 flex flex-col h-full">
              <div className="p-6 flex-1">
                {project.icon}
                <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                <p className="text-sm text-foreground/80 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-[10px] font-medium"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-auto p-4 border-t border-border/50 flex justify-between items-center">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {project.role}
                </span>

                <div className="flex gap-3">
                  {project.github && (
                    <Github className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
                  )}
                  {project.demo && (
                    <ExternalLink className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal Detail Proyek */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-border/50 bg-muted/30">
              <div className="flex items-center gap-3">
                {selected.icon}
                <h3 className="text-xl font-semibold tracking-tight">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Tutup"
              >
                <X className="size-5" />
              </button>
            </div>

            {selected.image && (
              <div className="p-6 pb-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(min-width: 640px) 464px, 90vw"
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            <div className="p-6 pt-2 space-y-5">
              <p
                className={cn(
                  "text-xs font-bold uppercase tracking-widest",
                  selected.color
                )}
              >
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
                  {selected.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-background/50 backdrop-blur-sm"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {selected.github && (
                  <Button asChild className="flex-1 gap-2 rounded-full">
                    <Link
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      Lihat Repository
                    </Link>
                  </Button>
                )}
                {selected.demo && (
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 gap-2 rounded-full"
                  >
                    <Link
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
    </>
  );
}
