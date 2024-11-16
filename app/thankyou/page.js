import React from 'react';
import Suwun from '@/common/constant/thankyou/Suwun';
import Technocracy from '@/common/constant/thankyou/Technocracy';
import HomeButton from '@/common/constant/thankyou/HomeButton';
import Image from 'next/image';

function KPUThankYou() {
  return (
    <main className="flex flex-col rounded-none">
      <section className="flex relative flex-col justify-center items-center px-20 py-48 w-full min-h-[1080px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b24566e8c105d63ba8cafb624f29a308c6d70e4c7ee85a36e82a4dc7c4bdb70?placeholderIfAbsent=true&apiKey=22e29311379644cabaabda6a2d09ec99" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-center mb-0 w-full max-w-[1500px] max-md:mb-2.5 max-md:max-w-full">
          <Suwun />
          <Technocracy />
          <HomeButton />
        </div>
      </section>
    </main>
  );
}

export default KPUThankYou;