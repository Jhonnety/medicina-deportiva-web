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
        {/* Hotjar */}
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6583186);
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

