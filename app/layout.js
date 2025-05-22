import "./globals.css"

export const metadata = {
  title: "Roland - Web Developer",
  description: "Portfolio website for Roland, a web developer specializing in React, Next.js, and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
