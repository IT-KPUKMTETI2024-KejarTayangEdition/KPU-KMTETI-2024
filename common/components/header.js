"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {useEffect, useState} from "react";

import {UserAuth} from "@/common/context/authentication";
import {TetrocracyLogo, HamburgerButton, SimpleLogo} from "@/common/constant/images";
import {pixelgamer} from "@/styles/font";

export function Header() {
  const {googleLogin, logout, user} = UserAuth();
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeOutOpen, setTimeOutOpen] = useState(false);

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

  const paths = [
    {href: "/about", name: "About Us"},
    {href: "/candidate", name: "Kandidat"},
    {href: "/tata-cara", name: "Tata Cara"}
  ];

  useEffect(() => {
    setTimeout(() => {setTimeOutOpen(menuOpen)}, 300);
  }, [menuOpen])

  return (
    <header className={`sticky top-0 bg-primary-light pb-3 tracking-wider ${pixelgamer.className} z-50`}>
      <nav className="bg-secondary-purple h-auto flex lg:justify-between px-4 pt-4 pb-3">
        <div className="lg:w-3/5 md:w-2/5 sm:1/6 flex w-3/4 justify-start items-center">
          {/* Logo Technocracy */}
          <Link href="/"><SimpleLogo className="sm:hidden"/></Link>
          <Link href="/"><TetrocracyLogo className="sm:w-64 hidden sm:block sm:ml-12 md:ml-6"/></Link>
        </div>
        <div className="lg:w-2/5 md:w-3/5 sm:w-5/6 hidden md:flex h-auto justify-evenly items-center">
          {/* Menu */}
          {paths.map((p) => (
            <Link key={p.name} href={p.href} className={`${path.includes(p.href) ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>
              {p.name}
            </Link>
          ))}
          {user ? (
            <Image src={user.photoURL} alt={user.displayName} height={0} width={0} sizes="100%" priority={true} className="rounded-full w-10 h-10"/>
          ) : (
            <button className="bg-primary-dark px-2 py-1 rounded-lg hover:bg-primary-light hover:scale-105 duration-200" onClick={handleSignIn}>
              LOGIN
            </button>
          )}
        </div>
        <div className="md:hidden flex justify-end w-1/4 overflow-x-hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="z-30">
            <HamburgerButton className="text-white"/>
          </button>
          {timeOutOpen && (
            <div className={`${menuOpen ? "animate-fly-in" : "transform translate-x-full duration-300 overflow-x-hidden"} flex flex-col gap-y-12 pt-20 text-xl text-right px-5 absolute h-screen left-0 sm:left-1/2 top-0 right-0 bg-secondary-purple`}>
              <Link onClick={() => setMenuOpen(false)} href="/" className={`${path === "/" ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>
                Beranda
              </Link>
              {paths.map((p) => (
                <Link key={p.name} onClick={() => setMenuOpen(false)} href={p.href} className={`${path.includes(p.href) ? "text-primary-light" : ""} hover:-translate-y-1 transform duration-300`}>
                  {p.name}
                </Link>
              ))}
              {!user && (
                <button className="block text-text-dark text-3xl bg-primary-dark px-2 py-1 w-3/4 h-16 mx-auto rounded-lg hover:bg-primary-light hover:scale-105 duration-200" onClick={handleSignIn}>
                  LOGIN
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}