"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize, Clapperboard } from 'lucide-react';

const cinematicFrames = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGa5vQTzng64WcAl_tIOL0XWdrURHr_H6G9G5dBr7kgvIf7CvHfsF5_8M7WwfzZZSDoYWrxQdDDJgGGPOrmRZWt1sRu-2LhKgmc6tecrbZkZDusGd-BalmF2ZTtzeKE3pWv__R2h-aYOoF9X2EjlIlmdLpfr1Q0gxRhYLuICORsc84Rwwe26YQu99vJgQd0dxa63HjCf3wpYAD5MIRcj3p9XGn3lbD952dzQ-mw9eBc9BTiLDwJxZXqPAzHZMOAaMWZr_J566zIYjd',
    alt: 'Olive grove wedding scene',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxRyb48mTLwxKUPlIX4dBnHojASWnN4KoFDGtM4ddOucf3wUMrIOX6W1u_HNZG9rMIZ6on5l209GsroExeBssIvsBVmQzNzRp3P-ypo_RxYdu6S8GghRLOGDG5EXKmOBCoJOUGXFZ-sUMiKLk4_7Ck0C7kuAvnBAlzDQzZMrVTkVZfQNvfZTPo1M-fD3rLEEnNFDYyRO8nlv91px9sF4uFLvlTSYvJdNV8cM_Zb_mf7CvSL9U5Mz_KHnZ0DHmIH6RjgnfJMhAbv-zv',
    alt: 'Library interior wedding scene',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuJjkMv5GC2OF3ZnneaWiP-CXf6wQqgV66PFUnjfVKBfEqhwCdHP32hQxHFtwRlIflELXSmm12dnDHmUEzEC61jSnlhBk8tib7XgbLgMOs3vkCYE-y_X6GZY_w7D7idccR2EmTyJGGzmFCTkQEVVT5sdB2aTOLc8_Qt-6n0EWC0r0AhVeqBL-wxw6J1fXxbTgtKe-kobqAta5B42707xQf4DcAtOFN2mTvW16Q2gxhqeBsnlunQSaehyl7pIFXpc8Wn2_sMv77xljq',
    alt: 'Amalfi Coast wedding scene',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHCtrufOWsf7DuFfCS9Swvz5FjMM3ln0ealY3t34olJH9PoHGAC4dM41OMhllf0PCZsI1tkJ6hCKJ3EO12gGSMhGVx93cv9tu9WyZFWYdiUuzV9IB6Ew0QHkrT9pY2gYXAt-1Ffb_wF2jhPF9lCdv6gtlJZrqGowQKMyvC5WGwKh0gbNY4qSjAUKMuQla5sxJRcTJTNWqb4oRDZEZiiR4rJSjNQJ8IfacnlZ7FyRS5lRgs8CoRj5ZRrvltS1IjSLtMzisWvB6rbZXX',
    alt: 'Candle-lit banquet wedding scene',
  },
];

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(98);
  const duration = 255;
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          const nextTime = prev + 1;
          setProgress((nextTime / duration) * 100);
          return nextTime;
        });

        setActiveFrame((prev) => (prev + 1) % cinematicFrames.length);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    setProgress(clickRatio * 100);
    setCurrentTime(Math.floor(clickRatio * duration));
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-360 mx-auto overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary block">
          Visual Showreel
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-on-surface">
          TIMELINESS IN EVERY FRAME
        </h2>
        <div className="w-16 h-px bg-outline-variant/60 mx-auto" />
      </div>

      {/* Advanced Interactive Cinema Player Card */}
      <div className="w-full max-w-5xl mx-auto relative group cinematic-glow border border-outline-variant/10">
        <div className="aspect-video w-full bg-surface-dim relative overflow-hidden">
          {/* Active Cinematic Image Frame(s) — cross-fade stack */}
          {cinematicFrames.map((frame, index) => (
            <div
              key={frame.src}
              className="absolute inset-0 transition-opacity duration-1200 ease-out"
              style={{
                opacity: index === activeFrame ? 1 : 0,
                filter: isPlaying ? 'brightness(0.95)' : 'brightness(0.5) blur(1px)',
              }}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                priority={index === 0}
                className="object-cover object-center scale-100 group-hover:scale-102 transition-transform duration-1200 ease-out"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          ))}

          {/* Frosted vignette card shadows */}
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-black/40 pointer-events-none z-10" />

          {/* Audio Visualization bars when playing */}
          {isPlaying && (
            <div className="absolute top-6 right-6 flex items-end space-x-1 h-6 z-20 bg-background/30 backdrop-blur-md p-2 rounded border border-outline-variant/10">
              <div className="w-1 bg-primary animate-pulse h-4" />
              <div className="w-1 bg-primary animate-pulse h-2" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 bg-primary animate-pulse h-5" style={{ animationDelay: '0.4s' }} />
              <div className="w-1 bg-primary animate-pulse h-3" style={{ animationDelay: '0.1s' }} />
            </div>
          )}

          {/* Interactive Play/Pause Big overlay Trigger */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
              className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center bg-background/40 backdrop-blur-md hover:bg-primary/20 hover:scale-110 hover:border-primary transition-all duration-500 cursor-pointer group"
            >
              {isPlaying ? (
                <Pause className="text-primary w-8 h-8 transition-transform group-hover:scale-95" />
              ) : (
                <Play className="text-primary w-8 h-8 translate-x-1 transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>

          {/* Bottom Control Bar Panel */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-linear-to-t from-background/95 to-transparent z-20 flex flex-col gap-3 transition-opacity duration-300">
            {/* Seeker Track */}
            <div
              onClick={handleSeek}
              className="w-full h-1 bg-outline-variant/40 hover:h-2 transition-all duration-300 rounded cursor-pointer relative"
            >
              <div
                className="h-full bg-primary relative rounded"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-on-surface rounded-full scale-0 hover:scale-100 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Media control row */}
            <div className="flex flex-wrap items-center justify-between text-on-surface font-sans text-xs">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:text-primary transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    setProgress(0);
                  }}
                  className="p-1 hover:text-primary transition-colors cursor-pointer"
                  title="Replay"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <span className="text-on-surface-variant text-[11px] font-mono tracking-wider">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="hidden sm:flex items-center space-x-2 text-primary font-mono text-[10px] uppercase tracking-[0.2em]">
                <Clapperboard className="w-3.5 h-3.5 text-primary/80" />
                <span>Julian Vance — Showreel Portfolio Cut</span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 hover:text-primary transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => alert('Cinema theater mode enabled. Open app in a new tab for a full browser scale!')}
                  className="p-1 hover:text-primary transition-colors cursor-pointer"
                  title="Cinema Mode"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}