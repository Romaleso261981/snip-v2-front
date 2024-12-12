import { Metadata } from "next";

import HomeLayout from "@/components/layout/HomeLayout/HomeLayout";

import { getMainStrapiData } from "@/utils/fetch-api";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/complex/Home/Hero";
import DescriptionSection from "@/components/complex/Home/Description";
import GallerySection from "@/components/complex/Home/Gallery";

export const metadata: Metadata = {
  title: "СНІП",
  description:
    "СНІП - майстерня солом’яних виробів, у якій надихаємося традиційною культурою для осмислення її у сучасному інтер’єрі. Цінністю наших виробів є те, що вони створені власноруч від зерна до стебла, від соломини до павука. Жито сіємо на рідних полях, вирощуємо та дбаємо про нього, згодом збираємо руками врожай та готуємо житню солому для наступних робіт."
};

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data_V2 } = await getMainStrapiData(locale);

  if (!data_V2) return <Loader />;

  return (
    <HomeLayout>
      <HeroSection data={data_V2.hero} />
      <DescriptionSection about={data_V2.about} button={data_V2.button} />
      <GallerySection gallery={data_V2.gallery} />
    </HomeLayout>
  );
}
