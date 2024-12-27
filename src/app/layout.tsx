import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ViewTransitions } from 'next-view-transitions';

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
            {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
