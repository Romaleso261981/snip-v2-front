import Image from "next/image";

import { fetchAPI } from "@/utils/fetch-api";
import { endpoints } from "@/configs/endpoints";
import { getStrapiMedia } from "@/utils/api-helpers";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";

export default async function GallerySection({ locale }: { locale: string }) {
  const urlParamsObject = {
    populate: {
      gallery: {
        populate: {
          galleryCard: {
            populate: "*"
          }
        }
      }
    },
    locale: locale
  };

  const { data } = await fetchAPI(endpoints.home, urlParamsObject);

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-row justify-center items-center text-center p-4 pb-8">
        {data.gallery.galleryCard.map(image => {
          return (
            <div className="w-full md:w-1/4 p-2" key={image.id}>
              <Image
                src={getStrapiMedia(image.img[0].url) || ""}
                alt="Galery Image"
                width={2400}
                height={1600}
              />
            </div>
          );
        })}
      </div>
      <EmblaCarousel images={data.gallery.galleryCard} />
    </div>
  );
}
