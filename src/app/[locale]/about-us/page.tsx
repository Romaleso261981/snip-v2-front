import { Metadata } from "next";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { getAboutStrapiData } from "@/utils/fetch-api";
import Loader from "@/components/ui/Loader";
import TopDescription from "@/components/complex/About/TopDescription";
import MidleDescription from "@/components/complex/About/MidleDescription";
import BottomDescription from "@/components/complex/About/BottomDescription";
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

  const { data }: { data: AboutStrapiResponce } = await getAboutStrapiData(
    locale
  );

  if (!data) return <Loader />;

  return (
    <GeneralLayout>
      <div className="container mx-auto flex flex-col justify-center items-center w-full text-center pt-10 md:p-0">
        <TopDescription data={data} />
        <MidleDescription data={data} />
        <BottomDescription data={data} />
      </div>
    </GeneralLayout>
  );
}
