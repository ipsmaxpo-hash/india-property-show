import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Script from "next/script"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Added import for React

export const metadata: Metadata = {
  title: "India Property Show",
  description:
    "The top realestate display for NRI's featuring exclusive investment opportunties and luxuruous properties",
  openGraph: {
    title: "India Property Show",
    description:
      "The top realestate display for NRI's featuring exclusive investment opportunties and luxuruous properties",
    url: "https://www.indiapropertyshow.in",
    siteName: "India Property Show",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "India Property Show",
    description:
      "The top realestate display for NRI's featuring exclusive investment opportunties and luxuruous properties",
  },
  keywords: ["India Property Show", "Real Estate Exhibition", "Bahrain Property Event", "Real Estate Conference","usa Estate Exhibition","India Property Show-2025"],
  authors: [{ name: "India Property Show" }],
  creator: "India Property Show",
  publisher: "India Property Show",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '469919302514972');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

