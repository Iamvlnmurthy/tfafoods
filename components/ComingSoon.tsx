'use client';

import { motion } from 'framer-motion';

export default function ComingSoon() {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-[var(--color-paper)]">
            {/* Messy Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-2xl mx-4 text-center"
            >
                <h3 className="text-6xl md:text-8xl font-hand text-[var(--color-ink)] mb-4 rotate-2">
                    Warning: <span className="text-[var(--color-rose)]">Kitchen Chaos!</span>
                </h3>

                <div className="bg-white p-8 border-sketch shadow-xl transform -rotate-1 relative">
                    {/* Grease spot decoration */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl pointer-events-none" />

                    <p className="text-2xl font-hand text-stone-600 mb-6">
                        Mom is experimenting with something new (and potentially messy).
                        Stay tuned for more delicious disasters turned masterpieces!
                    </p>

                    <form className="flex gap-2 max-w-sm mx-auto">
                        <input
                            type="email"
                            placeholder="Join the taste test crew..."
                            className="flex-1 px-4 py-2 font-sans rounded-lg border-2 border-gray-200 focus:border-[var(--color-ink)] outline-none bg-[var(--color-paper)]"
                        />
                        <button className="px-6 py-2 bg-[var(--color-ink)] text-white font-hand text-xl rounded-lg hover:bg-[var(--color-leaf-dark)] transition-colors">
                            Sign Me Up!
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
