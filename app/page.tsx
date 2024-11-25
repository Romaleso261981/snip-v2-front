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
    "https://genuine-leader-12ee988260.strapiapp.com/api/home",
    {
      headers: {
        Authorization:
          "Bearer 00dba3d7c0f826c7cd824d1da8c94068e196cd74412cbd8d7ef663c73a19df52b614c24bb24bba8a094b11c28983121913cd3e0b9ee217f27d22a3f0591916716d65a18194d3fe9fb018a969bd46e0715a31bde6ad231dc0d13e48f480e64bb4dc05b18f35dfe0147188ebdf33e135a2f32c8636c42f117c3c3d53cff69b59f8"
      }
    }
  );



  return (
    <section className="container mx-auto">
      <HomePageSection data={data?.data} />
    </section>
  );
}
