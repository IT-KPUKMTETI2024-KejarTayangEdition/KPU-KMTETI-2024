"use client";

import { ComingSoon } from "@/common/components/coming-soon";
import Image from "next/image";
import imgPattern from "../../common/constant/tatacara/Vector.svg";
import CardView from "@/common/components/card-view";
import {text} from "../../common/constant/text"
import {dalekpinpoint} from "@/styles/font";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function TataCara() {
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden">
      {/* Konten Utama */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
      <div data-aos="fade-up" data-aos-duration="700" className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.tataCara.section1.title1}</h1>
          <h1>{text.tataCara.section1.title2}</h1>
        </div> 
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-xs md:text-base lg:text-lg text-center" text={text.tataCara.section1.description} /> 
      </div>
      </main>


      <Image alt="" className="mt-8 justify justify-center" style={preventImageDrag} src={imgPattern}  />
    </div>
  ); 
}
