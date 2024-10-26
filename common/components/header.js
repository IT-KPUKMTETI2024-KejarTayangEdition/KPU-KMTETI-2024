"use client";

import Link from "next/link";
import {UserAuth} from "@/common/context/authentication";
import {usePathname} from "next/navigation";
import Image from "next/image";

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
      <nav className="bg-secondary-purple flex justify-between px-4 pt-4 pb-3">
        <Link href="/" className="flex items-center">
          <h1>TECHNOCRACY</h1>
        </Link>
        <div className="hidden lg:flex gap-x-10 text-xl items-center">
          <Link href="/about" className={path.includes("/about") ? "text-primary-light" : ""}>About Us</Link>
          <Link href="/kandidat" className={path.includes("/kandidat") ? "text-primary-light" : ""}>Kandidat</Link>
          <Link href="/tata-cara" className={path.includes("/tata-cara") ? "text-primary-light" : ""}>Tata Cara</Link>
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
        <div className="lg:hidden">
          {/** TODO: Hamburger menu for smaller width device */}
        </div>
      </nav>
    </header>
  )
}