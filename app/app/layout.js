export const metadata = {
  title: "Streamwood Garage Tune-Up",
  description: "Garage door tune-ups and maintenance",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
