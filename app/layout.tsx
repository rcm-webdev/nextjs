import '@/app/ui/global.css'
// add inter to the body element and the font will be applied to the entire application
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* added antiliased which is a class that smooths out font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
