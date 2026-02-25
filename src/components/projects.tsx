'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ShieldCheck, BarChart3, ShieldAlert, Cpu } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 'safe',
        title: 'S.A.F.E. – Scam Analysis & Fraud Elimination',
        tagline: 'AI-powered scam detection platform protecting users in real-time.',
        icon: <ShieldCheck className="text-red-500" />,
        description: 'A production-grade, multi-modal system that analyzes URLs, messages, and transaction patterns using specialized ML models to identify potential scams.',
        problem: 'Rising digital fraud and phishing attacks target millions daily, often through subtle psychological triggers that traditional filters miss.',
        solution: 'Engineered a 5-engine analysis architecture (RoBERTa, Isolation Forests, intelligence-based scoring) that detects fraud across multiple vectors.',
        metrics: [
            { label: 'Detection Accuracy', value: '94%+' },
            { label: 'Latency', value: '<250ms' },
            { label: 'Analysis Vectors', value: '5-Engine' },
        ],
        tech: ['Next.js', 'FastAPI', 'Python', 'Supabase', 'Render'],
        github: 'https://github.com/Not-Rambo/safe',
        live: 'https://safe-phi.vercel.app',
        image: '/projects/safe.webp', // Placeholder
    },
    {
        id: 'dsa',
        title: 'DSA Tracker Web App',
        tagline: 'Visualizing logic and consistency in problem solving.',
        icon: <BarChart3 className="text-primary" />,
        description: 'A comprehensive progress tracking tool for competitive programming and data structures, focusing on metrics and growth visualization.',
        problem: 'Maintaining consistency in DSA practice is difficult without clear visibility into progress and weak areas.',
        solution: 'Built a feature-rich dashboard with dynamic charts, categorization, and progress heatmaps to gamify the learning experience.',
        metrics: [
            { label: 'Problems Tracked', value: '500+' },
            { label: 'Visual Reports', value: 'Interactive' },
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        github: 'https://github.com/Not-Rambo/dsa-tracker',
        live: '#',
        image: '/projects/dsa.webp', // Placeholder
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering <span className="gradient-text">Case Studies.</span></h2>
                    <p className="text-foreground/60 max-w-xl text-lg">Detailed breakdowns of projects built for impact, scalability, and security.</p>
                </div>
                <motion.a
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Not-Rambo"
                    className="flex items-center gap-2 text-primary font-semibold group"
                >
                    View More on GitHub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
            </div>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Visuals / Media */}
                        <div className="flex-1 w-full relative">
                            <div className="aspect-video rounded-2xl bg-foreground/5 border border-white/10 overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                                    {project.id === 'safe' ? <ShieldAlert size={120} /> : <Cpu size={120} />}
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

                                {/* Metrics Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4">
                                    {project.metrics.map((m) => (
                                        <div key={m.label} className="p-3 rounded-xl glass dark:glass-dark backdrop-blur-xl flex-1 text-center">
                                            <div className="text-xl font-bold text-primary">{m.value}</div>
                                            <div className="text-[10px] uppercase font-bold text-foreground/40">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-foreground/5 border border-white/10">
                                    {project.icon}
                                </div>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40">Case Study</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                            <p className="text-xl text-foreground/70 mb-8 italic">&quot;{project.tagline}&quot;</p>

                            <div className="space-y-6 mb-10">
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase mb-2">The Problem</h4>
                                    <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-accent uppercase mb-2">Our Solution</h4>
                                    <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-foreground/5 border border-foreground/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6">
                                <motion.a
                                    whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold transition-colors"
                                >
                                    <Github size={20} /> Repository
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold transition-colors"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
