"use client";
import { useContext, useEffect } from "react";
import { Metadata } from "next";

import HomeLayout from "@/components/layout/HomeLayout/HomeLayout";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/complex/Home/Hero";
import DescriptionSection from "@/components/complex/Home/Description";
import GallerySection from "@/components/complex/Home/Gallery";
import Reviews from "@/components/ui/Reviews";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/router";
import { HomeStrapiResponce } from "@/types/apiStrapiTypes";

export const metadata: Metadata = {
  title: "СНІП",
  description:
    "СНІП - майстерня солом’яних виробів, у якій надихаємося традиційною культурою для осмислення її у сучасному інтер’єрі. Цінністю наших виробів є те, що вони створені власноруч від зерна до стебла, від соломини до павука. Жито сіємо на рідних полях, вирощуємо та дбаємо про нього, згодом збираємо руками врожай та готуємо житню солому для наступних робіт."
};

export default function HomePage({ data }: { data: HomeStrapiResponce }) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(
    () => {
      if (!user.isLoggedIn) {
        router.push("/login");
      }
    },
    [user, router]
  );

  if (!data) return <Loader />;

  return (
    <HomeLayout>
      <HeroSection data={data.hero} />
      <DescriptionSection about={data.about} button={data.button} />
      <GallerySection gallery={data.gallery} />
      <Reviews />
    </HomeLayout>
  );
}
