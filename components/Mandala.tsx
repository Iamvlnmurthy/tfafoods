'use client';

export default function Mandala({ className = "", opacity = 0.1 }: { className?: string; opacity?: number }) {
    return (
        <div className={`pointer-events-none ${className}`} style={{ opacity }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow text-[var(--color-royal-gold)] fill-current">
                <path d="M100 0 C110 30 130 30 140 0 C150 40 190 50 200 60 C160 80 160 100 200 120 C170 140 170 180 140 200 C120 160 80 160 60 200 C30 170 30 130 0 120 C40 100 40 80 0 60 C30 50 50 10 60 0 C80 30 120 30 140 0 Z"
                    fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 2" />
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                {/* Petals */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <g key={angle} transform={`rotate(${angle} 100 100)`}>
                        <path d="M100 60 Q115 40 100 20 Q85 40 100 60" fill="currentColor" fillOpacity="0.2" />
                        <path d="M100 80 Q105 70 100 60 Q95 70 100 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </g>
                ))}
            </svg>
        </div>
    );
}
