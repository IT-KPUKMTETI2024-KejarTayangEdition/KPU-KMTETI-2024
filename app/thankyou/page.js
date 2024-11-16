import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {eightbitwonder, pixelgamer} from "@/styles/font";
import imgLogo from "@/common/constant/landing-page/logo-kpu.png";

export default function KPUThankYou() {
  return (
    <main className="my-12 mx-2 md:mx-24 p-2 border-2 border-primary-light rounded-lg">
      <section className="border text-center border-primary-dark rounded-xl flex flex-col text-primary-light">
        <h1 className={`${pixelgamer.className} mt-2 text-4xl`}>
          TERIMA KASIH TELAH BERPARTISIPASI DALAM
        </h1>
        <h2 className={`${eightbitwonder.className} text-2xl text-primary-dark`}>KPU KMTETI 2024</h2>
        <hr className="bg-primary-dark border-0 h-[0.5px] mt-2 mb-8 mx-6"/>
        <div className="flex justify-center">
          <Image alt="Tetrocracy Logo" src={imgLogo} width={550}/>
        </div>
        <Link href="/" className="block mx-auto bg-primary-dark text-secondary-darkred w-fit rounded-md my-6 px-4 py-2">Kembali Ke Beranda</Link>
      </section>
    </main>
  );
}