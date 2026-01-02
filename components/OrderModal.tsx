'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PACKAGES = [
    { id: 'small', weight: '250gms', price: 399 },
    { id: 'medium', weight: '500gms', price: 798 },
    { id: 'large', weight: '1Kg', price: 1596 },
];

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    mobile,
                    quantity: selectedPackage.weight,
                    price: selectedPackage.price,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-[#fffefc] w-full max-w-lg rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden border-4 border-dashed border-[var(--color-ink)]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>

                        {!isSuccess ? (
                            <>
                                <h2 className="text-3xl font-hand font-bold text-center mb-2 text-[var(--color-ink)]">
                                    Place Your Order! 📦
                                </h2>
                                <p className="text-center text-stone-500 mb-8 font-sans">
                                    Freshness guaranteed! Fill details below.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Details */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--color-ink)] mb-1 font-sans">Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border-2 border-stone-200 focus:border-[var(--color-leaf)] focus:outline-none transition-colors font-sans"
                                                placeholder="Your Good Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--color-ink)] mb-1 font-sans">Mobile Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border-2 border-stone-200 focus:border-[var(--color-leaf)] focus:outline-none transition-colors font-sans"
                                                placeholder="10-digit Mobile Number"
                                            />
                                        </div>
                                    </div>

                                    {/* Package Selection */}
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--color-ink)] mb-3 font-sans">Select Quantity</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {PACKAGES.map((pkg) => (
                                                <button
                                                    key={pkg.id}
                                                    type="button"
                                                    onClick={() => setSelectedPackage(pkg)}
                                                    className={`
                                                        relative p-3 rounded-xl border-2 transition-all text-center
                                                        ${selectedPackage.id === pkg.id
                                                            ? 'border-[var(--color-rose)] bg-red-50 text-[var(--color-rose)] shadow-md scale-105'
                                                            : 'border-stone-200 hover:border-stone-300 text-stone-600 hover:bg-stone-50'
                                                        }
                                                    `}
                                                >
                                                    <div className="font-bold text-lg font-hand">{pkg.weight}</div>
                                                    <div className="text-sm font-sans font-semibold">₹{pkg.price}</div>
                                                    {selectedPackage.id === pkg.id && (
                                                        <div className="absolute -top-2 -right-2 bg-[var(--color-rose)] text-white rounded-full p-0.5">
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Total and Submit */}
                                    <div className="pt-4 border-t border-dashed border-stone-300">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="font-hand text-xl text-stone-600">Total Amount:</span>
                                            <span className="font-hand text-3xl font-bold text-[var(--color-earth)]">₹{selectedPackage.price}</span>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[var(--color-ink)] text-white py-3 rounded-xl font-bold font-sans text-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Confirm Order ➔'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-[var(--color-leaf)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <span className="text-4xl">📞</span>
                                </div>
                                <h3 className="text-3xl font-hand font-bold text-[var(--color-ink)] mb-2">
                                    Order Received!
                                </h3>
                                <p className="text-xl font-hand text-[var(--color-leaf-dark)]">
                                    We will call you soon..
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 text-sm text-stone-400 hover:text-stone-600 underline font-sans"
                                >
                                    Close Window
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
