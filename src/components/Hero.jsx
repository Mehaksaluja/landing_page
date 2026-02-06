import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, MessageCircle } from 'lucide-react';
import LogoMarquee from './LogoMarquee';
import { useCountUp } from '../hooks/useCountUp';

// Pure bg spread: left zone + right zone + thode thode middle (center 35–65% lighter)
const ZONE_LEFT = { min: 0, max: 42 };
const ZONE_RIGHT = { min: 58, max: 100 };
const ZONE_CENTER = { min: 35, max: 65 }; // kam density, subtle

const getRandomLeft = () => {
    const r = Math.random();
    if (r < 0.45) return ZONE_LEFT.min + Math.random() * (ZONE_LEFT.max - ZONE_LEFT.min);
    if (r < 0.9) return ZONE_RIGHT.min + Math.random() * (ZONE_RIGHT.max - ZONE_RIGHT.min);
    return ZONE_CENTER.min + Math.random() * (ZONE_CENTER.max - ZONE_CENTER.min);
};

const FallingEngagement = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const icons = [Heart, MessageCircle];
        const colors = ['text-red-400/50', 'text-blue-400/50'];

        const interval = setInterval(() => {
            const leftPct = getRandomLeft();
            const inCenter = leftPct >= ZONE_CENTER.min && leftPct <= ZONE_CENTER.max;

            const newParticle = {
                id: Math.random(),
                Icon: icons[Math.floor(Math.random() * icons.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                left: leftPct,
                delay: Math.random() * 0.3,
                duration: 4 + Math.random() * 1.5,
                size: inCenter ? 12 + Math.random() * 8 : 16 + Math.random() * 12,
                opacity: inCenter ? 0.35 : 0.6,
            };
            setParticles(prev => [...prev.slice(-14), newParticle]);
        }, 550);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <AnimatePresence>
                {particles.map(particle => {
                    const Icon = particle.Icon;
                    return (
                        <motion.div
                            key={particle.id}
                            initial={{ y: -60, opacity: 0, scale: 0.6 }}
                            animate={{
                                y: '115vh',
                                opacity: [0, particle.opacity, particle.opacity * 1.1, particle.opacity * 0.6, 0],
                                scale: [0.6, 1, 1, 0.9, 0.5],
                                rotate: [0, 180, 360],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: particle.duration,
                                ease: 'linear',
                                delay: particle.delay,
                            }}
                            className="absolute"
                            style={{ left: `${particle.left}%`, transform: 'translateX(-50%)' }}
                        >
                            <Icon className={`${particle.color} drop-shadow-md`} size={particle.size} fill="currentColor" fillOpacity={0.3} />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

const Hero = () => {
    const impressions = useCountUp(1000000, 3000, 0);
    const [showCounter, setShowCounter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCounter(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M+';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toString();
    };

    const headline = "From 0 to";
    const headlineChars = headline.split('');

    return (
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505]">
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <FallingEngagement />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 text-center flex-grow flex flex-col justify-center items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
                >
                    <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                        <Sparkles className="w-4 h-4 text-blue-400" />
                    </motion.span>
                    <span className="text-xs font-semibold text-blue-100 tracking-wider">LinkedIn Growth Experts</span>
                </motion.div>

                {/* Headline - staggered char animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                        hidden: {},
                    }}
                    className="mb-2"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] flex flex-wrap justify-center gap-x-2 gap-y-1">
                        {headlineChars.map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                        {' '}
                        {showCounter && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
                            >
                                {formatNumber(impressions)}
                            </motion.span>
                        )}
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-400 mb-6"
                >
                    Impressions
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="max-w-2xl text-base md:text-lg text-gray-400 mb-12 leading-relaxed"
                >
                    We help tech founders and executives build personal brands that drive inbound leads,
                    establish trust, and create market dominance.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="flex justify-center"
                >
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="ai-mode-cta group"
                        style={{ height: '3rem', padding: '0 1.5rem 0 1.25rem', fontSize: '1rem' }}
                    >
                        <span className="gradient-layer">
                            <span className="rotating-gradient" aria-hidden />
                        </span>
                        <span className="inner-bg" aria-hidden />
                        <span className="button-content">
                            <span className="label">Book a Strategy Call</span>
                            <span className="icon">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full mt-auto"
            >
                <LogoMarquee />
            </motion.div>
        </section>
    );
};

export default Hero;
