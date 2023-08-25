

import { Footer, Navbar } from "@/components"


export const metadata = {
  title: 'Hemanth',
  description: 'Hemanth Sairam Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
