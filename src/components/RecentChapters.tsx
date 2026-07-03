import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Map story types to their actual routes/query params — adjust to match your real routing
const STORY_ROUTES = {
  stills: '/the-work?type=stills',
  motion: '/the-work?type=motion',
} as const;

export default function RecentChapters() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-360 mx-auto">
      {/* Editorial Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary block mb-2">
            Selected Work
          </span>
          <h3 className="font-display text-3xl md:text-5xl text-on-surface">
            Recent Chapters
          </h3>
        </div>

        <Link
          href={STORY_ROUTES.stills}
          className="font-sans text-xs uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary pb-1 transition-all duration-300 cursor-pointer inline-block"
        >
          [ Explore All Stills ]
        </Link>
      </div>

      {/* Asymmetrical 12-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

        {/* Large Vertical Column (Left) */}
        <Link
          href={STORY_ROUTES.stills}
          className="md:col-span-7 h-150 bg-surface-dim relative group overflow-hidden border border-outline-variant/15 cursor-pointer block"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxRyb48mTLwxKUPlIX4dBnHojASWnN4KoFDGtM4ddOucf3wUMrIOX6W1u_HNZG9rMIZ6on5l209GsroExeBssIvsBVmQzNzRp3P-ypo_RxYdu6S8GghRLOGDG5EXKmOBCoJOUGXFZ-sUMiKLk4_7Ck0C7kuAvnBAlzDQzZMrVTkVZfQNvfZTPo1M-fD3rLEEnNFDYyRO8nlv91px9sF4uFLvlTSYvJdNV8cM_Zb_mf7CvSL9U5Mz_KHnZ0DHmIH6RjgnfJMhAbv-zv"
            alt="Evelyn & James - Paris wedding"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-2000 ease-out"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />

          <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-1 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <h4 className="font-display text-2xl md:text-3xl text-on-surface">Evelyn & James</h4>
            <span className="font-sans text-[10px] uppercase tracking-widest text-primary">Paris, France</span>
          </div>
        </Link>

        {/* Column of Stacked Horizontal items (Right) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Item 1: Details */}
          <Link
            href={STORY_ROUTES.stills}
            className="h-72 bg-surface-dim relative group overflow-hidden border border-outline-variant/15 cursor-pointer block"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeF9sKpOZOXoZkQHD4PFVQ0DMdGUhRplIFUR-1zZr-hgZtFGxBa5NA_J0Q7V9HhvpY80xixQm19oSIU4ChFNvgkDfXC198zrWPxoVoZMYwjvE4aKOeU2WMTPOZOxg7FU16fWYunhV5MPRw0KG5O6ojDJ-B2YrLoazcOsDNU5br08CvkeYPHbOcHoJFF467ScSA79mF-ZLCvPaVNuvHxQwsqtPEEdQ2bSlq9Ef9sJ5FMBa221r3cvlsXCKR1s8OcgIQvL2Elm94YhVS"
              alt="Groom watch adjustment detail shot"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-2000 ease-out"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />

            <div className="absolute bottom-6 left-6 transition-all duration-500">
              <h4 className="font-display text-lg text-on-surface tracking-wider">The Details</h4>
              <span className="font-sans text-[9px] uppercase tracking-widest text-primary">Intimate Textures</span>
            </div>
          </Link>

          {/* Item 2: The Departure */}
          <Link
            href={STORY_ROUTES.stills}
            className="h-72 bg-surface-dim relative group overflow-hidden border border-outline-variant/15 cursor-pointer block"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtS4Gtwj-4eFua3S8vxQqyE1r3oOAh6bH5rne5DEtX3PYAFShwwwYuHSV9MXYBFI5m71LZ79W4fnaLQ0_H4eZ2ftZNjR0xx9KipObbhVGUjN21nykIUCOebOkFLLhgWpyHWmU6OxIPrAfYyFywo_VjjbeKh_aXatHKhMxxjD36IKp-iz2QEgMMzHOmhqBCphcPKJyiZnfyXrnDKPXyJKmfSRVbwIMfb300jo9hmfnT-CODoNjIAPLYSHb30XE0FCNeQOoTVcEhDYrq"
              alt="Wedding departure getaway car"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-2000 ease-out"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />

            <div className="absolute bottom-6 left-6 transition-all duration-500">
              <h4 className="font-display text-lg text-on-surface tracking-wider">The Departure</h4>
              <span className="font-sans text-[9px] uppercase tracking-widest text-primary">Cinematic Night Series</span>
            </div>
          </Link>
        </div>

        {/* Asymmetrical row 2: Amalfi coastal landscapes */}
        <Link
          href={STORY_ROUTES.motion}
          className="md:col-span-12 h-125 bg-surface-dim relative group overflow-hidden border border-outline-variant/15 cursor-pointer mt-2 block"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJjkMv5GC2OF3ZnneaWiP-CXf6wQqgV66PFUnjfVKBfEqhwCdHP32hQxHFtwRlIflELXSmm12dnDHmUEzEC61jSnlhBk8tib7XgbLgMOs3vkCYE-y_X6GZY_w7D7idccR2EmTyJGGzmFCTkQEVVT5sdB2aTOLc8_Qt-6n0EWC0r0AhVeqBL-wxw6J1fXxbTgtKe-kobqAta5B42707xQf4DcAtOFN2mTvW16Q2gxhqeBsnlunQSaehyl7pIFXpc8Wn2_sMv77xljq"
            alt="Amalfi Coast coastal ceremony landscape"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-3000 ease-out"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />

          <div className="absolute bottom-10 left-10 right-10">
            <h4 className="font-display text-2xl md:text-3xl text-on-surface">Amalfi Dreams</h4>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary block mt-1">
              Coastal Cinematic Series
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}