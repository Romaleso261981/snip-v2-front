import { FC } from "react";
import Image from "next/image";

import defaultImageBg from "@/assets/hero/heroBg.jpg";
import { getStrapiMedia } from "@/lib/strapi";

type StrapiImageRespons = {
  id: number;
  documentId: string;
  hash: string;
  ext: string;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
  height: number;
  createdAt: string;
};

type HeroProps = {
  data: {
    data: {
      Hero: {
        id: string;
        heroTitle: string;
        heroBg: StrapiImageRespons;
      };
    };
  };
};

const Hero: FC<HeroProps> = ({ data }) => {
  console.log("============================", data.data.Hero);

  if (!data.data.Hero) return null;
  const url = getStrapiMedia(data.data.Hero.heroBg.url);
  console.log("url", url);

  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src={url || defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {data.data.Hero.heroTitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
