'use client';

interface TrustBarMobileProps {
  locale: string;
}

export default function TrustBarMobile({ locale }: TrustBarMobileProps) {
  return (
    <section className="md:hidden py-6 relative overflow-hidden"
             style={{ 
               background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)'
             }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-4">
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
              <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-0.5" style={{ color: '#6ba5a5' }}>2000+</div>
              <div className="text-sm font-semibold text-white/90">
                {locale === 'es' ? 'Pacientes Recuperados' : 'Recovered Patients'}
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
              <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-0.5" style={{ color: '#6ba5a5' }}>20+</div>
              <div className="text-sm font-semibold text-white/90">
                {locale === 'es' ? 'Años de Experiencia' : 'Years of Experience'}
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
              <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-0.5" style={{ color: '#6ba5a5' }}>6+</div>
              <div className="text-sm font-semibold text-white/90">
                {locale === 'es' ? 'Especialidades' : 'Specialties'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

