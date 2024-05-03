import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
// import Provider from "@/components/auth/Provider";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import clsx from "clsx";
import Provider from "@/components/elements/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next developer",
  description: "Web site for referancing of developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter && inter.className, "bg-background")}>
          <Provider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
            <Toaster />
            {/* {modal} */}
        </ThemeProvider>
          </Provider>
      </body>
    </html>
  );
}
