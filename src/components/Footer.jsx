import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-16 pb-12 bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        Insyble<span className="text-blue-500">Tech</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>

                    <p className="text-gray-600 text-sm">
                        © 2024 Insyble Tech. All rights reserved. Built for Industry Titans.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
