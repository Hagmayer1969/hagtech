import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HagTech - Confecção de Sites e Automações",
  description:
    "Desenvolvemos sites profissionais e soluções de automação para impulsionar o seu negócio. Transforme suas ideias em realidade digital.",
  keywords: [
    "desenvolvimento de sites",
    "automação",
    "web design",
    "sistemas web",
    "landing pages",
    "e-commerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
