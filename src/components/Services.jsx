import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, TrendingUp, Users, Target, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Executive Ghostwriting",
        description: "We capture your unique voice to create high-authority content that positions you as a thought leader without you typing a single word.",
        icon: PenTool,
        accent: "from-blue-500/20 to-blue-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.4)]",
        color: "text-blue-400",
    },
    {
        title: "Growth Strategy",
        description: "Data-driven roadmaps to scale your reach from zero to millions of impressions using our proven 'Velocity' framework.",
        icon: TrendingUp,
        accent: "from-indigo-500/20 to-indigo-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.4)]",
        color: "text-indigo-400",
    },
    {
        title: "Outbound Branding",
        description: "Turn your profile into a high-converting landing page that attracts inbound leads and high-ticket opportunities.",
        icon: Target,
        accent: "from-cyan-500/20 to-cyan-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(6,182,212,0.4)]",
        color: "text-cyan-400",
    },
    {
        title: "Authority Management",
        description: "We handle engagement, commenting, and networking so your brand stays active and relevant 24/7 in the right circles.",
        icon: Users,
        accent: "from-purple-500/20 to-purple-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.4)]",
        color: "text-purple-400",
    },
    {
        title: "Performance Analytics",
        description: "Deep-dive reports on what's working and what's not, with monthly pivots to optimize for maximum ROI.",
        icon: Zap,
        accent: "from-amber-500/20 to-amber-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.4)]",
        color: "text-amber-400",
    },
    {
        title: "Brand Protection",
        description: "Standardized quality control so every post aligns with your professional reputation and company values.",
        icon: ShieldCheck,
        accent: "from-emerald-500/20 to-emerald-600/5",
        borderGlow: "group-hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.4)]",
        color: "text-emerald-400",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl"
                        >
                            Complete <span className="text-white/70 italic font-light">LinkedIn</span> dominance
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-sm text-base md:text-lg leading-relaxed"
                    >
                        From profile seeker to industry leader — tools and strategies that scale.
                    </motion.p>
                </div>

                {/* Bento-style grid: 2 large + 4 standard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isLarge = index === 0 || index === 3;

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: index * 0.08 }}
                                className={`group relative rounded-2xl md:rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/15 ${service.borderGlow} ${isLarge ? 'md:col-span-2' : ''}`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <div className={`relative p-6 md:p-8 ${isLarge ? 'md:p-10' : ''} flex flex-col h-full min-h-[220px] md:min-h-0`}>
                                    {/* Top row: number + icon */}
                                    <div className="flex items-start justify-between mb-5">
                                        <span className="text-[11px] font-bold text-white/30 tracking-widest tabular-nums">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className={`w-6 h-6 ${service.color}`} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <h3 className={`text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors ${isLarge ? 'md:text-2xl' : ''}`}>
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow group-hover:text-gray-400 transition-colors">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/50 group-hover:text-blue-400 transition-colors">
                                        <span>Learn more</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom accent line - expands on hover */}
                                <div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-blue-500/70 rounded-full"
                                />
                            </motion.article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
