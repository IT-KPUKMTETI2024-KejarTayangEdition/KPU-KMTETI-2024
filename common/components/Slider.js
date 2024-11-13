'use client';

import { useState } from "react";
import { LeftSliderButton, RightSliderButton } from "../constant/images";
import { path } from "../constant/about/committee/path";
import Image from "next/image";

export default function Slider({children : slides, leftButton, rightButton}) {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        <div className="overflow-hidden relative bg-gradient-to-b from-primary-light to-primary-dark border-b-2 border-secondary-darkred w-[60%] h-72 rounded-3xl ">
            <div className="flex w-full h-full bg-gradient-to-b from-primary-light to-primary-dark transition-transform ease-out duration-700" style={{transform: `translateX(-${curr*100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-6">
                <button onClick={prev} className="">
                    <LeftSliderButton className="w-4" />
                </button>
                <button onClick={next}>
                    <RightSliderButton className="w-4" />
                </button>
            </div>
        </div>
    )
}