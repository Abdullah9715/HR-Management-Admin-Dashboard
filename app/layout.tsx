import { Lexend } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

const inter = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex xl:w-full lg:w-full md:w-full xl:h-[1024px] h-screen bg-black">
          <Sidebar />
          <div className="xl:w-[1040] lg:w-full w-full">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
