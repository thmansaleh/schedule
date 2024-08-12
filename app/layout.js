import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import ProviderPage  from './Provider'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'TIMU',
  description: 'Traffic Incidents Management Unit'
  
}
//export const viewport= {
 // width: '700',
//}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <Analytics/>
      <body className="font-sans pb-16 ">
          <script  src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" />

        <ProviderPage children={children}/>
       
        </body>
    </html>
  )
}
