import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
})
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata: Metadata = {
    title: 'Restaurant',
    description: 'The best restaurant in the world'
}

export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
  }
  