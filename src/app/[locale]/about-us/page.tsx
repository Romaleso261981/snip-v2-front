import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { getAboutStrapiData } from "@/utils/fetch-api";
import Loader from "@/components/ui/Loader";
import TopDescription from "@/components/complex/About/TopDescription";
import MidleDescription from "@/components/complex/About/MidleDescription";
import BottomDescription from "@/components/complex/About/BottomDescription";
import { AboutStrapiResponce } from "@/types/apiStrapiTypes";

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
        <TopDescription main={data.main} mainBottomText={data.mainBottomText} />
        <MidleDescription data={data} />
        <BottomDescription data={data} />
      </div>
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

  const { data }: { data: AboutStrapiResponce } = await getAboutStrapiData(
    locale
  );

  if (!data) return;

  return {
    title: data.main.title,
    description: data.main.text
  };
}
