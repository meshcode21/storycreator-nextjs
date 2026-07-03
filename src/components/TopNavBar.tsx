"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Inbox } from 'lucide-react';


export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'The Works', href: '/archives' },
    { label: 'The Story', href: '/story' },
    { label: 'Inquire', href: '/inquire' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md backdrop-saturate-150 border-b border-outline-variant/10 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-5 max-w-360 mx-auto">
        {/* Brand Logo */}
        <Link
          href={NAV_ITEMS[0].href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-display text-2xl text-on-surface tracking-tighter hover:text-primary transition-colors cursor-pointer"
        >
          StoryCreator
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">

          {NAV_ITEMS.map((item) => {
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
          })}


        </div>

        {/* Action Items / Admin Inbox Toggle */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {/* {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-18.25 bg-background z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.tab}
              href={TAB_ROUTES[item.tab]}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-sans text-lg uppercase tracking-widest cursor-pointer ${isActive(item.tab) ? 'text-primary' : 'text-on-surface-variant'
                }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={TAB_ROUTES.inbox}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center space-x-2 px-6 py-2 border cursor-pointer ${isActive('inbox') ? 'border-primary text-primary' : 'border-outline-variant/40'
              }`}
          >
            <Inbox className="w-4 h-4" />
          </Link>

          <Link
            href={TAB_ROUTES.inquire}
            onClick={() => setMobileMenuOpen(false)}
            className="border border-primary px-8 py-3 font-sans text-xs uppercase tracking-widest text-primary cursor-pointer"
          >
            [ Quick Inquiry ]
          </Link>
        </div>
      )} */}
    </nav>
  );
}