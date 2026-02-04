import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
            {/* Top Border with Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Ready to build <br /> your <span className="text-blue-500 italic">Empire?</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md leading-relaxed mb-12">
                            Stop shouting into the void. Let's build a personal brand that commands respect and drives revenue.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:hello@insyble.tech" className="flex items-center gap-4 text-white hover:text-blue-500 transition-colors group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-medium">hello@insyble.tech</span>
                            </a>
                            <div className="flex items-center gap-4 text-white group">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-medium">Available for Q1 2024 Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-[3rem] bg-blue-600 overflow-hidden text-center flex flex-col items-center justify-center"
                    >
                        {/* Interactive Background */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 blur-[80px] rounded-full"
                        />

                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10 uppercase italic">Limited Spots Left</h3>
                        <p className="text-blue-100 mb-10 relative z-10 font-bold tracking-wide uppercase text-sm">We only take 3 new executive clients per month to ensure quality.</p>

                        <button className="relative z-10 w-full bg-white text-blue-600 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            BOOK STRATEGY CALL
                        </button>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        Insyble<span className="text-blue-500">Tech</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>

                    <p className="text-gray-600 text-sm">
                        © 2024 Insyble Tech. All rights reserved. Built for Industry Titans.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
