import HomeLayout from "@/components/layout/HomeLayout/HomeLayout";

import { getMainStrapiData } from "@/utils/fetch-api";
import Loader from "@/components/ui/Loader";
import HomePage from "@/components/complex/Home/HomePage";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getMainStrapiData(locale);

  if (!data) return <Loader />;

  return (
    <HomeLayout>
      <HomePage data={data} />
    </HomeLayout>
  );
}

// or Dynamic metadata
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; productId: string; locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getMainStrapiData(locale);

  if (!data) return;

  return {
    title: data.about.title,
    description: data.about.text
  };
}
