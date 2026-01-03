'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Star, Truck, ShieldCheck, Leaf } from 'lucide-react';
import OrderModal from '@/components/OrderModal';

export default function LaddooProductPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[#fffefc] text-[var(--color-ink)] font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center absolute top-0 left-0 right-0 z-50">
                <Link href="/" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-bold text-lg">Back to Home</span>
                </Link>
            </nav>

            <div className="container mx-auto px-6 py-16 lg:py-32"> {/* Reduced mobile padding */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Product Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square transform rotate-[-1deg]">
                            <Image
                                src="/images/laddoo-delight.png"
                                alt="Premium Dryfruit Laddoo"
                                fill
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Floating Badge */}
                            <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3 font-hand text-lg z-10">
                                Bestseller!
                            </div>
                        </div>

                        {/* Decor Elements */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[var(--color-leaf)] rounded-full mix-blend-multiply opacity-20 animate-pulse" />
                        <div className="absolute top-10 -right-10 w-32 h-32 bg-[var(--color-sun)] rounded-full mix-blend-multiply opacity-20" />
                    </motion.div>

                    {/* Product Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-yellow-500 mb-2">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <span className="text-stone-400 text-sm ml-1">(120+ reviews)</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-hand mb-4 leading-tight text-stone-800">
                                My Mom's Dryfruit <br /><span className="text-[var(--color-leaf-dark)]">Power Balls</span>
                            </h1>
                            <p className="text-2xl font-bold text-stone-700"><span className="text-2xl font-hand text-[var(--color-earth)]">Starts at ₹399</span></p>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-[var(--color-sun)] pl-4">
                            A traditional recipe passed down through generations. Loaded with premium almonds, pistachios, cashews, and dates, bound together with pure A2 Ghee. No sugar, no preservatives, just pure energy.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <Leaf className="w-6 h-6 text-green-600" />
                                <span className="font-semibold text-stone-700">100% Organic</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                                <span className="font-semibold text-stone-700">No Preservatives</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-700">0%</div>
                                <span className="font-semibold text-stone-700">Added Sugar</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <Truck className="w-6 h-6 text-orange-600" />
                                <span className="font-semibold text-stone-700">Free Shipping</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 mt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-stone-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Order Now
                            </button>

                            {/* Promo Box */}
                            <div className="p-4 bg-yellow-50 border-2 border-dashed border-yellow-200 rounded-xl text-center">
                                <p className="font-hand text-xl text-yellow-800">
                                    🚚 Free shipping above ₹500
                                </p>
                                <p className="text-sm text-yellow-700 font-semibold mt-1">
                                    We are ready for bulk orders! 📦
                                </p>
                            </div>
                        </div>


                        <div className="mt-8 pt-8 border-t border-stone-100">
                            <h3 className="font-hand text-2xl mb-4">What's Inside?</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Kaju', 'Almond', 'Kajoor', 'Pista', 'Pumpkin Seeds', 'Sunflower Seeds', 'Walnut', 'Ghee'].map((item, i) => (
                                    <span key={i} className="px-3 py-1 bg-stone-100 rounded-full text-stone-600 text-sm font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
                <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </main>
    );
}
