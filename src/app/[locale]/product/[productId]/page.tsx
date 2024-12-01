"use client";

import Loader from "@/components/Loader";
import { BasketContext } from "@/contexts/basketContext";
import { getStrapiMedia } from "@/utils/api-helpers";
import { fetchAPI } from "@/utils/fetch-api";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

export default function ProductPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const productId = pathname.split("/")[3];

  const { addCardToBasket } = useContext(BasketContext);

  console.log("Product ID", productId);

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
          setData(responseData.data.cards);
        } else {
          setData((prevData: any[]) => [
            ...prevData,
            ...responseData.data.cards
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

  const currentProduct = data.find(
    (product: any) => product.id === Number(productId)
  );

  console.log("currentProduct", currentProduct);
  const imageUrl = getStrapiMedia(currentProduct.img[0].url);

  return (
    <div className="flex flex-row w-full justify-around mt-4 px-6 py-4">
      {imageUrl &&
        <Image
          src={imageUrl || ""}
          alt={"none provided"}
          className="object-cover overflow-hidden"
          width={400}
          height={400}
        />}
      <div
        className="flex flex-col py-5"
        onClick={() => addCardToBasket(currentProduct)}
      >
        <h4 className="font-weight-500 text-2xs">
          {currentProduct.title}
        </h4>
        <span>
          {currentProduct.cost} {currentProduct.currency}
        </span>
        <button className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-gold hover:bg-zinc-600">
          Add to basket
        </button>
      </div>
    </div>
  );
}
