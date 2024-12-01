"use client";

import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { fetchAPI } from "@/utils/fetch-api";
import Loader from "@/components/Loader";
import { usePathname } from "next/navigation";
import Hero from "./HeroSection";

const HomePageSection: FC = () => {
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
            button: {
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
          setData(responseData.data);
        } else {
          setData((prevData: any[]) => [...prevData, ...responseData.data]);
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

  return (
    <div>
      <section className="container mx-auto">
        <Hero />
        <div className="flex flex-col mx-auto pt-10 justify-center items-center md:w-full sm:max-w-3xl md:my-24">
          <div className="flex flex-col justify-center items-center w-full text-center p-4 pb-8 ">
            <h2 className="text-gold font-medium text-3xl leading-[38.4px]">
              {data.title}
            </h2>
            <p className="w-full text-black font-medium leading-[22.4px] mt-4">
              {data.description}
            </p>
            <Link
              className="md:w-[210px] md:h-[50px] md:mt-16 flex mt-16 justify-center items-center w-full h-12 text-md text-gold border-gold border-2 shadow hover:bg-gray-100"
              href={"/"}
            >
              {data.button.text}
            </Link>
          </div>
        </div>
        {/* <Galery /> */}
      </section>
    </div>
  );
};

export default HomePageSection;
