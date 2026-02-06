import React from 'react';
import { motion } from 'framer-motion';

const toRad = (deg) => (deg * Math.PI) / 180;

const TIERS = [
    {
        radius: 18,
        services: [
            { label: 'Hooks', angle: 45 },
            { label: 'Caption', angle: 135 },
            { label: 'Copywriting', angle: 225 },
            { label: 'Posting', angle: 315 },
        ],
    },
    {
        radius: 30,
        services: [
            { label: 'Content strategy', angle: 0 },
            { label: 'Engagement', angle: 90 },
            { label: 'Infographics', angle: 180 },
            { label: 'Comment Reply', angle: 270 },
        ],
    },
    {
        radius: 42,
        services: [
            { label: 'Analytics & iteration', angle: 45 },
            { label: 'Profile optimization', angle: 135 },
            { label: 'Connection request management', angle: 225 },
            { label: 'Niche and feed optimization', angle: 315 },
        ],
    }
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen bg-[#02040a] relative overflow-hidden flex flex-col items-center justify-center py-16 px-4">
            {/* Background Ambient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,102,194,0.08),transparent_70%)] pointer-events-none" />

            {/* --- HEADING SECTION --- */}
            <div className="relative z-40 text-center mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
                        Complete LinkedIn <span className="text-[#0A66C2]">Dominance</span>
                    </h2>
                    <div className="mt-4 flex items-center justify-center gap-4">
                        <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
                        <p className="text-sm md:text-lg font-medium text-slate-400 uppercase tracking-[0.2em]">
                            100% Done For You
                        </p>
                        <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
                    </div>
                </motion.div>
            </div>

            {/* --- SERVICES CIRCLE --- */}
            <div className="relative w-full max-w-[650px] aspect-square mx-auto scale-90 md:scale-100">

                {/* Arcs/Circles with subtle breathing glow */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <defs>
                        <filter id="softGlow">
                            <feGaussianBlur stdDeviation="0.4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    {TIERS.map((tier, idx) => (
                        <motion.circle
                            key={idx}
                            cx="50"
                            cy="50"
                            r={tier.radius}
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="0.25"
                            filter="url(#softGlow)"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                        />
                    ))}
                </svg>

                {/* Center LinkedIn Icon (Normal Font, Non-Italic) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-14 h-14 md:w-16 md:h-16 bg-[#0A66C2] rounded-xl flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(10,102,194,0.3)]"
                    >
                        <span className="text-white text-4xl font-bold leading-none">in</span>
                    </motion.div>
                </div>

                {/* Service Pills */}
                {TIERS.map((tier, tIdx) => (
                    <React.Fragment key={tIdx}>
                        {tier.services.map((service, sIdx) => {
                            const rad = toRad(service.angle);
                            const x = 50 + tier.radius * Math.cos(rad);
                            const y = 50 - tier.radius * Math.sin(rad);

                            return (
                                <motion.div
                                    key={service.label}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: (tIdx * 4 + sIdx) * 0.03 }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "rgba(56, 189, 248, 0.5)",
                                            backgroundColor: "#0a1224",
                                            boxShadow: "0 0 15px rgba(10, 102, 194, 0.4)"
                                        }}
                                        className="flex items-center gap-2 bg-[#02040a]/90 border border-slate-800 px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_10px_rgba(10,102,194,0.05)]"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                                        <span className="text-[9px] md:text-[11px] font-semibold text-slate-300 whitespace-nowrap uppercase tracking-wider">
                                            {service.label}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>

            {/* Subtle Bottom Glow Overlay */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0A66C2]/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default Services;