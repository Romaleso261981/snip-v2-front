import Image from "next/image";
import { Metadata } from "next";
import { image5, image6, image7 } from "./mockData";
import qs from "qs";
import { getStrapiMedia } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "About US",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export type StrapiImageRespons = {
  id: number;
  documentId: string;
  hash: string;
  ext: string;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
  height: number;
  createdAt: string;
};

type responseStrapiData = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  image: StrapiImageRespons;
  images: StrapiImageRespons[];
};

export default async function AboutUsPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const query = qs.stringify(
    {
      populate: "*"
    },
    {
      encodeValuesOnly: true
    }
  );

  const response = await fetch(`${BASE_URL}/about?${query}`);
  const data: { data: responseStrapiData } = await response.json();
  console.log(data);

  if (!data.data.image) return null;
  const url = getStrapiMedia(data.data.image.url);

  return (
    <div className="container mx-auto pt-10 md:p-0">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h2 className="text-xxl mb-5 ma:mb-10">
          {data.data.title}
        </h2>
        <div className="w-11/12 px-2 md:w-2/3 ">
          <p className="mb-10 ma:mb-20">
            {data.data.description1}
          </p>
          <p className="mb-10 ma:mb-20">
            {data.data.description2}
          </p>
        </div>
        <div className="flex md:hidden w-5/6">
          <Image
            src={url ?? image5}
            width={2400}
            height={1600}
            alt="Galery Image"
            objectFit="cover"
          />
        </div>
        <div className="hidden md:flex flex-row ">
          {data.data.images.map((image, index) =>{
            const url = getStrapiMedia(image.url);
            return(<div key={index} className="w-full mt-10">
              <div>
                <Image
                  src={url ?? image.url}
                  width={2400}
                  height={1600}
                  alt="Galery Image"
                  objectFit="cover"
                />
              </div>
            </div>)
            }
          )}
        </div>
        <div className="flex flex-col justify-center items-center mt-20 md:flex-row md:justify-between md:px-3">
          <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
            {data.data.description4}
          </p>
          <p className="border-gold border-t-2 py-6 w-11/12 px-2 md:w-2/6 md:h-full">
            {data.data.description3}
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
            {data.data.description5}
          </p>
          <p className="py-10">
            {data.data.description6}
          </p>
        </div>
      </div>
    </div>
  );
}
