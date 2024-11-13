import {ComingSoon} from "@/common/components/coming-soon";
import imgPattern from "../../common/constant/kandidat/kandidat-pattern.svg"
import calon1 from "../../common/constant/kandidat/calon1.svg"
import calon2 from "../../common/constant/kandidat/calon2.svg"
import Image from "next/image";
import { dalekpinpoint } from "@/styles/font";

export default function Kandidat() {
  const preventImageDrag = {'userDrag' : 'none', 'WebkitUserDrag' : 'none'}

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-primary-light to-primary-dark flex-col w-full">
      <div className="mt-8 flex sm:flex-row flex-col justify-evenly items-center w-full p-4">
        <button>
          <Image className="hover:w-72 m-4 md:hover:w-[21rem] lg:hover:w-[27rem] transforms duration-300 w-64 md:w-[20rem] lg:w-[26rem] h-auto" src={calon1} />
        </button>
        <button>
          <Image className="hover:w-72 m-4 md:hover:w-[21rem] lg:hover:w-[27rem] transforms duration-300 w-64 md:w-[20rem] lg:w-[26rem] h-auto " src={calon2}/>
        </button>
      </div>
      <Image className="mt-8" style={preventImageDrag} src={imgPattern}  />
    </div>
  )
}