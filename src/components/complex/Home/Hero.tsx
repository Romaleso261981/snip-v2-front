import { FC } from "react";
import Image from "next/image";

import defaultImageBg from "@/assets/hero/hero.jpg";
import { fetchAPI } from "@/utils/fetch-api";
import { endpoints } from "@/configs/endpoints";
import { getStrapiMedia } from "@/utils/api-helpers";

type HeroSectionProps = {
  locale: string;
};

const HeroSection: FC<HeroSectionProps> = async ({ locale }) => {
  const urlParamsObject = {
    populate: {
      Hero: {
        populate: "*"
      }
    },
    pagination: {
      start: 0,
      limit: 6
    },
    locale: locale
  };

  const { data:{Hero} } = await fetchAPI(endpoints.home, urlParamsObject);

  console.log(Hero);

  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src={getStrapiMedia(Hero.heroBg.url) ?? defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {Hero.heroTitle}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
