import {hammersmith} from "@/styles/font";
import {AuthContextProvider} from "@/common/context/authentication";
import {Header} from "@/common/components/header";
import { Footer } from "@/common/components/footer";
import "@/styles/globals.css";

export const metadata = {
  title: "KPU KMTETI 2024",
  description: "Selamat datang di website KPU KMTETI 2024!",
};

export default function RootLayout({children}) {
  return (
    <html>
    <body
      className={`${hammersmith.className} antialiased bg-background-dark text-text-light overflow-x-hidden w-full`}
    >
    <AuthContextProvider>
      <Header/>
      <div className="bg-main-pattern bg-contain w-full border-spacing-0 min-h-screen">
        {children}
      </div>
      <Footer />
    </AuthContextProvider>
    </body>
    </html>
  );
}
