"use client";

import Link from "next/link";
import {UserAuth} from "@/common/context/authentication";
import {usePathname} from "next/navigation";
import Image from "next/image";
import { TetrocracyLogo, HamburgerButton, SimpleLogo } from "../constant/images";
import { pixelgamer } from "@/styles/font";

export function Header() {
  const {googleLogin, logout, user} = UserAuth();
  const path = usePathname();

  async function handleSignIn() {
    try {
      await googleLogin();
    } catch {}
  }

  async function handleLogout() {
    try {
      await logout();
    } catch {}
  }

  return (
    <header className="sticky top-0 bg-primary-light pb-3">
      <nav className="bg-secondary-purple h-auto flex lg:justify-between px-4 pt-4 pb-3">
        <div className="lg:w-3/5 md:w-2/5 sm:1/6 flex w-3/4 justify-start items-center">
          {/* Logo Technocracy */}
          <SimpleLogo className="sm:hidden "/>
          <TetrocracyLogo className="sm:w-64 hidden sm:block sm:ml-12" />
        </div>
        <div className={`lg:w-2/5 md:w-3/5 sm:w-5/6 hidden sm:flex  h-auto justify-evenly items-center ${pixelgamer.className}`}>
          {/* Menu */}
          <Link href="/about" className={`${path.includes("/about") ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>About Us</Link>
          <Link href="/kandidat" className={`${path.includes("/kandidat") ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>Kandidat</Link>
          <Link href="/tata-cara" className={`${path.includes("/tata-cara") ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>Tata Cara</Link>
          {user ? (
            <Image
              src={user.photoURL}
              alt={user.displayName}
              height={0}
              width={0}
              sizes="100%"
              priority={true}
              className="rounded-full w-10 h-10"
            />
          ) : (
            <button
              className="bg-primary-dark px-2 py-1 rounded-lg hover:bg-primary-light hover:scale-105 duration-200"
              onClick={handleSignIn}
            >LOGIN</button>
          )}
        </div>
        <div className="sm:hidden flex justify-end h-auto w-1/4">
          <button>
            <HamburgerButton className="text-white" />
          </button>
        </div>
      </nav>
    </header>
  )
}