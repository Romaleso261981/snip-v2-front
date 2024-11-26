import axios from "axios";
import { Metadata } from "next";
import HomePageSection from "./components/HomePageSection";

export const metadata: Metadata = {
  title: "СНІП",
  description:
    "СНІП - майстерня солом’яних виробів, у якій надихаємося традиційною культурою для осмислення її у сучасному інтер’єрі. Цінністю наших виробів є те, що вони створені власноруч від зерна до стебла, від соломини до павука. Жито сіємо на рідних полях, вирощуємо та дбаємо про нього, згодом збираємо руками врожай та готуємо житню солому для наступних робіт."
};

export default async function HomePage() {
  const {
    data
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home`,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      }
    }
  );



  return (
    <section className="container mx-auto">
      <HomePageSection data={data?.data} />
    </section>
  );
}
