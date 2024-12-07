import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default async function SeparatorImage({
  separatorImage,
  separatorImage2
}: {
  separatorImage2: {
    url: string;
    width: number;
    height: number;
    name: string;
  };
  separatorImage: {
    url: string;
    width: number;
    height: number;
    name: string;
  };
}) {
  return (
    <div className="">
      <div className="hidden md:flex">
        <Image
          src={getStrapiMedia(separatorImage2.url) || ""}
          alt="image6"
          width={2400}
          height={10}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="flex md:hidden">
        <Image
          src={getStrapiMedia(separatorImage.url) || ""}
          width={2400}
          height={separatorImage.height}
          objectFit="cover"
          alt="image6"
          loading="lazy"
        />
      </div>
    </div>
  );
}
