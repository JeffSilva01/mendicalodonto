import "./globals.css";

export const metadata = {
  title: "Medical Odonto",
  description: "Clinica Odontologica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
