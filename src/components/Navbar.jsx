import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] py-6 px-10 flex justify-between items-center">
            {/* Brand */}
            <div className="text-xl font-black tracking-tighter text-white uppercase italic">
                Bytes<span className="text-[#22c55e]">wave</span>
            </div>

            {/* Center Navigation Pill */}
            <div className="hidden md:flex items-center gap-6 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-full">
                <a href="#benefits" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Benefits</a>
                <a href="#content" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Content</a>
                <a href="#services" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#faqs" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">FAQs</a>
            </div>

            {/* Right Action Button */}
            <button className="relative px-6 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[#22c55e]/30 hover:bg-[#22c55e] hover:text-white transition-all duration-500">
                Get In Touch
            </button>
        </nav>
    );
};

export default Navbar;