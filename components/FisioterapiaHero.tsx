'use client';

import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images_fisioterapia/6_vertical.jpeg';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';

import { 
  Home, 
  Activity, 
  Sparkles, 
  Stethoscope, 
  MessageSquare, 
  HelpCircle, 
  Phone 
} from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface FisioterapiaHeroProps {
  dictionary: any;
  locale: string;
  breadcrumbItems: BreadcrumbItem[];
}

const ConcaveCorner = ({ className }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none fill-current ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path d="M 0 0 L 0 100 L 100 100 A 100 100 0 0 1 0 0 Z" />
  </svg>
);

const NavItem = ({ href, label, icon: Icon, active }: { href: string; label: string; icon: any; active?: boolean }) => (
  <a
    href={href}
    className="group/item flex items-center justify-end gap-0 hover:gap-4 transition-all duration-500 py-3"
  >
    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap overflow-hidden transition-all duration-500 w-0 group-hover:w-32 text-right opacity-0 group-hover:opacity-100 ${active ? 'text-[#6ba5a5]' : ''}`}>
      {label}
    </span>
    <div className={`relative flex items-center justify-center transition-all duration-500 w-10 h-10 rounded-xl ${active ? 'bg-[#6ba5a5] text-white shadow-[0_0_15px_rgba(107,165,165,0.5)]' : 'bg-white/5 text-white/40 group-hover/item:bg-white/10 group-hover/item:text-white'}`}>
        <Icon className="w-5 h-5" />
        {active && (
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-l-full" />
        )}
    </div>
  </a>
);

export default function FisioterapiaHero({ dictionary, locale, breadcrumbItems }: FisioterapiaHeroProps) {
  const content = dictionary.fisioterapia?.hero;

  if (!content) return null;

  const navLinks = locale === 'es' ? [
    { label: 'Inicio', href: '#intro-fisioterapia', icon: Home },
    { label: 'Síntomas', href: '#sintomas-fisioterapia', icon: Activity },
    { label: 'Beneficios', href: '#beneficios-fisioterapia', icon: Sparkles },
    { label: 'Consulta', href: '#consultar-fisioterapia', icon: Stethoscope },
    { label: 'Testimonios', href: '#testimonios', icon: MessageSquare },
    { label: 'Preguntas', href: '#faqs-fisioterapia', icon: HelpCircle },
    { label: 'Contacto', href: '#contacto', icon: Phone },
  ] : [
    { label: 'Intro', href: '#intro-fisioterapia', icon: Home },
    { label: 'Symptoms', href: '#sintomas-fisioterapia', icon: Activity },
    { label: 'Benefits', href: '#beneficios-fisioterapia', icon: Sparkles },
    { label: 'When to consult', href: '#consultar-fisioterapia', icon: Stethoscope },
    { label: 'Testimonials', href: '#testimonios', icon: MessageSquare },
    { label: 'FAQs', href: '#faqs-fisioterapia', icon: HelpCircle },
    { label: 'Contact', href: '#contacto', icon: Phone },
  ];

  return (
    <section className="!bg-white pt-20 pb-12 w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Banner Container */}
        <div className="relative w-full h-[75vh] min-h-[600px] md:min-h-[700px] rounded-[2.5rem] md:rounded-[4rem] rounded-bl-none md:rounded-bl-none overflow-hidden group/hero">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={content.title}
              fill
              priority
              className="object-cover object-center transform transition-transform duration-[20s] group-hover/hero:scale-105 opacity-80"
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111818]/95 via-[#111818]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111818]/60 via-transparent to-transparent" />
          </div>

          {/* Minimalist Breadcrumbs */}
          <nav className="absolute top-10 left-8 md:left-16 lg:left-24 z-20 flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] font-bold">
            {breadcrumbItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.href ? (
                  <a href={item.href} className="text-white/50 hover:text-white transition-colors duration-300">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-[#6ba5a5]">{item.label}</span>
                )}
                {idx < breadcrumbItems.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <h1 className="!text-white !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]">
                {content.title}
                <span className="block text-[#6ba5a5] mt-2 drop-shadow-sm filter brightness-110"> {content.subtitle}</span>
              </h1>
              <div className="h-1 w-20 bg-[#6ba5a5] mb-8 rounded-full" />
              <p className="!text-white !text-lg md:text-2xl text-gray-200 leading-relaxed font-light max-w-2xl drop-shadow-md">
                {content.description}
              </p>
            </div>
          </div>

          {/* Minimalist Sidebar Navigation - Becomes wider on hover */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end z-20 group transition-all duration-500 hover:bg-black/20 hover:backdrop-blur-md px-6 py-10 rounded-l-[3rem] border-l border-y border-white/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <NavItem key={idx} href={link.href} label={link.label} icon={link.icon} active={idx === 0} />
              ))}
            </div>
          </div>

          {/* Cutout Container (Bottom Left) */}
          <div className="absolute bottom-0 left-0 bg-white pt-6 pr-6 md:pt-10 md:pr-10 rounded-tr-[2.5rem] md:rounded-tr-[4.5rem] z-20">

            {/* Outer Inverse Corners */}
            <ConcaveCorner className="w-6 h-6 md:w-12 md:h-12 bottom-full left-0 text-white" />
            <ConcaveCorner className="w-6 h-6 md:w-12 md:h-12 bottom-0 left-full text-white" />

            {/* CTA Button */}
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendWhatsAppConversion('fisioterapia_hero')}
              className="inline-flex items-center justify-center bg-[#111818] text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-[#6ba5a5] transition-all duration-500 hover:scale-105 w-full sm:w-auto text-center"
            >
              {locale === 'es' ? 'Agendar consulta' : 'Schedule appointment'}
              <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
