import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Repeat2, ChevronDown } from 'lucide-react';

const testimonials = [
    { id: 1, likes: "1.2k", comments: "450", reposts: "80", img: "/results/1.png" },
    { id: 2, likes: "2.5k", comments: "890", reposts: "120", img: "/results/2.png" },
    { id: 3, likes: "950", comments: "210", reposts: "45", img: "/results/3.png" },
    { id: 4, likes: "3.1k", comments: "1.1k", reposts: "200", img: "/results/4.png" },
    { id: 5, likes: "1.8k", comments: "600", reposts: "95", img: "/results/5.png" },
    { id: 6, likes: "4.2k", comments: "1.5k", reposts: "310", img: "/results/6.png" },
    { id: 7, likes: "1.1k", comments: "320", reposts: "60", img: "/results/7.png" },
    { id: 8, likes: "2.9k", comments: "900", reposts: "150", img: "/results/8.png" },
    { id: 9, likes: "800", comments: "150", reposts: "30", img: "/results/9.png" },
    { id: 10, likes: "5.0k", comments: "2.1k", reposts: "450", img: "/results/10.png" },
];

const Results = () => {
    const [showAll, setShowAll] = useState(false);

    // Pehle sirf 6 items dikhao, button click par sab
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

    return (
        <section id="testimonials" className="py-20 bg-[#030303] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Clean Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                            Results that <span className="text-[#0A66C2]">Speak</span>
                        </h2>
                        <p className="text-gray-500 mt-3 font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">
                            Data-driven growth for authority brands
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleTestimonials.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                                className="group bg-[#0a0f1a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#0A66C2]/30 transition-all duration-300"
                            >
                                {/* Screenshot Container - Controlled Height */}
                                <div className="aspect-[4/3] bg-[#050505] relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={`Result ${item.id}`}
                                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-40" />
                                </div>

                                {/* Compact Stats Bar */}
                                <div className="p-4 bg-[#0a0f1a] flex items-center justify-around border-t border-white/5">
                                    <div className="text-center">
                                        <div className="flex items-center gap-1 text-white font-bold text-base">
                                            <Heart size={14} className="text-pink-500 fill-pink-500" />
                                            {item.likes}
                                        </div>
                                        <p className="text-[9px] text-gray-500 uppercase font-black">Likes</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center gap-1 text-white font-bold text-base">
                                            <MessageCircle size={14} className="text-blue-400 fill-blue-400" />
                                            {item.comments}
                                        </div>
                                        <p className="text-[9px] text-gray-500 uppercase font-black">Comments</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center gap-1 text-white font-bold text-base">
                                            <Repeat2 size={14} className="text-green-500" />
                                            {item.reposts}
                                        </div>
                                        <p className="text-[9px] text-gray-500 uppercase font-black">Reposts</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View More Button */}
                {!showAll && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-xl"
                        >
                            View More Proof
                            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>

            {/* Background Glow Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A66C2]/5 to-transparent pointer-events-none" />
        </section>
    );
};

export default Results;