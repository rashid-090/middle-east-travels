import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Middle East Travels",
  description: "Explore flights, visas, holiday packages and luxury stays across the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
       cz-shortcut-listen="true"
    >
      <body className="min-h-full flex flex-col font-sans">
              {/* Reusable Header Component */}
              <Header />
        
        {children}
                  {/* Modern Big Footer Component */}
      <Footer />
      </body>
    </html>
  );
}
