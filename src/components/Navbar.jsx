import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Navbar = () => {
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
                <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#testimonials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group">
                    Testimonials
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#results" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group">
                    Results
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>

            {/* Action Button – AI-mode gradient effect */}
            <button type="button" className="ai-mode-cta">
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
            </button>
        </motion.nav>
    );
};

export default Navbar;