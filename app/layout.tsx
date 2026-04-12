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
      <body>{children}</body>
    </html>
  )
}
