const defaultImageUrl = "https://via.placeholder.com/400";

import { FC } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";

type BasketProps = {
  image: string;
};

const BasketImage: FC<BasketProps> = ({ image }) => {
  return (
    <div className="w-1/3 flex flex-row justify-between">
      <Image
        src={getStrapiMedia(image) || defaultImageUrl}
        alt="image"
        width={800}
        height={800}
      />
    </div>
  );
};

export default BasketImage;
