import React, { FC, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from "next/image";

type EmblaCarouselProps = {
  images: { id: number; src: StaticImageData; alt: string }[];
  width: number;
  height: number;
};

const EmblaCarousel: FC<EmblaCarouselProps> = ({ images, width, height }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const imageFallback = `https://placehold.co/${width}x${height}`;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative block md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image) => (
            <div className="flex-shrink-0 flex-grow-0 flex-basis-full min-w-0" key={image.id}>
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
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`w-2 h-2 ${selectedIndex === index ? 'bg-slate-100' : 'bg-gray-300'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
