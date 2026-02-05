import React from 'react';
import { motion } from 'framer-motion';

// Each service: label + position (angle in radians from right, radius %)
// Layout like image: top arc (3), right column (3), bottom arc (3), left column (3)
const CX = 50;
const CY = 50;
const toRad = (deg) => (deg * Math.PI) / 180;

const SERVICES = [
    { label: 'Connection request management', angle: toRad(135), radius: 48 },  // top left
    { label: 'Caption', angle: toRad(90), radius: 48 },                          // top center
    { label: 'Engagement', angle: toRad(45), radius: 48 },                      // top right
    { label: 'Hooks', angle: toRad(15), radius: 46 },                             // right column top
    { label: 'Content strategy', angle: toRad(0), radius: 46 },                  // right mid
    { label: 'Copywriting', angle: toRad(-15), radius: 46 },                     // right column bottom
    { label: 'Comment Reply', angle: toRad(300), radius: 48 },                   // bottom right
    { label: 'Posting', angle: toRad(270), radius: 48 },                         // bottom center
    { label: 'Niche and feed optimization', angle: toRad(240), radius: 48 },    // bottom left
    { label: 'Analytics & iteration', angle: toRad(195), radius: 46 },          // left column bottom
    { label: 'Infographics', angle: toRad(180), radius: 46 },                   // left mid
    { label: 'Profile optimization', angle: toRad(165), radius: 46 },           // left column top
];

const Services = () => {
    const cx = CX;
    const cy = CY;

    return (
        <section id="services" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Headline with staggered animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                        hidden: {},
                    }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase"
                    >
                        Complete LinkedIn Dominance
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-xl font-semibold text-blue-400/90 uppercase tracking-wide mt-2"
                    >
                        100% Done For You
                    </motion.p>
                </motion.div>

                {/* Diagram */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-[560px] mx-auto aspect-square overflow-visible"
                >
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <filter id="arcGlow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="0.6" result="blur" />
                                <feFlood floodColor="rgb(59, 130, 246)" floodOpacity="0.5" />
                                <feComposite in2="blur" operator="in" />
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Four concentric circles */}
                        <circle cx={cx} cy={cy} r={14} fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.4" opacity="0.55" filter="url(#arcGlow)" />
                        <circle cx={cx} cy={cy} r={24} fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.4" opacity="0.45" filter="url(#arcGlow)" />
                        <circle cx={cx} cy={cy} r={34} fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.4" opacity="0.4" filter="url(#arcGlow)" />
                        <circle cx={cx} cy={cy} r={44} fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.4" opacity="0.35" filter="url(#arcGlow)" />
                    </svg>

                    {/* Center: LinkedIn icon with pulse glow */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.1 }}
                        className="absolute left-1/2 top-1/2 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#0A66C2] flex items-center justify-center ring-2 ring-white/10 cursor-default services-center-glow"
                    >
                        <span className="text-white font-bold text-lg">in</span>
                    </motion.div>

                    {/* Service pills – radial layout per image */}
                    {SERVICES.map((item, i) => {
                        const angleRad = item.angle;
                        const r = item.radius;
                        const x = cx + r * Math.cos(angleRad);
                        const y = cy - r * Math.sin(angleRad);
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.3 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 180,
                                    damping: 20,
                                    delay: 0.25 + i * 0.05,
                                }}
                                whileHover={{
                                    scale: 1.06,
                                    transition: { duration: 0.2 },
                                    boxShadow: '0 0 28px rgba(59, 130, 246, 0.5)',
                                    borderColor: 'rgba(96, 165, 250, 0.8)',
                                }}
                                className="absolute flex items-center justify-center gap-2.5 rounded-full border border-blue-500/60 bg-gray-900/95 px-4 py-2.5 shadow-[0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-sm transition-shadow duration-300"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <motion.span
                                    animate={{
                                        opacity: [0.9, 1.2, 0.9],
                                        boxShadow: [
                                            '0 0 8px rgba(96,165,250,0.8)',
                                            '0 0 14px rgba(96,165,250,1)',
                                            '0 0 8px rgba(96,165,250,0.8)',
                                        ],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                                    className="h-2 w-2 shrink-0 rounded-full bg-blue-400"
                                />
                                <span className="text-sm font-semibold text-white whitespace-nowrap">{item.label}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-gray-500 text-sm mt-10 max-w-md mx-auto"
                >
                    Strategy, content, and growth — all handled for you
                </motion.p>
            </div>
        </section>
    );
};

export default Services;
