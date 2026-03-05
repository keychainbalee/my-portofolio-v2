'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// Daftar menu navigasi
const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [enableTransition, setEnableTransition] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        // 1. Cek posisi scroll instan saat pertama kali dimuat
        if (window.scrollY > 20) {
            setIsScrolled(true)
        }

        // 2. Tandai komponen sudah dimuat di sisi client (mencegah error Hydration tema)
        setMounted(true)

        // 3. Aktifkan transisi animasi setelah render pertama agar Navbar tidak "loncat"
        const timer = setTimeout(() => {
            setEnableTransition(true)
        }, 50)

        // 4. Deteksi scroll untuk efek glassmorphism
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Bersihkan event listener saat komponen dilepas
        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timer)
        }
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
            <div
                className={cn(
                    // 'relative' penting agar menu slide down mobile menempel di bawah kontainer ini
                    "relative mx-auto flex items-center justify-between px-6 py-3",
                    // Transisi bentuk aktif setelah loading
                    enableTransition ? "transition-all duration-500" : "",
                    // Perubahan gaya saat scroll (bentuk pil vs transparan)
                    isScrolled
                        ? "max-w-4xl rounded-full border border-border/50 bg-background/60 shadow-md backdrop-blur-md dark:bg-background/40"
                        : "max-w-6xl rounded-none border-transparent bg-transparent"
                )}
            >
                {/* --- KIRI: LOGO --- */}
                <Link href="/" className="flex items-center gap-2 font-bold z-50">
                    <Image
                        src="/assets/logo/iqballogo.png" // Sesuaikan dengan path logo Anda
                        alt="Logo Iqbal"
                        width={32}
                        height={32}
                        priority
                        className="object-contain"
                    />
                    <span className="hidden sm:inline-block tracking-tight text-lg">Iqbal</span>
                </Link>

                {/* --- TENGAH: DESKTOP MENU --- */}
                <ul className="hidden gap-8 text-sm font-medium lg:flex">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* --- KANAN: THEME TOGGLE & MOBILE BURGER --- */}
                <div className="flex items-center gap-2 z-50">

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-accent hover:text-accent-foreground size-10"
                        aria-label="Toggle Theme"
                    >
                        {/* Placeholder ukuran agar tidak bergeser saat loading */}
                        {!mounted ? (
                            <div className="size-5" />
                        ) : theme === 'dark' ? (
                            <Sun className="size-5 transition-transform duration-300 hover:rotate-90" />
                        ) : (
                            <Moon className="size-5 transition-transform duration-300 hover:-rotate-90" />
                        )}
                    </button>

                    {/* Mobile Trigger (Burger Animasi Morph) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative flex items-center justify-center p-2 lg:hidden size-10 overflow-hidden"
                        aria-label="Toggle Menu"
                    >
                        <Menu
                            className={cn(
                                "absolute size-6 transition-all duration-300 ease-in-out",
                                isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                            )}
                        />
                        <X
                            className={cn(
                                "absolute size-6 transition-all duration-300 ease-in-out",
                                isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                            )}
                        />
                    </button>
                </div>

                {/* --- BAWAH: MOBILE MENU SLIDE DOWN --- */}
                <div
                    className={cn(
                        "absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-3xl bg-background/95 backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out lg:hidden origin-top",
                        isOpen
                            ? "max-h-96 opacity-100 py-6 border border-border/50 scale-y-100"
                            : "max-h-0 opacity-0 py-0 border-transparent scale-y-95 pointer-events-none"
                    )}
                >
                    <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                                    className="hover:text-primary transition-colors block px-4 py-2"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}