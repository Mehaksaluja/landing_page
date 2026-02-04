import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CEO at TechFlow SaaS",
        content: "Insyble Tech completely transformed my LinkedIn presence. In just 3 months, I went from 500 followers to 15k+, and we've closed $50k in inbound leads directly from my content.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
        results: "3.2M Impressions"
    },
    {
        name: "Sarah Chen",
        role: "Founder of AI Labs",
        content: "The ghostwriting is uncanny. They captured my technical voice perfectly. I no longer worry about what to post; I just watch the engagement notifications roll in.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
        results: "125% Lead Inc."
    },
    {
        name: "Marcus Thorne",
        role: "Venture Partner",
        content: "If you're a founder and you're not building a personal brand, you're leaving money on the table. Insyble Tech is the only agency that gets the tech industry right.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
        results: "Top 1% Voice"
    }
];

const stats = [
    { label: "Total Reach", value: "25M+" },
    { label: "Leads Generated", value: "1.2k+" },
    { label: "Successful Rounds", value: "15+" },
    { label: "Client ROI", value: "12x" }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-[#080808] relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Stats Header */}
                <div id="results" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-blue-500 font-bold tracking-widest uppercase text-xs">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Real Results from <br /> <span className="text-blue-500 italic">Real Founders</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">Don't take our word for it. Hear it from the people who are dominating their niches.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 relative group"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />

                            <div className="flex items-center gap-4 mb-8">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-crop grayscale hover:grayscale-0 transition-all duration-500" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8 italic">"{t.content}"</p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-blue-500 text-blue-500" />)}
                                </div>
                                <div className="px-3 py-1 bg-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                                    {t.results}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
