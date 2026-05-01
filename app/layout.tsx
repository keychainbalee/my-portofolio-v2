// app/layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Snowfall from 'react-snowfall'
import { SnowfallWrapper } from "@/components/SnowfallWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Deskripsi project yang menarik",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Tambahkan overflow-y-scroll di bawah ini */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-y-scroll`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <SnowfallWrapper />
          {/* Navbar akan muncul di semua halaman */}
          <Navbar />
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>

          {/* Anda bisa menambahkan Footer di sini nanti */}
        </ThemeProvider>
      </body>
    </html>
  )
}