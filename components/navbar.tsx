'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react' // Tambah ikon Sun & Moon
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useTheme } from 'next-themes' // Import hook tema

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '#project' },
    { name: 'Article', href: '#article' },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            // Mengubah state menjadi true saat di-scroll lebih dari 20px
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="fixed z-50 w-full px-4 pt-4 transition-all duration-300">
            <div
                className={cn(
                    "mx-auto flex items-center justify-between px-6 py-3 transition-all duration-500",
                    // LOGIKA BLUR DI SINI:
                    isScrolled
                        ? "max-w-4xl rounded-full border border-border/50 bg-background/60 shadow-md backdrop-blur-md dark:bg-background/40"
                        : "max-w-6xl rounded-none border-transparent bg-transparent"
                )}
            >
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Image
                        src="/assets/logo/Logo%20bale%202.png"
                        alt="Logo Brand"
                        width={32}
                        height={32}
                        priority
                        className="object-contain"
                    />
                    <span className="hidden sm:inline-block">Iqbal</span>
                </Link>

                {/* Desktop Menu */}
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

                {/* Right Side: Theme Toggle & Mobile Trigger */}
                <div className="flex items-center gap-2">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="rounded-full p-2.5 transition-colors hover:bg-accent hover:text-accent-foreground"
                        aria-label="Toggle Theme"
                    >
                        {mounted && (theme === 'dark' ? (
                            <Sun className="size-5 transition-all" />
                        ) : (
                            <Moon className="size-5 transition-all" />
                        ))}
                    </button>

                    {/* Mobile Trigger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 block p-2 lg:hidden"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 z-40 flex h-screen w-full flex-col bg-background p-8 transition-transform duration-300 lg:hidden",
                        isOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <ul className="mt-16 space-y-8 text-2xl font-semibold">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-primary"
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