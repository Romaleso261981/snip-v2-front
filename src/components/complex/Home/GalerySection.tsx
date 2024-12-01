"use client";

import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
// import EmblaCarousel from "@/components/ui/Carousel/Carousel";

import { usePathname } from "next/navigation";
import { fetchAPI } from "@/utils/fetch-api";
import Loader from "@/components/Loader";

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

const Galery: FC = () => {
  const [data, setData] = useState<StrapiImageRespons[] | []>([]);
  const [isLoading, setLoading] = useState(true);

  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const fetchData = useCallback(
    async (start: number, limit: number) => {
      setLoading(true);
      try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/home`;
        const urlParamsObject = {
          populate: {
            galary: {
              populate: "*"
            }
          },
          pagination: {
            start: start,
            limit: limit
          },
          locale: locale
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);

        if (start === 0) {
          setData(responseData.data.galary.galleryCard);
        } else {
          setData((prevData: StrapiImageRespons[]) => [
            ...prevData,
            ...responseData.data.galary.galleryCard
          ]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [locale]
  );

  useEffect(
    () => {
      fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    },
    [fetchData]
  );

  if (isLoading) return <Loader />;

  console.log("Galery data", data);

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex md:flex-row justify-center items-center text-center p-4 pb-8">
        {data.map((image: StrapiImageRespons) =>
          <div className="w-full md:w-1/4 p-2" key={image.id}>
            <Image
              src={image.url}
              alt="Galery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
      {/* <EmblaCarousel images={data} /> */}
    </div>
  );
};

export default Galery;
