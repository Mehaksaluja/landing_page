import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Loader2, CheckCircle2 } from 'lucide-react';

// Form submissions go to your email via EmailJS. Setup: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const BUDGET_OPTIONS = [
    { value: '200-400', label: '200$ - 400$ ( Please Don\'t Book, we can\'t help )' },
    { value: '400-600', label: '400$ - 600$' },
    { value: '600-800', label: '600$ - 800$' },
    { value: '800-plus', label: '800$ +' },
];

const Contact = () => {
    const [form, setForm] = useState({ fullName: '', email: '', whatsapp: '', linkedinUrl: '', budget: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus('error');
            setErrorMessage('Email not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env');
            return;
        }
        setStatus('sending');
        setErrorMessage('');
        try {
            const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: EMAILJS_SERVICE_ID,
                    template_id: EMAILJS_TEMPLATE_ID,
                    user_id: EMAILJS_PUBLIC_KEY,
                    template_params: {
                        fullName: form.fullName,
                        email: form.email,
                        whatsapp: form.whatsapp,
                        linkedinUrl: form.linkedinUrl,
                        budget: form.budget,
                    },
                }),
            });
            if (res.ok) {
                setStatus('sent');
                setForm({ fullName: '', email: '', whatsapp: '', linkedinUrl: '', budget: '' });
            } else {
                const text = await res.text();
                setStatus('error');
                setErrorMessage(text || 'Something went wrong. Please try again or email us at support@insybletech.com');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Network error. Please check your connection or email us at support@insybletech.com');
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#02040a] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(10,102,194,0.06),transparent)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEFT SIDE: Simple & Clean Content */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-[#0A66C2] text-xs font-bold uppercase tracking-[0.2em]">Contact</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                                Get In <span className="text-[#0A66C2]">Touch</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                                Thanks for your interest in working with Insyble Tech! Drop your details below and our team will get back to you within 24 hours.
                            </p>
                            <div className="pt-4 flex items-center gap-3 text-gray-400 border-t border-white/5">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                                    <Mail className="w-5 h-5 text-[#0A66C2]" />
                                </span>
                                <span className="text-sm font-medium text-gray-300">support@insybletech.com</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-[#060b12] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/20"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'sent' ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 px-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Message Sent</h3>
                                    <p className="text-gray-400 mt-2 text-sm">We&apos;ll get back to you within 24 hours.</p>
                                    <button type="button" onClick={() => setStatus('idle')} className="mt-8 text-[#0A66C2] text-sm font-semibold hover:underline">Send another message</button>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 px-4">
                                    <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
                                    <button type="button" onClick={() => { setStatus('idle'); setErrorMessage(''); }} className="text-[#0A66C2] text-sm font-semibold hover:underline">Try again</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                                            <input
                                                required
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2]/30 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2]/30 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">WhatsApp / Contact</label>
                                        <input
                                            required
                                            type="tel"
                                            name="whatsapp"
                                            value={form.whatsapp}
                                            onChange={handleChange}
                                            placeholder="+1 234 567 8900"
                                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2]/30 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your LinkedIn URL</label>
                                        <input
                                            type="url"
                                            name="linkedinUrl"
                                            value={form.linkedinUrl}
                                            onChange={handleChange}
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2]/30 focus:outline-none transition-all"
                                        />
                                        <p className="text-xs text-gray-500">Our team will review it prior to the meeting.</p>
                                    </div>

                                    <div className="space-y-3 pt-1">
                                        <label className="block text-xs font-semibold text-gray-400 leading-snug">
                                            To design a strategy that actually delivers results, what level of monthly investment are you comfortable allocating to your personal brand per month? <span className="text-red-400">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {BUDGET_OPTIONS.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => setForm(f => ({ ...f, budget: opt.value }))}
                                                    className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${form.budget === opt.value
                                                        ? 'bg-[#0A66C2]/15 border-[#0A66C2] text-white'
                                                        : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
                                                        }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === 'sending'}
                                            className="w-full sm:w-auto min-w-[180px] px-8 py-3.5 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <>Get In Touch <Send className="w-4 h-4" /></>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;