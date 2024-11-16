import {useState} from "react";
import Image from "next/image";
import {pixelgamer} from "@/styles/font";

function Information({srcImg, text, info}) {
  let pages = <div className="w-[70%] md:mt-12 p-4 h-full text-justify">
    <h1>Visi dan Misi: </h1>
    <article className="text-sm mt-2 whitespace-pre-line">{text.vm}</article>
  </div>

  if (info.cv) {
    pages = <div className="w-[70%] flex flex-col items-center justify-center p-4 h-3/4 text-justify">
      <h1>CV dapat dilihat melalui link dibawah ini </h1>
      <button onClick={() => window.open(text.cv, "_blank")} className={`${pixelgamer.className} text-secondary-darkred mt-6 bg-primary-light hover:bg-primary-dark pt-2 pb-2 pl-6 pr-6 hover:-translate-y-2 transform duration-300 rounded-lg`}>
        Lihat CV
      </button>
    </div>
  } else if (info.orasi) {
    pages = <div className="w-[70%] flex flex-col items-center justify-center p-4 h-3/4 text-justify">
      <h1>Video orasi dapat dilihat melalui link dibawah ini </h1>
      <button onClick={() => window.open(text.orasi, "_blank")} className={`${pixelgamer.className} text-secondary-darkred mt-6 bg-primary-light hover:bg-primary-dark pt-2 pb-2 pl-6 pr-6 hover:-translate-y-2 transform duration-300 rounded-lg`}>
        Lihat Orasi
      </button>
    </div>
  }

  return (
    <div className="flex md:flex-row flex-col items-center p-4 transition-all duration-300">
      {/* Candidate photo */}
      <div className="md:w-[30%] flex justify-center items-center h-full">
        <Image alt="Candidate" src={srcImg} width={250} height={250}/>
      </div>
      {pages}
    </div>
  )
}

export default function Modal({open, onClose, srcImg, text}) {
  const [info, setInfo] = useState({profil: true, cv: false, orasi: false, exit: false});
  let pages = <Information srcImg={srcImg.cv} info={info} text={text}/>
  return (
    <div onClick={onClose} className={`w-screen h-screen md:mt-6 z-50 fixed overflow-hidden inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      {/* Modal */}
      <div onClick={e => e.stopPropagation()} className={`bg-[#45423F] overflow-y-scroll w-full md:w-5/6 h-full md:h-2/3 shadow transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        {/* Button content */}
        <div className="w-full mt-24 md:mt-0 flex justify-evenly items-center h-14 md:text-base text-xs">
          <button className={`transition-all duration-300 ${pixelgamer.className} ${(info.profil) ? "text-primary-light" : "text-white"}`} onClick={() => setInfo({profil: true, cv: false, orasi: false, exit: false})}>
            Profil dan Visi Misi
          </button>
          <button className={`transition-all duration-300 ${pixelgamer.className} ${(info.cv) ? "text-primary-light" : "text-white"}`} onClick={() => setInfo({profil: false, cv: true, orasi: false, exit: false})}>
            CV
          </button>
          <button className={`transition-all duration-300 ${pixelgamer.className} ${(info.orasi) ? "text-primary-light" : "text-white"}`} onClick={() => setInfo({profil: false, cv: false, orasi: true, exit: false})}>
            Orasi
          </button>
          <button className={`transition-all duration-300 ${pixelgamer.className} ${(info.exit) ? "text-primary-light" : "text-white"}`} onClick={onClose}>
            Keluar
          </button>
        </div>
        <div className="w-full h-[3px] bg-primary-light"/>
        <div className="w-full h-full bg-[#45423F]">
          {pages}
        </div>
      </div>
    </div>
  )
}