// app/layout.tsx
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Snowfall from 'react-snowfall'
import { SnowfallWrapper } from "@/components/SnowfallWrapper"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Iqbal's | Portofolio",
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
        className={`${jakarta.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground overflow-y-scroll`}
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