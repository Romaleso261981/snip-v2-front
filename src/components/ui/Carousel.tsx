"use client";

import React, { FC, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import { StrapiImage } from "@/types/apiStrapiTypes";

type EmblaCarouselProps = {
  images: StrapiImage[];
};

const EmblaCarousel: FC<EmblaCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const onSelect = useCallback(
    () => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    [emblaApi]
  );

  useEffect(
    () => {
      if (!emblaApi) return;
      emblaApi.on("select", onSelect);
      onSelect();
    },
    [emblaApi, onSelect]
  );

  return (
    <div className="relative block md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map(image => {
            const imageUrl = getStrapiMedia(image.url);
            return (
              <div
                className="flex-shrink-0 flex-grow-0 flex-basis-full min-w-0"
                key={image.id}
              >
                <Image
                  src={imageUrl || ""}
                  alt="Galery Image"
                  width={500}
                  height={600}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-2">
        {images.map((image, index) =>
          <button
            key={image.id}
            className={`w-2 h-2 ${selectedIndex === index
              ? "bg-slate-100"
              : "bg-gray-300"}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        )}
      </div>
    </div>
  );
};

export default EmblaCarousel;
