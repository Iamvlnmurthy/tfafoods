'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComingSoon() {
    return (
        <section className="relative py-16 flex items-center justify-center overflow-hidden bg-[var(--color-paper)]">
            {/* Messy Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-2xl mx-4 text-center"
            >
                <h3 className="text-6xl md:text-8xl font-hand text-[var(--color-ink)] mb-4 rotate-2">
                    Caution: <span className="text-[var(--color-rose)]">Flour Explosion!</span>
                </h3>

                <div className="bg-white p-6 border-sketch shadow-xl transform -rotate-1 relative flex flex-col items-center">
                    {/* Grease spot decoration */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl pointer-events-none" />

                    <div className="relative w-full max-w-md aspect-square mb-6">
                        <Image
                            src="/images/kitchen-chaos.png"
                            alt="Mom in the kitchen chaos"
                            fill
                            className="object-contain rounded-lg"
                            unoptimized
                        />
                    </div>

                    <a
                        href="https://www.instagram.com/thefamilyadventure.in?igsh=MWNxNWQ5MTlyY3RxOQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[var(--color-ink)] text-white font-hand text-xl rounded-lg hover:bg-[#E1306C] transition-colors flex items-center gap-2"
                    >
                        <span>Follow the Drama on Instagram! 📸</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
