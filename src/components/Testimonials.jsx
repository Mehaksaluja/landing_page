import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, BarChart3, ImageIcon } from 'lucide-react';

// Only screenshots — add paths in public/testimonials/
const testimonials = [
    { screenshots: [] }, // e.g. ["/testimonials/client1-1.png", "/testimonials/client1-2.png"]
    { screenshots: [] }, // e.g. ["/testimonials/client2-1.png"]
    { screenshots: [] }, // e.g. ["/testimonials/client3-1.png", "/testimonials/client3-2.png", "/testimonials/client3-3.png"]
];

const resultsStats = [
    { label: "Total Reach", value: "25M+", icon: TrendingUp },
    { label: "Leads Generated", value: "1.2k+", icon: Users },
    { label: "Successful Rounds", value: "15+", icon: Briefcase },
    { label: "Client ROI", value: "12x", icon: BarChart3 },
];

const Testimonials = () => {
    return (
        <>
            {/* Results Section */}
            <section id="results" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs">By the numbers</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
                            Results that <span className="text-white/80">speak</span>
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto mt-4 text-base">
                            Real impact across our client base — reach, leads, and ROI.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {resultsStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 hover:bg-white/[0.05] transition-all duration-300 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">{stat.value}</div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials — screenshots only, no text or names */}
            <section id="testimonials" className="py-20 md:py-28 bg-[#080808] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 tracking-tight">
                            Real results from <span className="italic font-light text-white/90">real founders</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg">
                            Proof from the people dominating their niches.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {testimonials.map((t, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {t.screenshots && t.screenshots.length > 0 ? (
                                    <div className={`grid gap-3 ${t.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                        {t.screenshots.map((src, i) => (
                                            <motion.a
                                                key={i}
                                                href={src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                                className="relative block overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] shadow-xl ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#080808]"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Testimonial screenshot ${index + 1}-${i + 1}`}
                                                    className="w-full aspect-[4/3] object-cover object-top"
                                                />
                                                <span className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" aria-hidden />
                                            </motion.a>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-xl md:rounded-2xl overflow-hidden border border-dashed border-white/10 bg-white/[0.02]">
                                        <div className="w-full aspect-[4/3] flex flex-col items-center justify-center text-gray-500 bg-gradient-to-b from-white/[0.04] to-transparent">
                                            <ImageIcon className="w-12 h-12 text-white/20 mb-2" />
                                            <span className="text-sm text-white/40">Add screenshots</span>
                                            <span className="text-xs text-gray-600 mt-1 px-4 text-center">
                                                <code className="text-gray-500">screenshots: ["/testimonials/1.png", ...]</code>
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
