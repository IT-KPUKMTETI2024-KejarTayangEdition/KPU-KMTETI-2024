'use client';

import {ComingSoon} from "@/common/components/coming-soon";
import Image from "next/image";
import imgPattern from "../../common/constant/about/about-pattern.svg"
import imgPatternMerge from "../../common/constant/about/about-pattern-merge.svg"
import CardView from "@/common/components/card-view";
import {dalekpinpoint} from "@/styles/font";
import {text} from "../../common/constant/text"
import {path} from "../../common/constant/about/committee/path"
import Slider from "@/common/components/Slider";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function About() {
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
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      
      
      <div data-aos="fade-up" data-aos-duration="700" className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section1.title1}</h1>
          <h1>{text.aboutPage.section1.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-xs md:text-base lg:text-lg text-center" text={text.aboutPage.section1.description} />
      </div>

      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 2 */}
      <div data-aos="fade-up" data-aos-duration="700" className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section2.title1}</h1>
          <h1>{text.aboutPage.section2.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-xs md:text-base lg:text-lg text-center" text={text.aboutPage.section2.description} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 3 */}
      <div data-aos="fade-up" data-aos-duration="700" className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section3.title1}</h1>
          <h1>{text.aboutPage.section3.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-xs md:text-base lg:text-lg text-left" text={text.aboutPage.section3.description} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 4: Swiper */}
      <div data-aos="fade-up" data-aos-duration="700" className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section4.title1}</h1>
          <h1>{text.aboutPage.section4.title2}</h1>
        </div> 
        <Slider>
          {path.map((p, k) => (
            <Image key={k} className="h-40 mobile-m:h-[11rem] mobile-l:h-64 md:h-80 lg:h-92" src={p} />
            ))}
        </Slider>
      </div>

      <Image className="mt-12 lg:mt-24" style={preventImageDrag}  src={imgPattern} />
    </div>
  )
}