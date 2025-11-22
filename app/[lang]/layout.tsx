import { Metadata } from 'next';
import Script from 'next/script';
import { i18n } from '@/lib/i18n/config';
import '@/app/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://clinicadelmovimiento.com'),
    icons: {
      icon: '/icon.svg',
    },
  };
}

import HotjarInit from '@/components/HotjarInit';

export default async function LangLayout(props: unknown) {
  const { children, params } = (props as { children: React.ReactNode; params: Promise<{ lang: string }> });
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L1RCDDJVRG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1RCDDJVRG');
          `}
        </Script>
        <HotjarInit />
        {children}
      </body>
    </html>
  );
}

