import {Welcome} from "@/modules/home";
import Image from "next/image";
import imgTop from "../common/constant/landing-page/top.svg"
import imgBottom from "../common/constant/landing-page/bottom.svg"
import {text} from '../common/constant/text'


export default function Home() {
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }
  
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <div className="flex w-full min-h-screen"></div>
      {/* Section 2 */}
      <div className="w-full min-h-screen flex flex-col">
        <Image src={imgTop} className="" style={preventImageDrag} />
        <div className="bg-primary-light w-full min-h-screen">
        </div>
        <Image src={imgBottom} className="" style={preventImageDrag} />
      </div>

      {/* Section 3 */}
      <div className="w-full min-h-screen"></div>
    </div>
  );
}
