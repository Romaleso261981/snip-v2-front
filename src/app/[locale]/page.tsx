import { Metadata } from "next";

import HomeLayout from "@/components/layout/HomeLayout/HomeLayout";
import HeroSection from "@/components/complex/Home/Hero";
import DescriptionSection from "@/components/complex/Home/Description";
import GallerySection from "@/components/complex/Home/Gallery";

import { endpoints } from "@/configs/endpoints";
import { fetchAPI } from "@/utils/fetch-api";

export const metadata: Metadata = {
  title: "СНІП",
  description:
    "СНІП - майстерня солом’яних виробів, у якій надихаємося традиційною культурою для осмислення її у сучасному інтер’єрі. Цінністю наших виробів є те, що вони створені власноруч від зерна до стебла, від соломини до павука. Жито сіємо на рідних полях, вирощуємо та дбаємо про нього, згодом збираємо руками врожай та готуємо житню солому для наступних робіт."
};

export default async function HomePage({
  params
}: {
  params: { locale: string };
}) {
  const urlParamsObject = {
    populate: "*",
    locale: params.locale
  };

  const { data } = await fetchAPI(endpoints.home, urlParamsObject);

  return (
    <HomeLayout>
      <HeroSection locale={params.locale} />
      <DescriptionSection
        title={data.title}
        description={data.description}
        button={data.button}
      />
      <GallerySection locale={params.locale} />
    </HomeLayout>
  );
}
