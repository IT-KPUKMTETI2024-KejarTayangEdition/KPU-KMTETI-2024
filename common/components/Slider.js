'use client';

import { useState } from "react";
import { LeftSliderButton, RightSliderButton } from "../constant/images";
import { path } from "../constant/about/committee/path";
import Image from "next/image";

export default function Slider({children : slides}) {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        <div className="overflow-hidden relative mobile-s:w-72 mobile-m:w-80 mobile-l:w-[25rem] mobile-l-tablet:w-[32rem] md:w-[38rem] lg:w-[44rem] border-b-2 bg-gradient-to-b from-primary-light to-primary-dark border-secondary-darkred rounded-xl ">
            <div className="flex bg-gradient-to-b  transition-transform ease-out duration-700" style={{transform: `translateX(-${curr*100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-3 mobile-s:p-2 mobile-m:p-3 mobile-l:p-4 md:p-5 lg:p-6">
                <button onClick={prev} className="">
                    <LeftSliderButton className="w-2 md:w-3 lg:w-4" />
                </button>
                <button onClick={next}>
                    <RightSliderButton className="w-2 md:w-3 lg:w-4" />
                </button>
            </div>
        </div>
    )
}