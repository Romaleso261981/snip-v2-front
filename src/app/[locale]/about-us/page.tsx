import Image from "next/image";
import { Metadata } from "next";
import { Data, image5, image6, image7 } from "./mockData";

export const metadata: Metadata = {
  title: "About US",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto pt-10 md:p-0">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h2 className="text-xxl mb-5 ma:mb-10">
          {Data.mainTitle}
        </h2>
        <div className="w-11/12 px-2 md:w-2/3 ">
          <p className="mb-10 ma:mb-20">
            {Data.description1}
          </p>
          <p className="mb-10 ma:mb-20">
            {Data.description2}
          </p>
        </div>
        <div className="flex md:hidden ">
          <Image
            src={image5}
            alt="image5"
            objectFit="cover"
            layout="fixed"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex flex-row ">
          {Data.images.map((image, index) =>
            <div key={index} className="w-full mt-10">
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  objectFit="cover"
                  layout="fixed"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mt-20 md:flex-row md:justify-between md:px-3">
          <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
            {Data.description_Lilya}
          </p>
          <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
            {Data.description_Marta}
          </p>
        </div>
        <div className="hidden md:flex flex-row">
          <Image
            src={image6}
            alt="image6"
            objectFit="cover"
            layout="fixed"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="w-full flex md:hidden">
          <Image
            src={image7}
            width={2400}
            alt="image6"
            objectFit="cover"
            layout="fixed"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="w-11/12 px-2 py-10 md:w-2/5">
          <p className="py-10">
            {Data.description5}
          </p>
          <p className="py-10">
            {Data.description6}
          </p>
        </div>
      </div>
    </div>
  );
}
