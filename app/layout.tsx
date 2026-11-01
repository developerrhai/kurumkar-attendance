import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kurumkar Classes - Attendance System',
  description: 'Biometric Attendance and Management for Kurumkar Classes',
  icons: {
    icon: '/kurumkar-logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
