import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Post cards ke liye animation variants
    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center pt-20 overflow-hidden">

            {/* 1. Background Effects (Grid + Glow) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[120px] rounded-full" />
            </div>

            {/* 2. Floating Social Media Mockups (Sides) */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="hidden xl:block absolute left-[10%] top-[30%] w-64 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md z-10 rotate-[-6deg]"
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">in</div>
                    <div className="h-2 w-20 bg-white/20 rounded" />
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-[#22c55e] text-xs font-bold">25k Likes</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="hidden xl:block absolute right-[10%] top-[40%] w-64 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md z-10 rotate-[6deg]"
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold font-mono">X</div>
                    <div className="h-2 w-20 bg-white/20 rounded" />
                </div>
                <div className="space-y-2 text-xs text-gray-400">
                    Retweeted by <span className="text-white font-bold">Elon Musk</span>
                    <div className="h-2 w-full bg-white/10 rounded mt-2" />
                    <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-lg">4.3M 📈</div>
                </div>
            </motion.div>

            {/* 3. Main Hero Content */}
            <div className="max-w-6xl mx-auto px-6 text-center z-20">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-[110px] font-black tracking-tight leading-[0.9] text-white mb-10"
                >
                    Personal Brand Team <br />
                    <span className="font-light italic text-gray-500">For Tech Founders</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light"
                >
                    From strategy to execution, we grow your personal brand <br />
                    so you can stay focused on building.
                </motion.p>

                {/* The Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <button className="group relative px-12 py-5 bg-black border border-[#22c55e] rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                        <span className="relative z-10 text-3xl md:text-5xl font-black tracking-tighter text-white">
                            BOOK A <span className="text-[#22c55e] group-hover:animate-pulse">STRATEGY CALL</span>
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* 4. Trust Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-full mt-24 py-12 border-y border-white/5 bg-black/40 backdrop-blur-md"
            >
                <p className="text-center text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-8">Featured In</p>
                <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale invert brightness-200">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" alt="CNN" className="h-5" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Business_Insider_Logo.svg" alt="Business Insider" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" alt="MIT" className="h-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Daily_Mail_logo.svg" alt="Daily Mail" className="h-5" />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;