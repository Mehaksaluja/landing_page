import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, TrendingUp, Users, Briefcase, BarChart3, ImageIcon } from 'lucide-react';

// screenshots: array of paths — add multiple per client. Put images in public/testimonials/
const testimonials = [
    {
        name: "Alex Rivera",
        role: "CEO at TechFlow SaaS",
        content: "Insyble Tech completely transformed my LinkedIn presence. In just 3 months, I went from 500 followers to 15k+, and we've closed $50k in inbound leads directly from my content.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
        results: "3.2M Impressions",
        screenshots: [], // e.g. ["/testimonials/alex-1.png", "/testimonials/alex-2.png", "/testimonials/alex-3.png"]
    },
    {
        name: "Sarah Chen",
        role: "Founder of AI Labs",
        content: "The ghostwriting is uncanny. They captured my technical voice perfectly. I no longer worry about what to post; I just watch the engagement notifications roll in.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
        results: "125% Lead Inc.",
        screenshots: [], // e.g. ["/testimonials/sarah-1.png", "/testimonials/sarah-2.png"]
    },
    {
        name: "Marcus Thorne",
        role: "Venture Partner",
        content: "If you're a founder and you're not building a personal brand, you're leaving money on the table. Insyble Tech is the only agency that gets the tech industry right.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
        results: "Top 1% Voice",
        screenshots: [], // e.g. ["/testimonials/marcus-1.png", "/testimonials/marcus-2.png", "/testimonials/marcus-3.png"]
    },
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
            {/* Results Section - separate block */}
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

            {/* Testimonials Section - with screenshot support */}
            <section id="testimonials" className="py-20 md:py-28 bg-[#080808] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 tracking-tight">
                            Real results from <span className="italic font-light text-white/90">real founders</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg">
                            Don't take our word for it. Hear from people dominating their niches — with proof.
                        </p>
                    </motion.div>

                    <div className="space-y-16 md:space-y-24">
                        {testimonials.map((t, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                                >
                                    {/* Multiple screenshots per client — add paths to screenshots array */}
                                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                                        {t.screenshots && t.screenshots.length > 0 ? (
                                            <div className="space-y-3">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                                    <ImageIcon className="w-3.5 h-3.5" />
                                                    {t.screenshots.length} screenshot{t.screenshots.length !== 1 ? 's' : ''}
                                                </p>
                                                <div className={`grid gap-3 ${t.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} min-w-0`}>
                                                    {t.screenshots.map((src, i) => (
                                                        <motion.a
                                                            key={i}
                                                            href={src}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            initial={{ opacity: 0, scale: 0.98 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-xl ring-1 ring-white/5 block focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#080808]"
                                                        >
                                                            <img
                                                                src={src}
                                                                alt={`${t.name} testimonial ${i + 1}`}
                                                                className="w-full aspect-[4/3] object-cover object-top"
                                                            />
                                                            <span className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" aria-hidden />
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-dashed border-white/10 bg-white/[0.02]">
                                                <div className="w-full aspect-[4/3] flex flex-col items-center justify-center text-gray-500 bg-gradient-to-b from-white/[0.04] to-transparent">
                                                    <div className="w-14 h-14 rounded-xl border border-dashed border-white/20 flex items-center justify-center mb-3">
                                                        <ImageIcon className="w-7 h-7 text-white/25" />
                                                    </div>
                                                    <span className="text-sm font-medium text-white/40">Add client screenshots</span>
                                                    <span className="text-xs text-gray-600 mt-1 text-center px-4">
                                                        In data: <code className="text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">screenshots: ["/testimonials/1.png", ...]</code>
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quote + author block */}
                                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                                        <div className="relative p-0">
                                            <Quote className="absolute -top-2 left-0 w-10 h-10 text-blue-500/20" />
                                            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 md:pl-10 italic">
                                                "{t.content}"
                                            </blockquote>
                                            <div className="flex flex-wrap items-center gap-4 mt-8">
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className="w-14 h-14 rounded-xl object-cover ring-2 ring-white/10"
                                                />
                                                <div>
                                                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                                </div>
                                                <div className="ml-auto flex items-center gap-2">
                                                    <div className="flex gap-0.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-amber-400/90 text-amber-400/90" />
                                                        ))}
                                                    </div>
                                                    <span className="px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold uppercase tracking-wide">
                                                        {t.results}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
