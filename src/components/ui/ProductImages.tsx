"use client";

import { Images } from "@/types/apiStrapiTypes";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: Images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="images"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {images.map((item: any, i: number) =>
          <div
            className="w-1/4 h-32 relative gap-4 my-4 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.url}
              alt="images"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImages;
