import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/component/NavBar";


export const metadata: Metadata = {
  title: "Farouk",
  description: "portfolio developed by AlaaBo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={" max-w-full bg-black text-white "}>
        {/* <NavBar/> */}
        <main className=" w-full h-full">{children}</main>
      </body>
    </html>
  );
}
