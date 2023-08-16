import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './provider';
import { InvoiceProvider } from '@/context/contextProvider';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pavoce - Send invoices and receive payments effortlessly',
  description: 'Experience the ease of managing your invoices with our secure and user-friendly interface, and accept international payments in fiats and cryptocurrencies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white overflow-x-hidden'>
      <body className={inter.className}>
        <InvoiceProvider>
          <Providers>
        <InvoiceProvider>
          <Providers>
            {children}
            {/* <ToastContainer /> */}
          </Providers>
        </InvoiceProvider>
          </Providers>
        </InvoiceProvider>
      </body>
    </html>
  )
}
