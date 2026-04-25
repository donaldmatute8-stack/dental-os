import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental OS | Gestión Dental Inteligente',
  description: 'La plataforma integral para la gestión moderna de clínicas dentales.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
