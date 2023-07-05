import "./globals.css";

import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Auto-Sprint",
  description: "Discover, reserve or rent a car!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relaitve">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
