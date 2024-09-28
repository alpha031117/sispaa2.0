import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/registered_nabvar";
import FloatingChatbotWrapper from "@/components/floatingChatbotWrapper";

export const metadata: Metadata = {
  title: "SISPAA 2.0",
  description: "Malaysia Complain Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`lato-regular antialiased`}>
        <div className="flex flex-col">
          <div className="h-fit flex-none sticky top-0 z-50">
            <Navbar />
          </div>
          <FloatingChatbotWrapper />
          <div className="flex-1">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
