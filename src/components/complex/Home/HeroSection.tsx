import { FC } from "react";
import Image from "next/image";

import defaultImageBg from "@/assets/hero/heroBg.jpg";
import { getStrapiData } from "@/lib/strapi";
import { Endpoints } from "@/configs/endpoints";

const Hero: FC = async () => {
  const { data } = await getStrapiData(Endpoints.getHomeData);

  console.log(data.Hero.heroTitle);

  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src={defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {data.Hero.heroTitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
