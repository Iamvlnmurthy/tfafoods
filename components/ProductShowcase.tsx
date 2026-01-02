'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FloatingElement from './FloatingElement';
import OrderModal from './OrderModal';

export default function ProductShowcase() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center bg-[#fffefc]">
            {/* Background Scribbles */}
            <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
                <svg className="absolute top-20 left-10 w-64 h-64 text-[var(--color-sun)]" viewBox="0 0 200 200">
                    <path fill="currentColor" d="M45,-76C58,-69,68,-57,76,-44C84,-31,90,-16,89,-1C88,14,80,28,71,41C62,54,52,66,39,73C26,80,11,82,-3,81C-17,80,-34,76,-48,68C-62,60,-73,48,-79,34C-85,20,-86,4,-82,-10C-78,-24,-69,-38,-58,-50C-47,-62,-33,-72,-19,-76C-5,-80,9,-77,23,-74L45,-76Z" transform="translate(100 100)" />
                </svg>
                <svg className="absolute bottom-20 right-10 w-96 h-96 text-[var(--color-leaf)]" viewBox="0 0 200 200">
                    <path fill="currentColor" d="M42,-72C54,-64,63,-51,70,-38C77,-25,82,-12,79,0C76,12,65,24,56,36C47,48,40,60,30,68C20,76,7,80,-5,79C-17,78,-34,72,-47,63C-60,54,-69,42,-75,29C-81,16,-84,2,-82,-12C-80,-26,-73,-40,-62,-50C-51,-60,-36,-66,-22,-70C-8,-74,6,-76,19,-78L42,-72Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className="inline-block transform -rotate-2 bg-[var(--color-sun)] px-4 py-2 font-hand text-xl font-bold mb-6 text-[var(--color-ink)] shadow-sm">
                        ⭐ Healthy & Wholesome
                    </div>

                    <h2 className="text-4xl md:text-8xl font-hand text-[var(--color-ink)] mb-6 leading-[0.8]">
                        A Basket Full of <br />
                        <span className="text-[var(--color-leaf-dark)] pl-8">Goodness</span>
                    </h2>

                    <div className="p-8 border-sketch bg-white mb-8 relative">
                        <p className="text-xl font-sans text-stone-600 leading-relaxed">
                            Look at those almonds and pistachios! This isn't just a sweet; it's a
                            <b className="text-[var(--color-earth)] mx-1">power-packed meal</b> in a ball.
                            Perfect for trekkers, kids, and anyone who needs a delicious energy boost.
                        </p>
                        {/* Pin */}
                        <div className="absolute -top-3 left-1/2 w-6 h-6 rounded-full bg-red-400 shadow-sm border border-red-500" />
                    </div>

                    <div className="flex gap-3 flex-wrap font-hand text-2xl">
                        <span className="bg-white border-2 border-[var(--color-leaf)] px-4 py-1 rounded-full text-[var(--color-leaf-dark)] rotate-1">Loaded with Nuts</span>
                        <span className="bg-white border-2 border-[var(--color-rose)] px-4 py-1 rounded-full text-[var(--color-rose)] -rotate-1">Pure Ghee</span>
                        <span className="bg-white border-2 border-[var(--color-sky)] px-4 py-1 rounded-full text-[var(--color-sky)] rotate-2">Grandma's Style</span>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link href="/products/laddoo" className="inline-block bg-[var(--color-ink)] text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            View Details ➔
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-[var(--color-rose)] text-white px-8 py-3 rounded-full font-bold hover:bg-red-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-hand text-xl tracking-wide"
                        >
                            Order Now 🛍️
                        </button>
                    </div>

                    <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </motion.div>

                {/* Real Image Visual */}
                <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">

                    {/* The Basket */}
                    <FloatingElement duration={6} yOffset={25} className="relative z-20 w-fit h-fit">
                        <div className="relative group perspective-[1000px]">
                            <Link href="/products/laddoo" className="cursor-pointer block relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"> {/* Adjusted mobile width */}
                                <Image
                                    src="/images/laddoo-delight.png"
                                    alt="Basket of Dryfruit Laddoos"
                                    fill
                                    sizes="(max-width: 768px) 280px, 450px"
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </Link>

                            {/* Sticker Effect */}
                            <div className="absolute -bottom-4 -right-4 bg-white p-2 shadow-lg rotate-[-5deg] border border-gray-100 hidden group-hover:block transition-all">
                                <span className="font-hand text-xl bg-yellow-100 px-2">Freshly Made!</span>
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Orbiting Elements (Simulate falling nuts) */}
                    {[
                        { color: 'bg-[#fef3c7]', size: 'w-4 h-6', x: -120, y: -80, delay: 0, rounded: 'rounded-[40%]' }, // Almond shape
                        { color: 'bg-[#bef264]', size: 'w-5 h-5', x: 140, y: -40, delay: 0.5, rounded: 'rounded-full' }, // Pistachio
                        { color: 'bg-[#d97706]', size: 'w-3 h-3', x: -60, y: 140, delay: 1, rounded: 'rounded-full' }, // Crumb
                    ].map((d, i) => (
                        <FloatingElement key={i} delay={d.delay} duration={5 + i} className="absolute z-10 w-fit h-fit">
                            <motion.div
                                className={`${d.size} ${d.color} ${d.rounded} shadow-sm opacity-80`}
                                style={{ x: d.x, y: d.y }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </FloatingElement>
                    ))}

                </div>

            </div>
        </section>
    );
}
