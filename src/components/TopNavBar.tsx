"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Inbox } from 'lucide-react';


export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  type NavType = {
    label: string,
    href: string
  }

  const NAV_ITEMS: NavType[] = [
    { label: 'Home', href: '/' },
    { label: 'The Works', href: '/archives' },
    { label: 'The Story', href: '/story' },
    { label: 'Inquire', href: '/inquire' },
  ];

  function NavList({ items }: { items: NavType[] }) {
    return (
      items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 cursor-pointer ${isActive
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
              }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary animate-fade-in" />
            )}
          </Link>
        )
      })
    )
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md backdrop-saturate-150 border-b border-outline-variant/10 transition-all duration-500">
      <div className="w-full px-6 md:px-16 py-5 max-w-360 md:flex justify-between">
        {/* Brand Logo */}
        <div className='w-full flex justify-between items-center'>
          <Link
            href={NAV_ITEMS[0].href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-2xl text-on-surface tracking-tighter hover:text-primary transition-colors cursor-pointer"
          >
            StoryCreator
          </Link>

          {/* Action Items / Admin Inbox Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex gap-5'>
            <NavList items={NAV_ITEMS} />
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden ${mobileMenuOpen ? 'md:flex' : 'hidden'} gap-4`}>
          <div className='flex flex-col items-center gap-4 mt-3'>
            <NavList items={NAV_ITEMS} />
          </div>
        </div>
      </div>
    </nav>
  );
}