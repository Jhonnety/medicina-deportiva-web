'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Dictionary } from '@/lib/types';

interface HeaderProps {
  dictionary: Dictionary;
  locale: string;
}

export default function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}#tratamientos`, label: dictionary.nav.treatments },
    { href: `/${locale}#sobre-mi`, label: dictionary.nav.about },
    { href: `/${locale}#testimonios`, label: dictionary.nav.testimonials },
    { href: `/${locale}#contacto`, label: dictionary.nav.contact },
  ];

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const currentPath = pathname.replace(`/${locale}`, '');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 transition-transform hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt="Dr. James Madrid Logo"
              width={80}
              height={70}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}${currentPath}`}
              className="px-3 py-1.5 text-gray-600 hover:text-primary font-medium uppercase text-sm border border-gray-300 rounded-lg hover:border-primary transition-all duration-200"
            >
              {otherLocale}
            </Link>

            {/* CTA Button */}
            <a
              href={`/${locale}#contacto`}
              className="btn btn-primary px-6 py-2.5"
            >
              {dictionary.nav.schedule}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <Link
                href={`/${otherLocale}${currentPath}`}
                className="text-gray-600 hover:text-primary font-medium uppercase text-sm py-2"
              >
                {otherLocale === 'es' ? 'Español' : 'English'}
              </Link>

              <a
                href={`/${locale}#contacto`}
                className="btn btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {dictionary.nav.schedule}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
