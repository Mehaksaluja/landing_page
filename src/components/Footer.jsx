import React from 'react';
import { Linkedin, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-20 pb-10 bg-[#02040a] overflow-hidden border-t border-white/5">
            {/* Top Shine Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0A66C2]/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="text-2xl font-black tracking-tight text-white">
                            Insyble<span className="text-[#0A66C2]">Tech</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium max-w-xs mx-auto md:mx-0">
                            Engineering digital authority and premium LinkedIn growth for founders and industry leaders.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Contact</h4>
                        <div className="space-y-3 inline-block md:block text-left">
                            <a href="mailto:Support@insybletech.com" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                                <Mail className="w-4 h-4 text-[#0A66C2]" />
                                <span className="text-sm font-bold tracking-tight">Support@insybletech.com</span>
                            </a>
                            <a href="tel:+919812233346" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                                <Phone className="w-4 h-4 text-[#0A66C2]" />
                                <span className="text-sm font-bold tracking-tight">+91 98122 33346</span>
                            </a>
                        </div>
                    </div>

                    {/* Location & Socials */}
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Location</h4>
                        <div className="flex items-start justify-center md:justify-start gap-3 text-gray-500 mb-6">
                            <MapPin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                            <span className="text-sm font-bold tracking-tight uppercase">Haryana, India</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                        © 2026 Insyble Tech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;