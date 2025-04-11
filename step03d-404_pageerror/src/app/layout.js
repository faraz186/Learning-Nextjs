import { Inter } from 'next/font/google'   
                                   
const inter = Inter({ subsets: ['latin'] })    
     
export const metadata = {     
  title: 'step03d-404_pageerror',  
  description: 'Generated by create next app',   
}   
               
export default function RootLayout({ children }) {   
  return (       
    <html lang="en">
      <body className={inter.className}>{children}</body>     
    </html>      
  )   
}
