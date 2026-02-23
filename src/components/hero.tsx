'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 inline-block border border-primary/20"
                >
                    Available for Internships & Full-Time Roles
                </motion.span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Hi, I&apos;m <span className="gradient-text">Shreyash</span>
                    <br />
                    Engineering a <span className="italic">Safer</span>, Scalable Web.
                </h1>

                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Final-year CSE student & Full-Stack Developer focused on building high-impact platforms like <span className="text-primary font-medium">S.A.F.E.</span> — using AI to eliminate fraud and secure the digital experience.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/25"
                    >
                        View Projects <ChevronRight size={20} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 font-semibold flex items-center gap-2 transition-colors"
                    >
                        Download Resume <Download size={20} />
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
            </motion.div>
        </section>
    );
}
