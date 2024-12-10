import Loader from "@/components/Loader";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";
import { GalleryStrapiData } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import { FC } from "react";

type GallerySectionProps = {
  gallery: GalleryStrapiData[];
};

const GallerySection: FC<GallerySectionProps> = ({ gallery }) => {
  console.log("Gallery Data", gallery);

  if (!gallery) return <Loader />;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-wrap justify-center items-center text-center p-4 pb-8">
        {gallery.map(image => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={image.id}>
              <div className="relative w-full h-0 pb-[66.66%]">
                <Image
                  src={getStrapiMedia(image.images.url) || ""}
                  alt="Gallery Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <EmblaCarousel data={gallery} />
    </div>
  );
};

export default GallerySection;
