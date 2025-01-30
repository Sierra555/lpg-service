import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ViewTransitions } from 'next-view-transitions';
import CookieBanner from "./components/CookiesBanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ГБО | Встановлення газового обладнання на авто у Львові",
  description: "Професійне встановлення газового обладнання для авто. Якісно, швидко, надійно.",
  keywords: [
    "газове обладнання",
    "ГБО",
    "встановлення ГБО Львів",
    "авто на газу",
    "економія пального",
    "газифікація авто",
    "монтаж ГБО",
    "ГБО сервіс",
    "екологічне авто",
    "ціни на ГБО"
  ],
  openGraph: {
    title: "ГБО | Встановлення газового обладнання на авто у Львові",
    description: "Професійне встановлення газового обладнання для авто. Якісно, швидко, надійно.",
    url: "https://gas-master.vercel.app/",
    siteName: "ГБО Львів",
    images: [
      {
        url: "https://gas-master.vercel.app/images/logo-v2.png",
        width: 1200,
        height: 630,
        alt: "Газове обладнання для авто",
      },
    ],
    locale: "uk_UA",
    type: "website",
  }
};

const roboto = Roboto({ weight: '400', subsets: ['latin', 'cyrillic'], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="uk" className="scroll-smooth">
        <body
          className={roboto.className }
        >
           <CookieBanner />
            {children}
          <Footer />
        </body>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16845422778"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16845422778');
            `,
          }}
        />
      </html>
    </ViewTransitions>
  );
}
