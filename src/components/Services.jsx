import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, TrendingUp, Users, Target, ShieldCheck, Zap } from 'lucide-react';

const services = [
    {
        title: "Executive Ghostwriting",
        description: "We capture your unique voice to create high-authority content that positions you as a thought leader without you typing a single word.",
        icon: <PenTool className="w-8 h-8 text-blue-500" />,
        accent: "bg-blue-500/10"
    },
    {
        title: "Growth Strategy",
        description: "Data-driven roadmaps designed to scale your reach from zero to millions of impressions using our proven 'Velocity' framework.",
        icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
        accent: "bg-indigo-500/10"
    },
    {
        title: "Outbound Branding",
        description: "Turn your profile into a high-converting landing page that attracts inbound leads and high-ticket opportunities while you sleep.",
        icon: <Target className="w-8 h-8 text-cyan-500" />,
        accent: "bg-cyan-500/10"
    },
    {
        title: "Authority Management",
        description: "We handle engagement, commenting, and networking to ensure your brand stays active and relevant 24/7 in the right circles.",
        icon: <Users className="w-8 h-8 text-purple-500" />,
        accent: "bg-purple-500/10"
    },
    {
        title: "Performance Analytics",
        description: "Deep-dive reports on what's working and what's not, allowing us to pivot and optimize for maximum ROI every month.",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        accent: "bg-yellow-500/10"
    },
    {
        title: "Brand Protection",
        description: "Standardized quality control to ensure every post aligns with your professional reputation and company values.",
        icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
        accent: "bg-emerald-500/10"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                        >
                            Complete <span className="italic font-light">LinkedIn</span> <br /> Dominance Suite
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-sm text-lg leading-relaxed"
                    >
                        Tools and strategies designed to take you from a profile seeker to an industry leader.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className={`w-16 h-16 rounded-2xl ${service.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-500 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                LEARN MORE <Zap className="w-3 h-3 fill-current" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
