'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import FloatingElement from './FloatingElement';

export default function Hero() {
    // Mouse tilt
    const x = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        mouseY.set(yPct);
    }

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[var(--color-paper)]" // Increased top padding for mobile navbar clearance
            onMouseMove={handleMouseMove}
        >
            {/* Background Doodles (CSS Shapes) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Green Blob */}
                <FloatingElement duration={10} className="absolute top-[10%] left-[5%] opacity-40">
                    <div className="w-64 h-64 bg-[var(--color-leaf)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl" />
                </FloatingElement>
                {/* Warm Blob */}
                <FloatingElement duration={8} delay={2} className="absolute bottom-[20%] right-[10%] opacity-40">
                    <div className="w-80 h-80 bg-[var(--color-warm)] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
                </FloatingElement>
                {/* Blue Splash */}
                <FloatingElement duration={12} delay={1} className="absolute top-[20%] right-[20%] opacity-30">
                    <div className="w-48 h-48 bg-[var(--color-sky)] rounded-full blur-2xl" />
                </FloatingElement>
            </div>

            <motion.div className="relative z-10 text-center max-w-4xl px-4">

                {/* Main Logo - Polaroid Style */}
                <motion.div
                    className="relative inline-block mb-8"
                    style={{ rotateX, rotateY, perspective: 1000 }}
                >
                    <FloatingElement duration={6} yOffset={10} className="w-fit h-fit">
                        <div className="relative bg-white p-4 pb-16 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-gray-100">
                            <div className="relative w-56 h-56 md:w-80 md:h-80 overflow-hidden border-2 border-gray-100"> {/* Reduced mobile size */}
                                <Image
                                    src="/hero-family.jpg"
                                    alt="The Family Adventure"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-center font-hand text-3xl text-[var(--color-ink)] rotate-1">
                                The Family Adventure
                            </div>
                            {/* Tape */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 shadow-sm rotate-2 backdrop-blur-sm" />
                        </div>
                    </FloatingElement>

                    {/* Sticker/Doodle */}
                    <FloatingElement delay={0.5} duration={4} className="absolute -right-8 -bottom-8 w-fit h-fit">
                        <div className="w-20 h-20 bg-[var(--color-sun)] rounded-full flex items-center justify-center shadow-md font-hand text-xl font-bold rotate-12 text-[var(--color-ink)] border-2 border-dashed border-orange-300">
                            Since 2024!
                        </div>
                    </FloatingElement>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-8xl font-hand font-bold text-[var(--color-ink)] mb-4 text-shadow-notebook" // Reduced mobile text size
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    Making Memories...
                    <span className="block text-[var(--color-leaf-dark)] mt-2">One Laddoo at a Time!</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl font-sans text-stone-600 mb-6 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Welcome to our little family business. No robots, no factories. <br />
                    Just <b className="text-[var(--color-rose)]">Mom's recipe</b>, Dad's packing, and a whole lot of love.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)] font-hand text-2xl rounded-full shadow-lg border-2 border-[var(--color-paper)] ring-2 ring-[var(--color-ink)] hover:bg-[var(--color-leaf-dark)] transition-colors"
                >
                    Grab a Box of Joy!
                </motion.button>

            </motion.div>
        </section>
    );
}
