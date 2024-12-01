"use client";

// import image1 from "@/assets/BuyFromUs/img1.png";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchAPI } from "@/utils/fetch-api";
import Loader from "@/components/Loader";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

export default function BuyFromUs() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const fetchData = useCallback(
    async (start: number, limit: number) => {
      setLoading(true);
      try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/buyfromus`;
        const urlParamsObject = {
          populate: {
            cards: {
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

  console.log("BuyFromUs data", data);

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="font-montserrat font-weight-500 text-2xl pb-4">
          {data.title}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          {data.description}
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        {data.cards.map((card: any) => {
          const imageUrl = getStrapiMedia(card.img[0].url);
          return (
            <div
              className="flex flex-col w-full justify-around mt-4 px-4 py-4"
              key={card.id}
            >
              {imageUrl &&
                <Image
                  src={imageUrl || ""}
                  alt={"none provided"}
                  className="object-cover w-full h-full rounded-lg overflow-hidden"
                  width={400}
                  height={400}
                />}
              <h4 className="text-black font-montserrat font-weight-500 text-2xs">
                {card.title}
              </h4>
              <span>
                {card.cost} {card.currency}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
