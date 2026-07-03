"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PORTRAITS = {
  default: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7OA_NwM2CRUfILouomlJji8vspMnr2Dg2n8JgxlvrT9Ti0xzR7XMnlG_OjmmSH2uyAQgdCjnrWvC_OhLpJw4R9ikpMqqfYUCMRDWiF1DyaPQ-6Ym0gOMW0E1pUaR8dyvYKoExSOCH1mn5H88MSogSRfxqAJua62vyLbPNKQlpGFwNKoaZJTxJAGusuDf37YwXHD5tpjSAl_sWXjhwQq51fLA4NL2ED68iVdJrEy7RbCvvEw7jJ8zpoUDrKGo1NtKpY0Yv9SR8fybr',
  alternate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA21HscJI9dh4KeTzBkE5n-w2HVjyTMSvQRQsLMhj2nEPUoQdsO1oRzzlbPdFL4yHMmtQjeb9x9ueQoZrSaMV8uoSJZIAFdCp-ywwIwfSMiSDckKqU9HElDpKQuSsFgMSCAd_HNYcOZ183ZlND5sL9Bs2DdKJen9xNaOr2EHJMySSObY2nuYizmilNO3KqX79di3jg6hRU_ir2WQL54GDYFo-w_YZDNoOapJDBo4ulb29HU1XgA2MzMPJOF4ecGWDQiw6NEQXeSDMjs',
};

export default function StoryView() {
  const [hoverPortrait, setHoverPortrait] = useState(false);

  const stats = [
    { value: '5+', label: 'Years Archiving Love' },
    { value: '50+', label: 'Stories Told' },
    { value: '12', label: 'Cinematic Accolades' },
  ];

  const philosophies = [
    {
      title: 'Unobtrusive Presence',
      description: 'We blend entirely into the background. No bulky rigs, no intrusive lights. This allows us to archive authentic laughs, raw tears, and pure candid movements.',
    },
    {
      title: 'Cinematic Lighting',
      description: 'We respect natural shadows and ambient glows. By prioritizing atmospheric, painterly lighting profiles, we craft stories with cinematic depth and timeless feel.',
    },
    {
      title: 'Temporal Soundscapes',
      description: 'A film is only as alive as its sound. We capture the gentle rustle of leaves, the quiet deep breath before a vow, and weave them into an organic editorial soundtrack.',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 md:px-16 max-w-360 mx-auto min-h-screen">

      {/* Editorial Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">

        {/* Left Column: Interactive portrait */}
        <div className="lg:col-span-5 space-y-4">
          <div
            onMouseEnter={() => setHoverPortrait(true)}
            onMouseLeave={() => setHoverPortrait(false)}
            className="w-full aspect-4/5 overflow-hidden relative border border-outline-variant/20 rounded bg-surface-dim cinematic-glow group cursor-pointer"
          >
            {/* Base Portrait */}
            <Image
              src={PORTRAITS.default}
              alt="Filmmaker Julian Vance portrait"
              fill
              priority
              className={`object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 ${
                hoverPortrait ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            {/* Alternate Portrait (crossfades in on hover) */}
            <Image
              src={PORTRAITS.alternate}
              alt="Filmmaker Julian Vance alternate portrait"
              fill
              className={`object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 ${
                hoverPortrait ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            {/* Subtle light overlay card lines */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-6 left-6 text-on-surface z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Julian Vance</span>
              <h4 className="font-display text-sm tracking-widest uppercase mt-0.5">Lead Cinematographer</h4>
            </div>
          </div>
          <p className="font-sans text-[10px] text-center text-outline uppercase tracking-widest">
            [ Hover or tap to capture alternate frame ]
          </p>
        </div>

        {/* Right Column: Bio contents */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary block">
              The Face Behind the Lens
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-on-surface uppercase tracking-tight leading-tight">
              An Archivist of Raw & Unscripted Emotion
            </h2>
            <div className="w-20 h-[1.5px] bg-primary/40 mt-4" />
          </div>

          <div className="space-y-6 text-sm text-on-surface-variant font-light leading-relaxed tracking-wider">
            <p>
              Cinematography is more than just recording motion; it is the art of pausing time. Over the past five years, I have traveled to European villas, Mediterranean coasts, and intimate chapels to archive the stories of couples who value authenticity above all.
            </p>
            <p>
              My approach is heavily rooted in classical film noir and French New Wave aesthetics—focusing on raw lighting, moody contrasts, and the quiet, atmospheric intervals between grand gestures.
            </p>
          </div>

          {/* Stats Indicators Grid */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="font-display text-3xl md:text-4xl text-primary font-bold block mb-1">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-outline block leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Philosophies Accordion/Grid */}
          <div className="space-y-6">
            <h3 className="font-display text-lg text-on-surface tracking-widest uppercase">
              Our Creative Code
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophies.map((phil, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-outline-variant/15 rounded bg-surface-dim hover:border-primary/20 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-primary font-bold block mb-2">0{idx + 1} //</span>
                  <h4 className="font-display text-sm text-on-surface tracking-wider mb-2 uppercase">{phil.title}</h4>
                  <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed font-light">
                    {phil.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Link to Inquiry Reservation */}
          <div className="pt-4 flex justify-start">
            <Link
              href="/inquire"
              className="px-12 py-4 border border-primary text-background bg-primary hover:bg-background hover:text-primary transition-all duration-500 font-sans text-xs uppercase tracking-widest font-semibold cursor-pointer inline-block"
            >
              Let&rsquo;s Tell Yours
            </Link>
          </div>
        </div>

      </div>

      {/* Famous Quote Footer segment */}
      <div className="mt-24 pt-12 border-t border-outline-variant/10 text-center max-w-3xl mx-auto">
        <p className="font-display text-lg sm:text-xl md:text-2xl text-secondary italic font-light leading-relaxed">
          &ldquo;I believe that the most beautiful stories are found in the quiet intervals between the grand gestures.&rdquo;
        </p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mt-4">
          — JULIAN VANCE
        </span>
      </div>

    </div>
  );
}