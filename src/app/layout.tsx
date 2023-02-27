import { Header } from "@/components/Header";
import { Rubik } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Medical Odonto",
  description: "Clinica Odontologica",
};

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={rubik.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
