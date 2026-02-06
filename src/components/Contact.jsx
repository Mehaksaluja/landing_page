import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Loader2, CheckCircle2 } from 'lucide-react';

const BUDGET_OPTIONS = [
    { value: '300-500', label: '$300 - $500' },
    { value: '500-800', label: '$500 - $800' },
    { value: '800-plus', label: '$800 +' },
];

const Contact = () => {
    const [form, setForm] = useState({ fullName: '', email: '', whatsapp: '', budget: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise((r) => setTimeout(r, 1200));
        setStatus('sent');
        setForm({ fullName: '', email: '', whatsapp: '', budget: '' });
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#02040a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT SIDE: Simple & Clean Content */}
                    <div className="lg:col-span-5 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                                Ready to <br /> <span className="text-[#0A66C2]">Connect?</span>
                            </h2>
                            <p className="text-gray-500 mt-6 text-lg max-w-sm">
                                Reach out and let's craft a LinkedIn system that builds authority and drives revenue.
                            </p>

                            <div className="mt-12 flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#0A66C2]" />
                                <span className="font-bold lowercase tracking-widest text-sm italic">support@insybletech.com</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Professional Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#050810] border border-white/5 p-8 md:p-10 rounded-2xl shadow-xl"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'sent' ? (
                                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Message Sent</h3>
                                    <p className="text-gray-500 mt-2">Check your WhatsApp shortly.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-6 text-[#0A66C2] text-xs font-bold uppercase tracking-widest">Send New</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                required
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="Name"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-800 focus:border-[#0A66C2] focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-800 focus:border-[#0A66C2] focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">WhatsApp / Contact</label>
                                        <input
                                            required
                                            type="tel"
                                            name="whatsapp"
                                            value={form.whatsapp}
                                            onChange={handleChange}
                                            placeholder="+91"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-800 focus:border-[#0A66C2] focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Budget Range</label>
                                        <div className="flex flex-wrap gap-2">
                                            {BUDGET_OPTIONS.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => setForm(f => ({ ...f, budget: opt.value }))}
                                                    className={`px-4 py-2 rounded-lg border text-[10px] font-bold uppercase transition-all ${form.budget === opt.value
                                                        ? 'bg-[#0A66C2] border-[#0A66C2] text-white shadow-lg shadow-blue-900/20'
                                                        : 'bg-transparent border-white/10 text-gray-500 hover:border-white/20'
                                                        }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-start">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={status === 'sending'}
                                            className="px-10 py-3 bg-[#0A66C2] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-lg flex items-center gap-2 transition-all disabled:opacity-50"
                                        >
                                            {status === 'sending' ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <>Submit <Send className="w-3.5 h-3.5" /></>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;