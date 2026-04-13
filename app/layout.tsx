import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steven Eraso | Ingeniero de Software',
  description: 'Portafolio profesional de Steven Eraso Insuasti, Estudiante de Ingeniería de Software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
