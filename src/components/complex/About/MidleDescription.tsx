import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default async function MidleDescription({
  desctopImages,
  mobileImage,
  leftFounder,
  rightFounder
}: {
  desctopImages: {
    id: string;
    url: string;
    width: number;
    height: number;
    name: string;
  }[];
  mobileImage: {
    id: string;
    url: string;
    width: number;
    height: number;
    name: string;
  };
  leftFounder: string;
  rightFounder: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:hidden ">
        <Image
          src={getStrapiMedia(mobileImage.url) || ""}
          alt="image5"
          width={mobileImage.width}
          height={mobileImage.height}
          objectFit="cover"
        />
      </div>
      <div className="hidden md:flex flex-row gap-11 ">
        {desctopImages.map((image, index) => {
          const url = getStrapiMedia(image.url);
          return (
            <div key={index} className="w-full mt-10">
              <div>
                <Image
                  src={url || ""}
                  alt="image5"
                  width={image.width}
                  height={image.height}
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center mt-20 md:flex-row md:justify-between md:px-3">
        <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
          {leftFounder}
        </p>
        <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
          {rightFounder}
        </p>
      </div>
    </div>
  );
}
