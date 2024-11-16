import {hammersmith} from "@/styles/font";
import {AuthContextProvider} from "@/common/context/authentication";
import {Header} from "@/common/components/header";
import {Footer} from "@/common/components/footer";
import "@/styles/globals.css";

export const metadata = {
  title: "KPU KMTETI 2024",
  description: "Welcome to KPU KMTETI 2024! Your voice is the key to KMTETI's progress, don't forget to use your voting rights!",
};

export default function RootLayout({children}) {
  return (
    <html>
    <body
      className={`${hammersmith.className} antialiased bg-background-dark text-text-light overflow-x-hidden`}
    >
    <AuthContextProvider>
      <Header/>
      <div className="bg-main-pattern bg-contain w-screen border-spacing-0">
        {children}
      </div>
      <Footer/>
    </AuthContextProvider>
    </body>
    </html>
  );
}