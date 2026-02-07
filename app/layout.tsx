import "./globals.css";

export const metadata = {
  title: "Exploda",
  description: "Your site description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'CreatoDisplay, sans-serif' }}>{children}</body>
    </html>
  );
}
