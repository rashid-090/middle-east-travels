import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
