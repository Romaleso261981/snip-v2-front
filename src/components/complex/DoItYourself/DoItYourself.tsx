import Image from "next/image";

import { BuyFromUsResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";

export default function DoItYourself({ data }: { data: BuyFromUsResponce }) {
  console.log(data);

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="text-gold font-montserrat font-weight-500 text-2xl pb-4">
          {data.main.title}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          {data.main.text}
        </p>
        <p className="text-center text-black font-montserrat font-weight-500 text-2xs">
          {data.main.text2}
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image
          alt="bg"
          src={getStrapiMedia(data.examples.image.url) || ""}
          width={data.examples.image.width}
          height={data.examples.image.height}
          className="mb-4"
        />
        <h4 className="text-black font-montserrat font-weight-500 text-2xs">
          {data.examples.text}
        </h4>
      </div>
    </div>
  );
}
