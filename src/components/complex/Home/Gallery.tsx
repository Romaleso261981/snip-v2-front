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
  console.log(data);

  if (!data) return <Loader />;

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-row justify-center items-center text-center p-4 pb-8">
        {data.gallery.map(image => {
          return (
            <div className="w-full md:w-1/4 p-2" key={image.id}>
              <Image
                src={getStrapiMedia(image.images.url) || ""}
                alt="Galery Image"
                width={2400}
                height={1600}
              />
            </div>
          );
        })}
      </div>
      <EmblaCarousel images={data.gallery} />
    </div>
  );
};
export default GallerySection;
