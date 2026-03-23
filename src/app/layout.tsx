// "use client";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { PersonJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
import { Playfair_Display, Nunito, Montserrat, Lora, Poppins, Raleway, Roboto_Mono  } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import { initGA, logPageView } from "@/lib/gtag";

const geistPlayfair = Playfair_Display({
  weight: ['400', '800'],
  variable: "--font-geist-playfair",
  subsets: ["latin"]
});

const geistRobotoMono = Roboto_Mono({
  weight: ['400'],
  variable: "--font-geist-roboto-mono",
  subsets: ["latin"]
});

const geistRaleway = Raleway({
  weight: ['400', '500', '900', '800'],
  variable: "--font-geist-raleway",
  subsets: ["latin"]
});

const geistPoppins = Poppins({
  weight: ['400', '800'],
  variable: "--font-geist-poppins",
  subsets: ["latin"]
});

const geistLora = Lora({
  weight: ["400", "500"],
  variable: "--font-geist-lora",
  subsets: ["latin"]
})

const geistMontserrat = Montserrat({
  variable: "--font-giest-montserrat",
  weight: ["100", "400"],
  subsets: ["latin"]

})

const geistNunito = Nunito({
  weight: ['200', '500'],
  variable: "--font-geist-nunito",
  subsets: ["latin"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Julius Olajumoke",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google8abd8a9e87b8613b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

//   const pathname = usePathname();

//   useEffect(() => {
//     // Initialize Google Analytics on first load
//     initGA();

//     // Log page view on route change
//     if (pathname) {
//         logPageView(pathname);
//     }
// }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${geistPlayfair.variable} 
          ${geistNunito.variable} 
          ${geistMontserrat.variable}
          ${geistLora.variable}
          ${geistPoppins.variable}
          ${geistRaleway.variable}
          ${geistRobotoMono.variable}
          antialiased`
        }
      >
        <PersonJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
