import BuyFromUsDescription from "@/components/complex/BuyFromUs/BuyFromUsDescription";
import ProductList from "@/components/complex/BuyFromUs/ProductList";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { SearchParams } from "@/types/apiStrapiTypes";
import { getByFromUsStrapiData, getNaborisData } from "@/utils/fetch-api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Buy from us",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function page({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { locale } = await params;

  const { data } = await getByFromUsStrapiData(locale);
  const { data: naboris } = await getNaborisData(locale, await searchParams);

  return (
    <GeneralLayout>
      <BuyFromUsDescription data={data} cards={naboris} />
      <ProductList />
    </GeneralLayout>
  );
}
