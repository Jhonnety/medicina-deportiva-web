/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://clinicadelmovimiento.com'),
  title: {
    template: '%s | Dr. James Madrid',
    default: 'Dr. James Madrid - Medicina Deportiva',
  },
  description: 'Especialista en medicina deportiva y tratamientos regenerativos en Medellín, Colombia',
  applicationName: 'Dr. James Madrid',
  authors: [{ name: 'Dr. James Madrid' }],
  generator: 'Next.js',
  keywords: ['medicina deportiva', 'deportólogo', 'Medellín', 'PRP', 'proloterapia', 'artrosis'],
  referrer: 'origin-when-cross-origin',
  creator: 'Dr. James Madrid',
  publisher: 'Dr. James Madrid',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://clinicadelmovimiento.com',
    siteName: 'Dr. James Madrid',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@drjamesmadrid',
    creator: '@drjamesmadrid',
  },
  themeColor: '#6ba5a5',
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  appleWebApp: {
    capable: true,
    title: 'Dr. James Madrid',
    statusBarStyle: 'default',
  },
};


