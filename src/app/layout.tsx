import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xpertbite.in"),
  icons: {
    icon: "/logos/xpertbite_logo_light.png",
    shortcut: "/logos/xpertbite_logo_light.png",
    apple: "/logos/xpertbite_logo_light.png",
  },
  title: {
    default: "XpertBite Technologies | Software Development Company",
    template: "%s | XpertBite Technologies",
  },
  description:
    "XpertBite Technologies is a leading software development company specializing in web development, mobile apps, AI solutions, and enterprise software. Transform your business with cutting-edge technology.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "custom software",
    "AI development",
    "Next.js development",
    "React development",
    "full stack development",
    "SaaS development",
    "enterprise solutions",
    "XpertBite Technologies",
  ],
  authors: [{ name: "XpertBite Technologies", url: "https://xpertbite.in" }],
  creator: "XpertBite Technologies",
  publisher: "XpertBite Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xpertbite.in",
    siteName: "XpertBite Technologies",
    title: "XpertBite Technologies | Software Development Company",
    description:
      "Transform your business with cutting-edge software solutions. Web development, mobile apps, AI, cloud, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XpertBite Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XpertBite Technologies | Software Development Company",
    description:
      "Transform your business with cutting-edge software solutions.",
    images: ["/og-image.png"],
    creator: "@xpertbite",
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
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6651461551545723"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <ScrollToTop />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
