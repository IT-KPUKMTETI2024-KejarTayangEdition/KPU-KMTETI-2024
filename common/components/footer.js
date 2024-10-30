// TODO: Add footer component
import { pixelgamer, hammersmith, eightbitwonder } from "@/styles/font";
import { LineLogo, InstagramLogo, YouTubeLogo } from "../constant/images";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="sticky top-0 bg-primary-light pb-3 flex flex-col items-center">
            <div className="bg-secondary-purple p-6 sm:flex h-auto">
                {/* Information */}
                <div className="sm:w-3/5 w-full">
                    <h1 className={`${pixelgamer.className} sm:mb-2 text-xl`}>LAPORKAN SEGALA BENTUK KECURANGAN</h1>
                    <p className={`${hammersmith.className} text-justify sm:pr-32 text-sm`}>Kecurangan terkait pemilu telah diatur dalam ketentuan KPU KMTETI. Jika anda menemukan adanya kecurangan dalam bentuk apapun, silahkan melapor dengan mengakses <Link className="underline" href="#">laporkan!</Link></p>
                </div>
                {/* Social Media */}
                <div className="sm:w-2/5 mt-4 sm:mt-0 w-full">
                    <h1 className={`${pixelgamer.className} text-xl `}>STAY CONNECTED WITH US</h1>
                    <div className="flex sm:ml-4 justify-center sm:justify-start">
                        <Link href="/about"><LineLogo className="hover:w-12 transform duration-300 w-10 mr-4" /></Link>
                        <Link href="/about"><InstagramLogo className="hover:w-12 transform duration-300 w-10 mr-4" /></Link>
                        <Link href="/about"><YouTubeLogo className="hover:w-12 transform duration-300 w-10 mr-4" /></Link>
                    </div>
                </div>
            </div>
            <div className={`text-secondary-purple mt-2 flex h-auto justify-center items-center `}>
                <h1 className={`${pixelgamer.className} mr-1 mt-1 text-2xl`}>
                    &copy;
                </h1>
                <h1 className={`${pixelgamer.className} flex mt-1 text-xl`}>
                    IT KEJARTAYANG
                </h1>
                <h1 className={`${eightbitwonder.className} ml-1`}>
                    2024
                </h1>
            </div>
        </footer>
    )
}