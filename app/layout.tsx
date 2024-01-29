import { createTheme, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";

const theme = createTheme({})

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </body>
      </html>
  );
}
