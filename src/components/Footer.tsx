import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-outline-variant/10 bg-background pt-24 pb-16 px-6 md:px-16 overflow-hidden relative">

            {/* Giant luxury watermarked backtext */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10vw] font-display font-extrabold text-outline-variant/5 select-none tracking-[0.2em] whitespace-nowrap pointer-events-none uppercase">
                Visual History
            </div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand block */}
                <div className="text-center md:text-left space-y-2">
                    <span className="font-display text-2xl text-on-surface tracking-tighter">StoryCreator</span>
                    <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest leading-relaxed">
                        Archiving high-end cinematic weddings & lifestyles.
                    </p>
                </div>

                {/* Quick link tags */}
                <div className="flex flex-wrap items-center justify-center gap-8 font-sans text-xs uppercase tracking-widest">
                    <Link
                        href="/"
                        className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        href="/the-work#motion"
                        className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                        The Work
                    </Link>
                    <Link
                        href="/inquire"
                        className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                        Contact
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                        Instagram
                    </Link>
                </div>

                {/* Copyright badge */}
                <div className="text-center md:text-right font-mono text-[9px] text-outline uppercase tracking-widest">
                    StoryCreator Studio © {new Date().getFullYear()} — All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}