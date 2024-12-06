import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default async function SeparatorImage({
  separatorImage
}: {
  separatorImage: {
    url: string;
    width: number;
    height: number;
    name: string;
  };
}) {
  return (
    <div className="">
      <div className="hidden md:flex flex-row">
        <Image
          src={getStrapiMedia(separatorImage.url) || ""}
          alt="image6"
          width={separatorImage.width}
          height={separatorImage.height}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="w-full flex md:hidden">
        <Image
          src={getStrapiMedia(separatorImage.url) || ""}
          width={separatorImage.width}
          height={separatorImage.height}
          alt="image6"
          loading="lazy"
        />
      </div>
    </div>
  );
}