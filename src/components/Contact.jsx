import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Loader2 } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Replace with your form backend (Formspree, Netlify, API, etc.)
        await new Promise((r) => setTimeout(r, 800));
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
    };

    const formFields = [
        { id: 'name', name: 'name', type: 'text', placeholder: 'Your name', Icon: User, label: 'Name *' },
        { id: 'email', name: 'email', type: 'email', placeholder: 'you@company.com', Icon: Mail, label: 'Email *' },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(59,130,246,0.06),transparent)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:sticky lg:top-32 space-y-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-block text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs"
                        >
                            Contact
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                        >
                            Ready to build <br /> your <span className="text-blue-500 italic">empire?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="text-gray-500 max-w-md text-lg leading-relaxed"
                        >
                            Stop shouting into the void. Tell us about your goals and we'll get back within 24 hours.
                        </motion.p>
                        <motion.a
                            href="mailto:hello@insyble.tech"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            whileHover={{ x: 4 }}
                            className="mt-10 flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                            hello@insyble.tech
                        </motion.a>
                    </motion.div>

                    {/* Right: Form card with entrance + hover glow */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.12)] hover:border-white/15 transition-all duration-500"
                    >
                        {status === 'sent' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                                    className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6"
                                >
                                    <Send className="w-8 h-8 text-emerald-400" />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl font-bold text-white mb-2"
                                >
                                    Message sent
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-500 mb-8"
                                >
                                    We'll get back to you within 24 hours.
                                </motion.p>
                                <motion.button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Send another message
                                </motion.button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {formFields.map((field, i) => {
                                    const Icon = field.Icon;
                                    return (
                                        <motion.div
                                            key={field.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                                        >
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-400 mb-2">
                                                {field.label}
                                            </label>
                                            <div className="group relative">
                                                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-focus-within:text-blue-400" />
                                                <input
                                                    id={field.id}
                                                    name={field.name}
                                                    type={field.type}
                                                    required
                                                    value={form[field.name]}
                                                    onChange={handleChange}
                                                    placeholder={field.placeholder}
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Message *
                                    </label>
                                    <div className="group relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 transition-colors group-focus-within:text-blue-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your goals and how we can help..."
                                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45, duration: 0.4 }}
                                >
                                    <motion.button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.4)' }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/70 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 disabled:cursor-not-allowed transition-colors duration-300"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
