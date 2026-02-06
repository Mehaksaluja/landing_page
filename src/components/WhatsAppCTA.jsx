import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
    const phoneNumber = "919812233346";
    const message = "I am interested to grow my LinkedIn account.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const cta = (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-8 right-8 z-[9999] flex flex-col items-end"
        >
            {/* Message preview - shows when hovering the CTA */}
            <div className="pointer-events-none absolute bottom-full right-0 mb-2 hidden w-72 rounded-xl border border-white/10 bg-gray-900/95 px-4 py-3 shadow-xl backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 md:block md:translate-y-2">
                <p className="text-sm leading-snug text-gray-300 line-clamp-3">
                    "{message}"
                </p>
            </div>

            {/* Blue pill button */}
            <motion.span
                initial={false}
                whileHover="hover"
                whileTap="tap"
                variants={{
                    hover: {
                        width: 'auto',
                        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                    },
                    tap: { scale: 0.97 },
                }}
                className="flex items-center overflow-hidden rounded-full bg-[#25D366] text-white transition-shadow duration-300 hover:bg-[#20BD5A]"
                style={{
                    width: 56,
                    boxShadow: '0 10px 40px rgba(37, 211, 102, 0.4)',
                }}
            >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center md:h-16 md:w-16">
                    <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" strokeWidth={0} />
                </span>
                <motion.span
                    variants={{
                        hover: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.3, delay: 0.05 },
                        },
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    className="whitespace-nowrap pr-5 text-sm font-semibold"
                >
                    Chat on WhatsApp
                </motion.span>
            </motion.span>
        </motion.a>
    );

    return createPortal(cta, document.body);
};

export default WhatsAppCTA;
