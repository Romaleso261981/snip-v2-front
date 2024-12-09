import Loader from "@/components/Loader";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";
import { HomeStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import { FC } from "react";

type GallerySectionProps = {
  data: HomeStrapiResponce;
};

const GallerySection: FC<GallerySectionProps> = ({ data }) => {
  if (!data) return <Loader />;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-wrap justify-center items-center text-center p-4 pb-8">
        {data.gallery.map(image => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={image.id}>
              <div className="relative w-full h-0 pb-[66.66%]">
                <Image
                  src={getStrapiMedia(image.images.formats.thumbnail.url) || ""}
                  alt="Gallery Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <EmblaCarousel data={data.gallery} />
    </div>
  );
};

export default GallerySection;
