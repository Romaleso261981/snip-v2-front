import { StrapiImage } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default async function BottomDescription({
  bottomSecondText,
  bottomFirstText,
  separatorImage,
  separatorImage2
}: {
  bottomSecondText: string;
  bottomFirstText: string;
  separatorImage: StrapiImage;
  separatorImage2: StrapiImage;
}) {
  return (
    <div>
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
      <div className="w-11/12 px-2 py-10 md:w-2/5">
        <p className="py-10">
          {bottomFirstText}
        </p>
        <p className="py-10">
          {bottomSecondText}
        </p>
      </div>
    </div>
  );
}
