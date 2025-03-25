import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from "@/components/Navbar";
import { GrotekMxRwnd } from '@/fonts/Fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "OffBCN Festival",
  description: "OFFBCN is a music festival born in 2014 that celebrates dance culture in a fun and transformative journey that fosters inclusion, builds community, and elevates the concept of partying to extraordinary new heights in an impressive show production. Beyond",
};

// export async function generateMetadata(props: Omit<Props, 'children'>) {
//   const {locale} = await props.params;
//   const t = await getTranslations({locale, namespace: 'LocaleLayout'});

//   return {
//     title: t('title')
//   };
// }

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  console.log(GrotekMxRwnd);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log(messages);
  return (
    <html lang={locale} className={`${GrotekMxRwnd.variable} h-full bg-black`}>
      <body className="h-full bg-black">
        <NextIntlClientProvider messages={messages}>
          <Navbar></Navbar>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
