import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md. Salah uddin | Full Stack Developer Portfolio",
  description: "Modern portfolio of Md. Salah uddin, a Full Stack Web Developer specialized in Next.js, React, and interactive UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}
