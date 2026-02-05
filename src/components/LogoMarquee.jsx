import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "Microsoft",
    "Google",
    "Amazon",
    "IBM",
    "Oracle",
    "Adobe",
    "Northern Trust",
    "HPE",
    "JP Morgan",
    "Genpec",
    "UBS",
    "Nuvama Wealth",
    "IMAP",
    "Alpha dev",
    "algo tutor",
    "Setu",
    "Quantum edge",
    "Vidvatta",
    "Netleaf",
    "Teksands",
    "Accenture",
    "Rixmax",
];

const LogoMarquee = () => {
    return (
        <div className="w-full py-14 relative overflow-hidden border-t border-white/[0.06]">
            {/* Softer side fade – logos in view stay clear */}
            <div
                className="absolute inset-y-0 left-0 w-24 md:w-32 pointer-events-none z-10"
                style={{
                    background: 'linear-gradient(to right, #050505 0%, transparent 100%)',
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-24 md:w-32 pointer-events-none z-10"
                style={{
                    background: 'linear-gradient(to left, #050505 0%, transparent 100%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 mb-8 relative z-20">
                <p className="text-gray-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-center">
                    Trusted by leaders at
                </p>
            </div>

            <div className="relative flex">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 32, repeat: Infinity }}
                    className="flex whitespace-nowrap"
                >
                    <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                        {logos.map((logo, index) => (
                            <span
                                key={index}
                                className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/45 hover:text-white/70 transition-colors duration-300 cursor-default tracking-tight select-none"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <span
                                key={`dup-${index}`}
                                className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/45 hover:text-white/70 transition-colors duration-300 cursor-default tracking-tight select-none"
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
