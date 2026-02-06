import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

const BookCallCTA = () => {
    return (
        <section className="relative py-28 md:py-36 bg-[#000000] border-t border-white/5 overflow-hidden">
            {/* Subtle Grid Background - Very dark */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

            {/* Minimal Ambient Glow - Pure Blue */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#0A66C2] opacity-[0.05] blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side: Content */}
                    <div className="max-w-xl text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6"
                        >
                            <ShieldCheck className="w-3 h-3 text-blue-500" />
                            <span className="text-[10px] font-bold text-blue-500/80 uppercase tracking-widest">
                                Risk-Free Strategy Audit
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]"
                        >
                            Ready to <span className="text-[#0A66C2]">Dominate</span> <br className="hidden md:block" /> Your LinkedIn?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-sm md:text-base font-medium mt-6 max-w-md"
                        >
                            Stop guessing and start scaling. Let's map out a content system that builds authority and drives revenue.
                        </motion.p>
                    </div>

                    {/* Right Side: CTA Action */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ai-mode-cta group shadow-[0_0_30px_rgba(10,102,194,0.15)]"
                                style={{
                                    height: '3.2rem',
                                    padding: '0 2rem 0 1.5rem',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span className="gradient-layer">
                                    <span className="rotating-gradient" aria-hidden />
                                </span>
                                <span className="inner-bg" aria-hidden />
                                <span className="button-content">
                                    <span className="label">Claim Your Free Strategy Call</span>
                                    <span className="icon">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </span>
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center md:items-end gap-1"
                        >
                            <p className="text-[10px] text-gray-400 flex items-center gap-2 font-bold uppercase tracking-widest">
                                <Phone className="w-3 h-3 text-blue-500" />
                                Only 15 Minutes — Pure Value
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCallCTA;