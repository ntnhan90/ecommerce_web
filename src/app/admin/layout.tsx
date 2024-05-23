import { Container } from 'react-bootstrap'
import React from 'react'
import '@/styles/admin/globals.scss'
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}
