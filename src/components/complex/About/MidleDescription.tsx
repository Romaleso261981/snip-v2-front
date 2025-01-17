"use client";

import { AboutStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import TextTruncate from "@/utils/truncateText";
import Image from "next/image";

export default function MidleDescription({
  data
}: {
  data: AboutStrapiResponce;
}) {
  const { rightFounder, leftFounder, images: { images }, imagesDesctop } = data;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:hidden ">
        <Image
          src={getStrapiMedia(images[0].url) || ""}
          alt="image5"
          width={images[0].width}
          height={images[0].height}
          objectFit="cover"
        />
      </div>
      <div className="hidden md:flex flex-row justify-around w-full">
        {imagesDesctop.map((image, index) => {
          const url = getStrapiMedia(image.url);
          return (
            <div key={index} className="w-full flex justify-center mt-10">
              <div>
                <Image
                  src={url || ""}
                  alt="images from about us"
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
        <div className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
          <TextTruncate
            text={leftFounder}
            maxLength={150}
            linkColorClass="text-gold"
          />
        </div>
        <div className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
          <TextTruncate
            text={rightFounder}
            maxLength={150}
            linkColorClass="text-gold"
          />
        </div>
      </div>
    </div>
  );
}
