"use client";

import {useState} from "react";
import Image from "next/image";

import imgPattern from "@/common/constant/kandidat/kandidat-pattern.svg";
import calon1 from "@/common/constant/kandidat/calon1.png";
import calon2 from "@/common/constant/kandidat/calon2.png";

import Modal from "@/common/components/modal";
import {preventImageDrag} from "@/common/constant/classes";
import {text} from "@/common/constant/text";

export default function Kandidat() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-primary-light to-primary-dark flex-col w-full">
      <div className="mt-8 flex sm:flex-row flex-col justify-evenly items-center w-full p-4">
        <button className="animate-in-slide-l-to-r" onClick={() => setOpen1(true)}>
          <Image alt="First candidate" loading="eager" priority={true} className="hover:-translate-y-4 m-4 transforms duration-300 w-64 md:w-[20rem] lg:w-[24rem] h-auto" src={calon1} />
        </button>
        <button className="animate-in-slide-r-to-l" onClick={() => setOpen2(true)}>
          <Image alt="Second candidate" loading="eager" priority={true} className="hover:-translate-y-4 m-4 transforms duration-300 w-64 md:w-[20rem] lg:w-[24rem] h-auto " src={calon2}/>
        </button>
        <Modal open={open1} onClose={() => setOpen1(false)} srcImg={{cv : calon1}} text={text.candidate.c1}/>
        <Modal open={open2} onClose={() => setOpen2(false)} srcImg={{cv : calon2}} text={text.candidate.c2}/>
      </div>
      <Image alt="Pattern" className="mt-8" style={preventImageDrag} src={imgPattern}  />
    </div>
  )
}