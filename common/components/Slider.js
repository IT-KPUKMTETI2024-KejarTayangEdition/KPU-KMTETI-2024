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
        <div className="flex flex-row w-[85%] md:w-[95%]">
            <button onClick={prev} className="mr-1 md:mr-4 lg:mr-6">
                <LeftSliderButton className="w-3 md:w-6 lg:w-6" />
            </button>
            <div className="overflow-hidden relative mobile-s:w-72 mobile-m:w-80 mobile-l:w-[25rem] mobile-l-tablet:w-[32rem] md:w-[38rem] lg:w-[44rem] border-b-2 bg-gradient-to-b from-primary-light to-primary-dark border-secondary-darkred rounded-xl ">
                <div className="flex bg-gradient-to-b  transition-transform ease-out duration-700" style={{transform: `translateX(-${curr*100}%)`}}>
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between">
                </div>
            </div>
            <button onClick={next} className="ml-1 md:ml-4 lg:ml-6">
                <RightSliderButton className="w-3 md:w-6 lg:w-6" />
            </button>
        </div>
    )
}