"use client"

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

import imgTop from "@/common/constant/landing-page/top.svg";
import imgBottom from "@/common/constant/landing-page/bottom.svg";
import imgLogo from "@/common/constant/landing-page/logo-kpu.png";
import imgBackgroundLogo from "@/common/constant/landing-page/roda.png";
import Kandidat1 from "@/common/constant/kandidat/calon1.png";
import Kandidat2 from "@/common/constant/kandidat/calon2.png";

import {text} from "@/common/constant/text";
import CardView from "@/common/components/card-view";
import {hammersmith, pixelgamer} from "@/styles/font";
import {preventImageDrag} from "@/common/constant/classes";

export default function Home() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <main className="flex flex-col">
      {/* Load */}
      <section className="w-full h-[100vh] flex flex-row">
        <div  className="hidden md:flex md:justify-center md:items-center w-1/2 ">
          <div className="relative flex items-center justify-center w-[80%] h-full">
            <Image alt="Spinning wheel" data-aos="zoom-in" data-aos-duration="500" src={imgBackgroundLogo} width={350} className="absolute animate-spin-custom-speed"/>
            <Image alt="Tetrocracy Logo" data-aos="fade-right" data-aos-duration="500" src={imgLogo} width={450} className="absolute"/>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center">
          {/* Image */}
          <div data-aos="fade-down" data-aos-duration="700" className="w-64 lg:w-96 box-content bg-gradient-to-b p-4 lg:p-6 from-primary-light to-primary-dark rounded-xl">
            <div className="flex flex-col justify-center w-full h-full border-2 rounded-md border-secondary-darkred">
              <div className="flex w-full items-center pt-4 justify-center">
                <h1 className={`${pixelgamer.className} text-5xl text-stroke-2 text-primary-light`}>TETI</h1>
                <h1 className={`ml-1 ${pixelgamer.className} text-md w-28 box-content text-secondary-darkred`}>Road to a new Captain!</h1>
              </div>
              <div className="w-full flex">
                <p className={`${hammersmith.className} text-secondary-darkred py-[4px] px-2 lg:px-4 lg:py-[6px] text-sm lg:text-lg w-full text-center`}>Suaramu adalah kunci kemajuan KMTETI, gunakan hak pilihmu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section className="w-full flex flex-col">
      <Image alt="Pattern" src={imgTop} className="" style={preventImageDrag}/>
        <div className="bg-primary-light flex flex-col items-center justify-evenly w-full box-content pt-8 pb-8">
          <h1 data-aos="zoom-in" className={`${pixelgamer.className} mb-4 text-2xl md:text-5xl text-secondary-darkred`}>
            WHO'S NEXT ?
          </h1>
          <div className="flex w-full flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <Image className="" alt="First candidate" data-aos="zoom-in" width={300} src={Kandidat1}/>
              <Link href="/candidate" className={`border-2 border-secondary-darkred rounded-md text-secondary-darkred hover:bg-secondary-darkred hover:text-primary-light transform duration-500 hover:-translate-y-1 ${pixelgamer.className} py-1 px-2 mt-4 text-xs sm:text-lg md:px-4 md:py-2`}>
                Next
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image className="" alt="Second candidate" data-aos="zoom-in" width={300} src={Kandidat2}/>
              <Link href="/candidate" className={`border-2 border-secondary-darkred rounded-md text-secondary-darkred hover:bg-secondary-darkred hover:text-primary-light transform duration-500 hover:-translate-y-1 ${pixelgamer.className} py-1 px-2 mt-4 text-xs sm:text-lg md:px-4 md:py-2`}>
                Next
              </Link>
            </div>
          </div>
        </div>
        <Image alt="Pattern" src={imgBottom} style={preventImageDrag}/>
      </section>

      {/* Short Introduction Section */}
      <section data-aos="fade-right" data-aos-duration="700" className="w-full flex flex-col justify-center items-center mt-12">
        <CardView pad="p-4" className="sm:w-1/2 md:w-[80%] w-[85%] text-center text-xs md:text-sm" text={text.landingPage.section3.descText}/>
        <Link href="/about" className={`${pixelgamer.className} text-secondary-darkred mt-4 bg-primary-dark mb-12 hover:bg-primary-light duration-300 transform hover:-translate-y-1 rounded-lg text-xs p-3 md:text-md md:p-4 lg:text-lg`}>
          About Us
        </Link>
      </section>
    </main>
  );
}
