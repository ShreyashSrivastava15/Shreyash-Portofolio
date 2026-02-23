'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <nav className="fixed top-0 w-full z-50 glass dark:glass-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-2xl gradient-text">
                        Not-Rambo
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {NavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-primary"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass dark:glass-dark border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {NavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
