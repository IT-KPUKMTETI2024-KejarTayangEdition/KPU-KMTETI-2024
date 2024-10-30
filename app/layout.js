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
      className={`${hammersmith.className} antialiased text-text-light`}
    >
    <AuthContextProvider>
      <Header/>
      <div className="bg-background-dark min-h-screen px-6 py-2">
        {children}
      </div>
      <Footer />
    </AuthContextProvider>
    </body>
    </html>
  );
}
