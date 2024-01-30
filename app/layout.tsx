import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
          <MantineProvider>
            {children}
          </MantineProvider>
        </body>
      </html>
  );
}
