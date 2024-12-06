"use client";

import { FC, useEffect, useState } from "react";
import BasketDescription from "./ui/BasketDescription";
import { endpoints } from "@/configs/endpoints";
import { fetchAPI } from "@/utils/fetch-api";
import { BasketStrapiRespons } from "@/types/ProductItemTypes";
import Loader from "@/components/Loader";

const Basket: FC = () => {
  const [basketData, setBasketData] = useState<BasketStrapiRespons | null>(
    null
  );
  useEffect(() => {
    async function fetchBasketData() {
      try {
        const urlParamsObject = {
          populate: "*",
          locale: "uk"
        };

        const { data }: { data: BasketStrapiRespons } = await fetchAPI(
          endpoints.basket,
          urlParamsObject
        );

        setBasketData(data);
      } catch (error) {
        console.error("Failed to fetch basket data:", error);
      } finally {
      }
    }
    fetchBasketData();
  }, []);

  if (!basketData) return <Loader />;

  return <BasketDescription data={basketData} />;
};

export default Basket;
