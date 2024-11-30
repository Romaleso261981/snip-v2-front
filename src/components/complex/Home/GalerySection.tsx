"use client";

import { FC } from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";

import image1 from "@/assets/galery/GaleryImg1.png";
import image2 from "@/assets/galery/GaleryImg2.png";
import image3 from "@/assets/galery/GaleryImg3.png";
import image4 from "@/assets/galery/GaleryImg4.png";

const images = [
  { id: 1, src: image1, alt: "Galery Image 1" },
  { id: 2, src: image2, alt: "Galery Image 2" },
  { id: 3, src: image3, alt: "Galery Image 3" },
  { id: 4, src: image4, alt: "Galery Image 4" },
];


const Galery: FC = () => {

  const width = 460;
  const height = 440;

  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-row justify-center items-center text-center p-4 pb-8">
        {images.map((image) => (
          <div className="w-full md:w-1/4 p-2" key={image.id}>
            <Image
              src={image.src ?? imageFallback}
              alt={image.alt}
              width={width}
              height={height}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <EmblaCarousel images={images} width={width} height={height} />
    </div>
  );
};

export default Galery;
