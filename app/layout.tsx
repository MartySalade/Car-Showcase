import { Header } from "@/components/Layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Layout/Footer";
import { QueryProvider } from "@/components/utils/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car hub",
  description: "The best place to find your next holiday car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-width padding-x py-8">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
