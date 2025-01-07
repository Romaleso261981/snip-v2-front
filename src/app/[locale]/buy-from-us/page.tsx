import BuyFromUsDescription from "@/components/complex/BuyFromUs/BuyFromUsDescription";
import ProductList from "@/components/complex/BuyFromUs/ProductList";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { SearchParams } from "@/types/apiStrapiTypes";
import { getByFromUsStrapiData, getNaborisData } from "@/utils/fetch-api";
import React from "react";

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

// or Dynamic metadata
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getByFromUsStrapiData(locale);

  if (!data) return;

  return {
    title: data.main.title,
    description: data.main.text
  };
}
