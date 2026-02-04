import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
    const phoneNumber = "919812233346";
    const message = "Hi, I'm interested in the Velocity Framework for my LinkedIn growth.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-white"
        >
            <MessageCircle size={28} fill="currentColor" />
        </a>
    );
};

export default WhatsAppCTA;