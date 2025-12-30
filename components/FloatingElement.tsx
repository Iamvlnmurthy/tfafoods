'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}

export default function FloatingElement({
    children,
    delay = 0,
    duration = 3,
    yOffset = 15,
    className = '',
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-yOffset, yOffset, -yOffset],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
