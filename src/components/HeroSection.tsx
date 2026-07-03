import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cinematic-overlay z-10" />
        <div className="w-full h-full opacity-65 scale-105 transition-all duration-3000 hover:scale-100 relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGa5vQTzng64WcAl_tIOL0XWdrURHr_H6G9G5dBr7kgvIf7CvHfsF5_8M7WwfzZZSDoYWrxQdDDJgGGPOrmRZWt1sRu-2LhKgmc6tecrbZkZDusGd-BalmF2ZTtzeKE3pWv__R2h-aYOoF9X2EjlIlmdLpfr1Q0gxRhYLuICORsc84Rwwe26YQu99vJgQd0dxa63HjCf3wpYAD5MIRcj3p9XGn3lbD952dzQ-mw9eBc9BTiLDwJxZXqPAzHZMOAaMWZr_J566zIYjd"
            alt="Moody atmospheric high-end wedding scene"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Floating typography contents */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-6">
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary block animate-fade-in opacity-80">
          Cinematic Legacy
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-on-surface leading-tight tracking-tight select-none">
          Crafting Living<br />Memories
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed tracking-wider">
          High-end cinematic wedding & event films of raw, moody, and timeless beauty.
        </p>

        {/* Call to action wrappers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/showreel"
            className="w-full sm:w-auto px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-500 uppercase tracking-widest text-xs font-semibold cursor-pointer select-none inline-block"
          >
            [ View Showreel ]
          </Link>

          <Link
            href="/the-work"
            className="w-full sm:w-auto px-10 py-4 border border-outline-variant/40 hover:border-outline text-on-surface-variant hover:text-on-surface transition-all duration-500 uppercase tracking-widest text-xs font-semibold cursor-pointer select-none inline-block"
          >
            Explore The Work
          </Link>
        </div>
      </div>

      {/* Anchor scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-outline">Scroll To Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}