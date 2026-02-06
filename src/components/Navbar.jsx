import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const NAV_ITEMS = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = ['home', 'services', 'testimonials', 'contact'];
        const observers = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveSection(id);
                    });
                },
                { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash.slice(1) || 'home';
            setActiveSection(hash);
        };
        window.addEventListener('hashchange', onHashChange);
        const hash = window.location.hash.slice(1) || 'home';
        setActiveSection(hash);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[100] px-6 py-5 md:px-10 flex justify-between items-center bg-black/30 backdrop-blur-2xl border-b border-white/5"
        >
            {/* Brand Logo */}
            <div className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Insyble<span className="text-blue-500">Tech</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
                {NAV_ITEMS.map(({ href, label }) => {
                    const sectionId = href.slice(1);
                    const isActive = activeSection === sectionId;
                    return (
                        <a
                            key={href}
                            href={href}
                            className={`text-sm font-medium transition-colors duration-300 relative group ${
                                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {label}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"
                            />
                        </a>
                    );
                })}
            </div>

            {/* Action Button – AI-mode gradient effect */}
            <a href="#contact" className="ai-mode-cta" style={{ textDecoration: 'none' }}>
                <span className="gradient-layer">
                    <span className="rotating-gradient" aria-hidden />
                </span>
                <span className="inner-bg" aria-hidden />
                <span className="button-content">
                    <span className="icon">
                        <Phone className="w-[1.25rem] h-[1.25rem]" />
                    </span>
                    <span className="label">Book a Call</span>
                </span>
            </a>
        </motion.nav>
    );
};

export default Navbar;