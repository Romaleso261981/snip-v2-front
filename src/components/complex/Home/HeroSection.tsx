"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import defaultImageBg from "@/assets/hero/heroBg.jpg";

type reponsdataHeroSection = {
  Hero: {
    heroTitle: string;
    heroBG: StaticImageData | null | string;
  };
};

type HeroProps = {
  data: reponsdataHeroSection;
  image?: StaticImageData;
  alt: string;
};

const Hero: FC<HeroProps> = ({ data: { Hero } }) => {
  return (
    <header className="relative overflow-hidden h-screen">
      <Image
        src={Hero.heroBG ?? defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {Hero.heroTitle}
        </h2>
      </div>
    </header>
  );
};

export default Hero;
