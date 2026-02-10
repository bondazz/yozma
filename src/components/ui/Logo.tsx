'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    className?: string;
    lang?: string;
    variant?: 'full' | 'icon';
}

/**
 * BOND.AZ HYPER-REALISTIC CINEMATIC LOGO (V10 - THE LIVING EYE)
 * Features:
 * 1. Enlarged Hyper-realistic EYE with biological blinking animation.
 * 2. Multi-layered Volumetric Lightning with ionized air glow.
 * 3. Text 'Bond.az' reveals from 'z' to 'B' with electric flicker.
 */
export function Logo({ className = "", lang = "az", variant = 'full' }: LogoProps) {
    const letters = ['B', 'o', 'n', 'd', '.', 'a', 'z'];
    const lightningPath = "M95 50 L135 30 L165 60 L205 20 L255 70 L305 25 L375 55";

    return (
        <div className={`relative group inline-flex items-center select-none ${className}`}>
            <svg
                viewBox={variant === 'full' ? "0 0 480 100" : "0 0 100 100"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto overflow-visible transition-all duration-700 group-hover:scale-[1.03]"
                style={{
                    filter: 'hue-rotate(calc(var(--lightning-hue, 220) * 1deg - 220deg))'
                }}
            >
                <defs>
                    {/* Deep Iris Gradient */}
                    <radialGradient id="iris-depth-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="60%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#93C5FD" />
                    </radialGradient>

                    <linearGradient id="lightning-core-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>

                    {/* Filters */}
                    <filter id="eye-shimmer-glow">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="cinematic-lightning">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur3" />
                        <feMerge>
                            <feMergeNode in="blur3" />
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Clip for the Eye to allow blinking overlay */}
                    <clipPath id="eye-shape-clip">
                        <path d="M5 50C5 50 25 10 50 10C75 10 95 50 95 50C95 50 75 90 50 90C25 90 5 50 5 50Z" />
                    </clipPath>
                </defs>

                {/* --- 1. THE LIVING EYE (ENLARGED & REALISTIC) --- */}
                <motion.g
                    className="eye-master-group"
                    transform="translate(2, 0)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Sclera Shadow Background */}
                    <path
                        d="M5 50C5 50 25 10 50 10C75 10 95 50 95 50C95 50 75 90 50 90C25 90 5 50 5 50Z"
                        fill="#000"
                        fillOpacity="0.7"
                    />

                    {/* Eye Content (Clipped for Blink) */}
                    <g clipPath="url(#eye-shape-clip)">
                        {/* Organic Iris with Nerve Fibers */}
                        <g transform="translate(50, 50)" style={{ filter: 'url(#eye-shimmer-glow)' }}>
                            <motion.circle
                                r="24"
                                fill="url(#iris-depth-grad)"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            />
                            {[...Array(32)].map((_, i) => (
                                <line
                                    key={i}
                                    x1="0" y1="10" x2="0" y2="24"
                                    stroke="white"
                                    strokeWidth="0.4"
                                    strokeOpacity="0.2"
                                    transform={`rotate(${i * 11.25})`}
                                />
                            ))}

                            {/* Depth Pupil */}
                            <circle r="9" fill="#000" />
                            <motion.circle
                                r="4"
                                fill="white"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </g>

                        {/* Reflections (Lens) */}
                        <motion.ellipse
                            cx="38" cy="35" rx="8" ry="4"
                            fill="white"
                            fillOpacity="0.25"
                            transform="rotate(-20, 38, 35)"
                        />
                        <circle cx="65" cy="65" r="1.5" fill="white" fillOpacity="0.2" />

                        {/* --- BLINK OVERLAY --- */}
                        <motion.path
                            d="M0 0H100V100H0V0Z"
                            fill="#000"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: [0, 1, 0], opacity: [1, 1, 1] }}
                            transition={{
                                duration: 0.18,
                                repeat: Infinity,
                                repeatDelay: 6,
                                ease: "easeInOut",
                                times: [0, 0.5, 1]
                            }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </g>

                    {/* Eyelid Contours (Static) */}
                    <path
                        d="M5 50C5 50 25 10 50 10C75 10 95 50 95 50C95 50 75 90 50 90C25 90 5 50 5 50Z"
                        stroke="white"
                        strokeWidth="1"
                        strokeOpacity="0.2"
                    />
                </motion.g>

                {/* --- 2. MULTI-LAYERED VOLUMETRIC LIGHTNING --- */}
                <g className="lightning-fx" style={{ filter: 'url(#cinematic-lightning)' }}>
                    <motion.path
                        d={lightningPath}
                        stroke="#3B82F6"
                        strokeWidth="15"
                        strokeOpacity="0"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 0.3, 0.3, 0]
                        }}
                        transition={{ delay: 1, duration: 0.7 }}
                    />
                    <motion.path
                        d={lightningPath}
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0, 1, 0]
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.7,
                            times: [0, 0.3, 0.6, 0.7, 0.8, 1]
                        }}
                    />
                </g>

                {/* --- 3. THE 4X4 TEXT REVEAL (Perfect Letter Spacing) --- */}
                {variant === 'full' && (
                    <g className="brand-text" transform="translate(130, 62)">
                        {letters.map((char, index) => {
                            const reverseIndex = (letters.length - 1) - index;
                            let xPos = index * 42;
                            if (char === '.') xPos -= 10;
                            else if (index > 4) xPos -= 12;

                            return (
                                <motion.text
                                    key={index}
                                    x={xPos}
                                    y="0"
                                    fill={char === '.' || index > 4 ? "url(#lightning-core-grad)" : "white"}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{
                                        opacity: [0, 1, 0.4, 1],
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 1.5 + (reverseIndex * 0.12),
                                        duration: 0.5
                                    }}
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 950,
                                        fontSize: '56px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.02em',
                                        filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))'
                                    }}
                                >
                                    {char}
                                </motion.text>
                            );
                        })}
                        <motion.rect
                            x="0" y="15" height="1.5" width="270"
                            fill="url(#lightning-core-grad)"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 0.4 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        />
                    </g>
                )}
            </svg>

            <div className="absolute inset-0 -z-10 bg-blue-500/5 blur-[100px] rounded-full" />
        </div>
    );
}
