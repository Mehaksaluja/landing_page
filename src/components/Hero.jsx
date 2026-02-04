import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Eye } from 'lucide-react';
import LogoMarquee from './LogoMarquee';
import { useCountUp } from '../hooks/useCountUp';

const FloatingStat = ({ icon: Icon, value, label, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: delay / 1000
                    }}
                    className="absolute backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400">{label}</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Hero = () => {
    const impressions = useCountUp(10000000, 3000, 0);
    const [showCounter, setShowCounter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCounter(true), 800);
        return () => clearTimeout(timer);
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505]">
            {/* Background Effects - Subtle */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* Floating Stats - Positioned around the hero */}
            <div className="absolute inset-0 z-[5] pointer-events-none hidden lg:block">
                <div className="relative w-full h-full max-w-7xl mx-auto">
                    <div className="absolute top-32 left-10">
                        <FloatingStat icon={Eye} value="2.5M+" label="Monthly Views" delay={1200} />
                    </div>
                    <div className="absolute top-48 right-20">
                        <FloatingStat icon={TrendingUp} value="340%" label="Avg Growth" delay={1600} />
                    </div>
                    <div className="absolute bottom-48 left-32">
                        <FloatingStat icon={Users} value="850+" label="Clients Served" delay={2000} />
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 text-center flex-grow flex flex-col justify-center items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-blue-100 tracking-wider">LinkedIn Growth Experts</span>
                </motion.div>

                {/* Main Headline with Animated Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[1] mb-4">
                        From 0 to{' '}
                        {showCounter && (
                            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                                {formatNumber(impressions)}
                            </span>
                        )}
                    </h1>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-400">
                        Impressions
                    </h2>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-400 mb-14 leading-relaxed"
                >
                    We help tech founders and executives build personal brands that drive inbound leads,
                    establish trust, and create market dominance.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 active:scale-95 flex items-center gap-2">
                        Get Started Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300">
                        View Case Studies
                    </button>
                </motion.div>
            </div>

            {/* Logo Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-full mt-auto"
            >
                <LogoMarquee />
            </motion.div>
        </section>
    );
};

export default Hero;
