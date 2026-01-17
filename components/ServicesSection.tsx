'use client';

import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';
import type { Dictionary } from '@/lib/types';

import certificateImage from '@/public/assets/images/sports-certificate.png';
import executiveImage from '@/public/assets/images/executive-checkup.png';

interface ServicesSectionProps {
    dictionary: Dictionary;
    locale: string;
}

export default function ServicesSection({ dictionary, locale }: ServicesSectionProps) {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative background elements - Subtle and abstract */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[40rem] h-[40rem] bg-teal-100/30 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40rem] h-[40rem] bg-indigo-100/30 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                            {locale === 'es' ? 'Nuevos Servicios' : 'New Services'}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#182121] tracking-tight mb-6">
                        {dictionary.services.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        {dictionary.services.subtitle}
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Service 1: Certificados Médicos - Image Left */}
                    <div className="group relative">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Image Container */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                    <Image
                                        src={certificateImage}
                                        alt={dictionary.services.certificates.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg shadow-teal-900/10 border border-white/50 max-w-[200px]">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-teal-50 rounded-full text-teal-600">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="font-bold text-gray-900 text-sm">{locale === 'es' ? 'Certificado Oficial' : 'Official Certificate'}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-teal-500 w-full h-full rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative blob behind */}
                                <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-teal-500/10 rounded-[2.5rem] translate-x-4 translate-y-4"></div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#182121] mb-6 flex items-center gap-4">
                                        {dictionary.services.certificates.title}
                                        <div className="h-px flex-1 bg-gray-200"></div>
                                    </h3>

                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {dictionary.services.certificates.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                                        {dictionary.services.certificates.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-600">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={getWhatsAppLink(locale)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => sendWhatsAppConversion('service_certificates')}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-[#182121] text-white font-semibold rounded-2xl hover:bg-teal-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-900/20"
                                    >
                                        {locale === 'es' ? 'Agendar Valoración' : 'Schedule Assessment'}
                                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Chequeos Ejecutivos - Image Right */}
                    <div className="group relative">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            {/* Image Container */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                    <Image
                                        src={executiveImage}
                                        alt={dictionary.services.executive.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Floating Glass Card */}
                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg max-w-[180px] border border-white/50">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Premium Service</span>
                                            <div className="flex items-center justify-between">
                                                <span className="text-teal-900 font-bold text-xl">VIP</span>
                                                <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative blob behind */}
                                <div className="absolute -z-10 bottom-10 -right-10 w-full h-full border-2 border-indigo-500/10 rounded-[2.5rem] -translate-x-4 -translate-y-4"></div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#182121] mb-6 flex items-center gap-4">
                                        <div className="h-px flex-1 bg-gray-200"></div>
                                        {dictionary.services.executive.title}
                                    </h3>

                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed text-right md:text-left">
                                        {dictionary.services.executive.description}
                                    </p>

                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-10">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {dictionary.services.executive.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                    <div className="w-10 h-10 rounded-full bg-[#182121] flex items-center justify-center flex-shrink-0 text-[#d4af37]">
                                                        <span className="font-bold text-sm text-white">0{idx + 1}</span>
                                                    </div>
                                                    <span className="text-gray-800 font-medium text-sm lg:text-base">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-end md:justify-start">
                                        <a
                                            href={getWhatsAppLink(locale)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => sendWhatsAppConversion('service_executive')}
                                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#182121] border-2 border-[#182121] font-bold rounded-2xl hover:bg-[#182121] hover:text-white transition-all duration-300 group-hover:shadow-xl"
                                        >
                                            {locale === 'es' ? 'Solicitar Información VIP' : 'Request VIP Info'}
                                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
