"use client"

import {Welcome} from "@/modules/home";
import Image from "next/image";
import Link from "next/link";
import imgTop from "../common/constant/landing-page/top.svg"
import imgBottom from "../common/constant/landing-page/bottom.svg"
import imgLogo from "../common/constant/landing-page/logo-kpu.png"
import imgBackgroundLogo from "../common/constant/landing-page/roda.png"

import Kandidat1 from "../common/constant/kandidat/calon1.png"
import Kandidat2 from "../common/constant/kandidat/calon2.png"

import {text} from '../common/constant/text'
import CardView from "@/common/components/card-view";
import voteButton from '../common/constant/landing-page/vote.png'
import { hammersmith, pixelgamer } from "@/styles/font";

import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <div className="flex flex-row w-full h-[90vh]">
        <div className="hidden w-1/2 h-full md:flex justify-center items-center p-8">
          <div className="relative flex items-center justify-center w-full h-1/2">
            <Image alt="" data-aos="zoom-in" data-aos-duration="500" src={imgBackgroundLogo} width={350} className="absolute animate-spin-custom-speed" />
            <Image alt="" data-aos="fade-right" data-aos-duration="500" src={imgLogo} width={450} className="absolute"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
          <div data-aos="fade-left" data-aos-duration="500" className="p-4 rounded-2xl w-[80%] md:h-[40%] bg-gradient-to-b from-primary-light to-primary-dark">
            <div className="w-full h-full border border-secondary-darkred rounded-xl p-4">
              <div className={`${pixelgamer.className} flex flex-col md:flex-row items-center w-full md:h-1/2 justify-evenly`}>
                {/* Upper text */}
                <h1 className="text-4xl md:text-6xl text-primary-light " style={{'WebkitTextStroke' : '2px #251205'}}>TETI</h1>
                <h1 className="text-lg lg:text-3xl text-secondary-darkred text-center md:text-left md:w-2/4">ROAD TO A NEW CAPTAIN</h1>
              </div>
              <div className={`${hammersmith.className} text-sm md:text-base text-center text-secondary-darkred`}>
                <p>Suaramu adalah kunci kemajuan KMTETI, gunakan hak pilihmu</p>
              </div>
            </div>
          </div>
          <Link href="/"><Image alt="" data-aos="fade-left" data-aos-duration="700" className="mt-6" width={200} src={voteButton} /></Link>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full min-h-screen flex flex-col">
        <Image alt="" src={imgTop} className="" style={preventImageDrag} />
        <div className="bg-primary-light flex flex-col items-center justify-evenly w-full h-[100vh]">
          <h1 data-aos="zoom-in" className={`${pixelgamer.className} text-4xl md:text-6xl text-secondary-darkred`}>WHO'S NEXT ?</h1>
          <div className="flex w-full flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <Image alt="" data-aos="fade-right" width={300} src={Kandidat1} />
              <button className={`border-2 border-secondary-darkred rounded-md text-secondary-darkred hover:bg-secondary-darkred hover:text-primary-light transform duration-500 hover:-translate-y-1 ${pixelgamer.className} py-2 px-6`} >Next</button>
            </div>
            <div className="flex flex-col items-center">
              <Image alt="" data-aos="fade-left" width={300} src={Kandidat2} />
              <button className={`border-2 border-secondary-darkred rounded-md text-secondary-darkred hover:bg-secondary-darkred hover:text-primary-light transform duration-500 hover:-translate-y-1 ${pixelgamer.className} py-2 px-6`} >Next</button>
            </div>
          </div>
        </div>
        <Image alt="" src={imgBottom} className="" style={preventImageDrag} />
      </div>

      {/* Section 3 */}
      <div data-aos="fade-right" data-aos-duration="700" className="w-full flex flex-col justify-center items-center mt-12">
        <CardView pad="p-8" className="sm:w-1/2 md:w-[80%] w-[85%] text-justify" text={text.landingPage.section3.descText} />
        <Link href="/about"><button className={`${pixelgamer.className} text-secondary-darkred mt-4 p-4 bg-primary-dark mb-12 hover:bg-primary-light duration-300 transform hover:-translate-y-1 rounded-lg`}>About Us</button></Link>
      </div>
    </div>
  );
}
