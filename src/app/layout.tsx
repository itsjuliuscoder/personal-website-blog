// "use client";
import type { Metadata } from "next";
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
  title: "Julius Olajumoke - Software Engineer",
  description: "I’m a Software Engineer based in Lagos, Nigeria, with a passion for writing software, crafting compelling stories, exploring new places, and honing my French-speaking skills.",
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
        {children}
      </body>
    </html>
  );
}
