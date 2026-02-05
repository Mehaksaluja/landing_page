import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
    const phoneNumber = "919812233346";
    const message = "Hi, I'm interested in the Velocity Framework for my LinkedIn growth.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-8 right-8 z-[100] flex items-center justify-end"
        >
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
                className="flex items-center overflow-hidden rounded-full bg-[#25D366] text-white"
                style={{
                    width: 56,
                    boxShadow: '0 10px 40px rgba(37, 211, 102, 0.35)',
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
};

export default WhatsAppCTA;
