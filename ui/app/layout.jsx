import "@fontsource-variable/google-sans-flex";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";

export const metadata = {
  title: "Middle East Travels",
  description:
    "Explore flights, visas, holiday packages and luxury stays across the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full max-w-[1800px] mx-auto antialiased"
      cz-shortcut-listen="true"
    >
      <head>
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
