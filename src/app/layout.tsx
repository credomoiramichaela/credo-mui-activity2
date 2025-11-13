import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import ThemeProvider from '@/context/theme/provider'
import './globals.css'
import Navbar from '@/components/navbar'


export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider>
        <Navbar/>
            {children}
            
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
