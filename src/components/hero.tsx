'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center text-left">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
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
                        Hi, I&apos;m <span className="gradient-text">Shreyash.</span>
                        <br />
                        Engineering a <span className="italic">Safer</span>, Scalable Web.
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl">
                        Final-year CSE student & Full-Stack Developer focused on building high-impact platforms like <span className="text-primary font-medium">S.A.F.E.</span> — using AI to eliminate fraud and secure the digital experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
                        >
                            View Projects <ChevronRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 font-semibold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                        >
                            Download Resume <Download size={20} />
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative hidden lg:block"
                >
                    <div className="aspect-[4/5] max-w-[450px] mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 glass dark:glass-dark relative shadow-2xl">
                        <img
                            src="/profile.png"
                            alt="Shreyash - Software Engineer"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-[100px] -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 blur-[100px] -z-10" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-1 h-12 bg-linear-to-b from-primary to-transparent rounded-full" />
            </motion.div>
        </section>
    );
}
