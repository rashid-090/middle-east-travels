import "@fontsource-variable/google-sans-flex";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";

export const metadata = {
  metadataBase: new URL("https://middleeasttravels.com"),
  title: {
    default: "Best Travel Agent in Calicut | Top Rated Travel Agency in Kerala",
    template: "%s | Middle East Travels",
  },
  description:
    "Top Rated Travel Agent in Calicut, Kerala . Get the best deals on travel and tours, visa services, air tickets, and more. Book vacation now!",
  alternates: {
    canonical: "https://middleeasttravels.com/",
  },
  openGraph: {
    title: "Best Travel Agent in Calicut | Top Rated Travel Agency in Kerala",
    description:
      "Top Rated Travel Agent in Calicut, Kerala . Get the best deals on travel and tours, visa services, air tickets, and more. Book vacation now!",
    url: "https://middleeasttravels.com/",
    siteName: "Middle East Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.sanity.io/images/j088vign/production/6c3e0483ccd2612eed4a76b4489f7d48390cf542-400x400.webp",
        width: 400,
        height: 400,
        alt: "Middle East Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agent in Calicut | Top Rated Travel Agency in Kerala",
    description:
      "Top Rated Travel Agent in Calicut, Kerala . Get the best deals on travel and tours, visa services, air tickets, and more. Book vacation now!",
    images: [
      "https://cdn.sanity.io/images/j088vign/production/6c3e0483ccd2612eed4a76b4489f7d48390cf542-400x400.webp",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full max-w-[1800px] mx-auto antialiased"
      cz-shortcut-listen="true"
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
        />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Fullscreen Initial Website Loader */}
        <InitialLoader />

        {/* Reusable Header Component */}
        <Header />

        {children}

        {/* Modern Big Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
