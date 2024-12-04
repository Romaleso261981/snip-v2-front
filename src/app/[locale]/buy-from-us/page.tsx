import BuyFromUsDescription from "@/components/complex/BuyFromUs/BuyFromUsDescription";
import CardList from "@/components/complex/BuyFromUs/CardList";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { endpoints } from "@/configs/endpoints";
import { HomeStrapiResponce } from "@/types/ProductItemTypes";
import { fetchAPI } from "@/utils/fetch-api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Buy from us",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function page({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const urlParamsObject = {
    populate: {
      cards: {
        populate: "*"
      }
    },
    locale: locale
  };

  const { data }: { data: HomeStrapiResponce } = await fetchAPI(
    endpoints.byFromUs,
    urlParamsObject
  );

  console.log("ByFromUs data", data);

  return (
    <GeneralLayout>
      <BuyFromUsDescription description={data.description} title={data.title} />
      <CardList cards={data.cards} />
    </GeneralLayout>
  );
}
