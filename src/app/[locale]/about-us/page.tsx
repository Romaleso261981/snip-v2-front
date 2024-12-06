import { Metadata } from "next";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { fetchAPI } from "@/utils/fetch-api";
import { endpoints } from "@/configs/endpoints";
import Loader from "@/components/Loader";
import AboutUs from "@/components/complex/About/AboutUs";
import { AboutStrapiResponce } from "@/types/apiStrapiTypes";

export const metadata: Metadata = {
  title: "About US",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function AboutUsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const urlParamsObject = {
    populate: "*",
    locale: locale
  };

  const { data }: { data: AboutStrapiResponce } = await fetchAPI(
    endpoints.about,
    urlParamsObject
  );

  console.log("About Us", data);

  if (!data) return <Loader />;
  return (
    <GeneralLayout>
      <AboutUs data={data} />
    </GeneralLayout>
  );
}
