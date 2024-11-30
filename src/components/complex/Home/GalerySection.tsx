"use client";

import { FC } from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";

import { StrapiImageRespons } from "./HeroSection";
import { getStrapiMedia } from "@/lib/strapi";


type GaleryProps = {
  data: {
    galleryCard: {
      id: string;
      href: string;
      img: StrapiImageRespons[];
    }[];
  };
};


const Galery: FC<GaleryProps> = ({data}) => {

  const width = 460;
  const height = 440;

  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-row justify-center items-center text-center p-4 pb-8">
        {data.galleryCard.map((image) => {
          const url = getStrapiMedia(image.img[0].url );
          return (
          <div className="w-full md:w-1/4 p-2" key={image.id}>
            <Image
              src={url ?? imageFallback}
              alt="Galery Image"
              width={width}
              height={height}
              objectFit="cover"
            />
          </div>
        )})}
      </div>
      <EmblaCarousel images={data.galleryCard} width={width} height={height} />
    </div>
  );
};

export default Galery;
