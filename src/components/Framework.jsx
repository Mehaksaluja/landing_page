import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Users } from 'lucide-react';

const steps = [
    {
        title: "Deep Tech Strategy",
        desc: "We analyze your niche (AI, SaaS, Fintech) to build a voice that sounds like a leader, not a bot.",
        icon: <Target className="text-[#0070f3]" size={32} />,
        color: "from-[#0070f3]/20"
    },
    {
        title: "The Content Engine",
        desc: "Custom hooks and high-authority ghostwriting. 100% original, no generic AI-copy-paste.",
        icon: <Zap className="text-[#bf5af2]" size={32} />,
        color: "from-[#bf5af2]/20"
    },
    {
        title: "Distribution & Growth",
        desc: "Strategic commenting and community engagement to trigger the LinkedIn algorithm.",
        icon: <Users className="text-[#0070f3]" size={32} />,
        color: "from-[#0070f3]/20"
    }
];

const Framework = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        The <span className="text-[#0070f3]">Velocity</span> Framework
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our data-backed 3-step process designed specifically to scale tech identities.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#0070f3]/50 transition-all group relative overflow-hidden`}
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-black/40 w-fit rounded-2xl border border-white/5">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Result Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-[#0070f3]/10 to-[#bf5af2]/10 border border-white/10 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <h4 className="text-2xl font-bold text-white mb-2">Ready to see the velocity?</h4>
                            <p className="text-gray-400">Join 60+ tech leaders who scaled their personal brands.</p>
                        </div>
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#0070f3] hover:text-white transition-all">
                            Analyze My Profile
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Framework;