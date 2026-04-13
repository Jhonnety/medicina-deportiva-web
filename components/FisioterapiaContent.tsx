'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Activity, 
  Stethoscope, 
  Target, 
  Zap, 
  Dna, 
  ShieldCheck, 
  Brain, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';
import physioImg1 from '@/assets/images_fisioterapia/4_vertical.jpeg';
import physioImg2 from '@/assets/images_fisioterapia/7_vertical.jpeg';

interface FisioterapiaContentProps {
  dictionary: any;
  locale: string;
}

export default function FisioterapiaContent({ dictionary, locale }: FisioterapiaContentProps) {
  const content = dictionary.fisioterapia?.content;

  if (!content) return null;

  return (
    <div className="bg-white overflow-hidden">
      
      {/* What is Physiotherapy? */}
      <section id="intro-fisioterapia" className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-teal-500/5 rounded-[3rem] blur-2xl group-hover:bg-teal-500/10 transition-all duration-700" />
                <div className="relative h-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image
                        src={physioImg1}
                        alt={content.what_is.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>

            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-bold text-xs uppercase tracking-widest">
                    <Stethoscope className="w-4 h-4" />
                    {locale === 'es' ? 'Ciencia y Movimiento' : 'Science and Movement'}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !text-[#111818] leading-tight tracking-tighter">
                    {content.what_is.title}
                </h2>
                <p className="text-xl !text-gray-600 leading-relaxed font-light">
                    {content.what_is.text}
                </p>
                
                {/* Repositioned Highlight as a premium block */}
                <div className="bg-teal-50/50 border-l-4 border-teal-500 p-8 rounded-r-3xl relative overflow-hidden group">
                    <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-teal-500/10 group-hover:scale-110 transition-transform duration-500" />
                    <p className="relative z-10 text-gray-900 font-bold text-lg leading-relaxed">
                        {content.what_is.highlight}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-2">
                        <span className="text-4xl font-black text-teal-600/20 block">01</span>
                        <h4 className="font-bold !text-[#111818]">{locale === 'es' ? 'Precisión Médica' : 'Medical Precision'}</h4>
                    </div>
                    <div className="space-y-2">
                        <span className="text-4xl font-black text-teal-600/20 block">02</span>
                        <h4 className="font-bold !text-[#111818]">{locale === 'es' ? 'Base Científica' : 'Scientific Basis'}</h4>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* How it works - Step Process */}
      <section className="bg-[#111818] py-24 md:py-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-[120px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold !text-white mb-6">
                    {content.how_it_works.title}
                </h2>
                <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.how_it_works.steps.map((step: any, idx: number) => (
                    <div key={idx} className="relative group">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 overflow-hidden">
                                <span className="text-2xl font-black">{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold !text-white mb-4">{step.title}</h3>
                            <p className="!text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                        {idx < 3 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                                <ChevronRight className="w-8 h-8 text-white/10" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="sintomas-fisioterapia" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold !text-[#111818]">
                    {dictionary.fisioterapia?.symptoms?.title}
                </h2>
                <p className="text-xl !text-gray-600 font-light">
                    {dictionary.fisioterapia?.symptoms?.subtitle}
                </p>
            </div>

            <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-4">
                {dictionary.fisioterapia?.symptoms?.items.map((item: any, idx: number) => (
                    <div 
                        key={idx} 
                        className="group relative flex-1 hover:md:flex-[3] transition-all duration-700 ease-out overflow-hidden rounded-[2.5rem] cursor-default min-h-[300px] md:min-h-full shadow-lg"
                    >
                        <Image
                            src={[
                                '/assets/images/symptoms/artrosis_8.webp',
                                '/assets/images/symptoms/artrosis_7.jpeg',
                                '/assets/images/symptoms/tendinitis_1.jpg',
                                '/assets/images/symptoms/artrosis_16.jpg'
                            ][idx]}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111818]/90 via-[#111818]/40 to-transparent group-hover:via-[#111818]/60 transition-all duration-500" />
                        
                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            {/* Icon Wrapper */}
                            <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-teal-500 group-hover:border-transparent transition-all duration-500">
                                {idx === 0 && <AlertCircle className="w-7 h-7 text-white" />}
                                {idx === 1 && <Activity className="w-7 h-7 text-white" />}
                                {idx === 2 && <ShieldCheck className="w-7 h-7 text-white" />}
                                {idx === 3 && <Zap className="w-7 h-7 text-white" />}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2 whitespace-nowrap transform origin-left transition-transform duration-500">
                                {item.title}
                            </h3>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                                <p className="!text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Physiological Benefits */}
      <section id="beneficios-fisioterapia" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl space-y-6 text-center lg:text-left">
                    <div className="flex items-center gap-3 text-teal-600 font-bold tracking-widest uppercase text-sm justify-center lg:justify-start">
                        <Dna className="w-5 h-5" />
                        {locale === 'es' ? 'Resultados Biológicos' : 'Biological Results'}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold !text-[#111818]">
                        {content.physiological_benefits.title}
                    </h2>
                    <p className="text-xl !text-gray-600 font-light">
                        {content.physiological_benefits.intro}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {content.physiological_benefits.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-8 p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                            {idx === 0 && <Activity className="w-8 h-8" />}
                            {idx === 1 && <Target className="w-8 h-8" />}
                            {idx === 2 && <Zap className="w-8 h-8" />}
                            {idx === 3 && <Brain className="w-8 h-8" />}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold !text-[#111818]">{item.t}</h3>
                            <p className="!text-gray-600 leading-relaxed text-lg">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* General Benefits & Consultation */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                
                {/* Benefits List */}
                <div className="flex flex-col justify-between h-full space-y-12">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold !text-[#111818] tracking-tight">
                                {content.benefits_title}
                            </h2>
                            <div className="h-1.5 w-20 bg-teal-500 rounded-full" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {content.benefits.map((benefit: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <p className="text-gray-700 font-medium leading-snug">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image to fill space and add context - Perfectly aligned at the bottom */}
                    <div className="relative h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-xl mt-12 hidden lg:block border-4 border-gray-50">
                        <Image 
                            src={physioImg2} 
                            alt="Fisioterapia Profesional" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111818]/40 to-transparent" />
                    </div>
                </div>

                {/* When to consult - Red alert style */}
                <div id="consultar-fisioterapia" className="bg-teal-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group border border-white/10 shadow-2xl flex flex-col justify-center h-full min-h-[600px]">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                        <AlertCircle className="w-64 h-64 !text-white" />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold !text-white tracking-tight">
                            {content.when_to_consult_title}
                        </h2>
                        <p className="!text-teal-100 text-lg opacity-90 leading-relaxed font-light">
                            {content.when_to_consult_intro}
                        </p>
                        <ul className="space-y-6">
                            {content.when_to_consult.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-4 !text-white group/item">
                                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                    <span className="text-lg md:text-xl font-light leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8 border-t border-white/20">
                            <p className="!text-teal-300 font-bold text-xl italic leading-relaxed">
                                "{content.when_to_consult_conclusion}"
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
}
