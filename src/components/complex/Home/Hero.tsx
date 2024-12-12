import { FC } from "react";
import Image from "next/image";

import defaultImageBg from "@/assets/hero/hero.jpg";
import { HeroStrapiData } from "@/types/apiStrapiTypes";
import { getStrapiMedia_V2 } from "@/utils/api-helpers";

type HeroSectionProps = {
  data: HeroStrapiData;
};

const HeroSection: FC<HeroSectionProps> = async ({ data }) => {

  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src={getStrapiMedia_V2(data.image.url) ?? defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {data.text}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
