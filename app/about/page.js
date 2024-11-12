import {ComingSoon} from "@/common/components/coming-soon";
import Image from "next/image";
import imgPattern from "../../common/constant/about/about-pattern.svg"
import imgPatternMerge from "../../common/constant/about/about-pattern-merge.svg"
import CardView from "@/common/components/card-view";
import {dalekpinpoint} from "@/styles/font";
import {text} from "../../common/constant/text"

export default function About() {
  
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }
  
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section1.title1}</h1>
          <h1>{text.aboutPage.section1.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.aboutPage.section1.description} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 2 */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section2.title1}</h1>
          <h1>{text.aboutPage.section2.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.aboutPage.section2.description} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 3 */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section3.title1}</h1>
          <h1>{text.aboutPage.section3.title2}</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-left" text={text.aboutPage.section3.description} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 4: Swiper */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>{text.aboutPage.section4.title1}</h1>
          <h1>{text.aboutPage.section4.title2}</h1>
        </div>  
      </div>

      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPattern} />
    </div>
  )
}