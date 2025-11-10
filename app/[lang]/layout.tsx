import { i18n } from '@/lib/i18n/config';
import '@/app/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout(props: unknown) {
  const { children, params } = (props as { children: React.ReactNode; params: Promise<{ lang: string }> });
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

