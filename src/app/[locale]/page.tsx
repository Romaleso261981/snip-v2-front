import HomePageSection from "@/components/complex/Home/HomePageSection";
import { Endpoints } from "@/configs/endpoints";
import { getStrapiData } from "@/lib/strapi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "СНІП",
  description:
    "СНІП - майстерня солом’яних виробів, у якій надихаємося традиційною культурою для осмислення її у сучасному інтер’єрі. Цінністю наших виробів є те, що вони створені власноруч від зерна до стебла, від соломини до павука. Жито сіємо на рідних полях, вирощуємо та дбаємо про нього, згодом збираємо руками врожай та готуємо житню солому для наступних робіт."
};

export default async function HomePage() {
  const { data } = await getStrapiData(Endpoints.getHomeData);

  return (
    <section className="container mx-auto">
      <HomePageSection data={data} />
    </section>
  );
}
