'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass dark:glass-dark relative">
                        <img
                            src="/profile.png"
                            alt="Shreyash Portfolio Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Connecting Code to <span className="gradient-text">Real-World Impact.</span>
                    </h2>

                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                        <p>
                            Hey, I&apos;m Shreyash. While many see code as just syntax, I see it as a tool for problem-solving and scalability. As a final-year CSE student, I&apos;ve dedicated myself to understanding not just *how* to build, but *how* to build securely and efficiently.
                        </p>
                        <p>
                            My journey is fueled by a curiosity for <span className="text-primary font-medium">Scalable Systems</span> and <span className="text-accent font-medium">AI Integration</span>. Whether it&apos;s architecting fraud detection systems or optimizing data structures, I thrive in environments that challenge my adaptability and consistency.
                        </p>
                        <p>
                            Beyond the terminal, I&apos;m active in the tech community through <span className="font-semibold">IEEE</span>, where I lead initiatives to bridge the gap between academic theory and industry practice. I believe engineer doesn&apos;t just mean writing code; it means taking ownership of the entire lifecycle of a product.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div>
                            <h4 className="text-2xl font-bold text-primary">4+</h4>
                            <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Languages</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-accent">5+</h4>
                            <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Core CSE Domains</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
