import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";

import defaultImageBg from "@/assets/hero/heroBg.jpg";
import { usePathname } from "next/navigation";
import { fetchAPI } from "@/utils/fetch-api";
import Loader from "@/components/Loader";
import { getStrapiMedia } from "@/utils/api-helpers";

const Hero: FC = () => {
  const [data, setData] = useState<any>([]);
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
            Hero: {
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
          setData(responseData.data.Hero);
        } else {
          setData((prevData: any[]) => [
            ...prevData,
            ...responseData.data.Hero
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

  const imageUrl = getStrapiMedia(data.heroBg.url);
  console.log("Hero data", imageUrl);

  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src={imageUrl || defaultImageBg}
        alt="Galery Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end h-full text-center text-white bg-opacity-20">
        <h2 className="text-4xl font-medium md:text-5xl font-montserrat lg:text-[45px] mb-8">
          {data.heroTitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
