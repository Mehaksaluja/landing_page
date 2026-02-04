import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "Microsoft",
    "Google",
    "Meta",
    "Nvidia",
    "Amazon",
    "Apple",
    "Salesforce",
    "Netflix",
    "Adobe",
    "Spotify"
];

const LogoMarquee = () => {
    return (
        <div className="w-full py-16 relative bg-transparent overflow-hidden">
            {/* Side Masks for Fade Effect */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: 'linear-gradient(to right, #050505, transparent 15%, transparent 85%, #050505)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 mb-12 relative z-20">
                <p className="text-blue-500/40 text-xs md:text-sm font-medium tracking-[0.3em] text-center">
                    Trusted by leaders at
                </p>
            </div>

            <div className="relative flex">
                <motion.div
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 35,
                        repeat: Infinity,
                    }}
                    className="flex whitespace-nowrap"
                >
                    {/* First set of logos */}
                    <div className="flex items-center gap-24 px-12">
                        {logos.map((logo, index) => (
                            <span
                                key={index}
                                className="text-2xl md:text-4xl font-semibold text-white/15 hover:text-white/40 transition-all duration-700 cursor-default tracking-tight select-none"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-24 px-12">
                        {logos.map((logo, index) => (
                            <span
                                key={`dup-${index}`}
                                className="text-2xl md:text-4xl font-semibold text-white/15 hover:text-white/40 transition-all duration-700 cursor-default tracking-tight select-none"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LogoMarquee;
