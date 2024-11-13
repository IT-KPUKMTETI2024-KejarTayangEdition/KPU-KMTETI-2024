'use client';

import {ComingSoon} from "@/common/components/coming-soon";
import imgPattern from "../../common/constant/kandidat/kandidat-pattern.svg"
import calon1 from "../../common/constant/kandidat/calon1.png"
import calon2 from "../../common/constant/kandidat/calon2.png"
import Image from "next/image";
import { dalekpinpoint } from "@/styles/font";

export default function Kandidat() {
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-primary-light to-primary-dark flex-col w-full">
      <div className="mt-8 flex sm:flex-row flex-col justify-evenly items-center w-full p-4">
        <button>
          <Image loading="eager" priority={true} className="hover:-translate-y-4 m-4 transforms duration-300 w-64 md:w-[20rem] lg:w-[24rem] h-auto" src={calon1} />
        </button>
        <button>
          <Image loading="eager" priority={true} className="hover:-translate-y-4 m-4 transforms duration-300 w-64 md:w-[20rem] lg:w-[24rem] h-auto " src={calon2}/>
        </button>
      </div>
      <Image className="mt-8" style={preventImageDrag} src={imgPattern}  />
    </div>
  )
}