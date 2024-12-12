import DoItYourself from "@/components/complex/DoItYourself/DoItYourself";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { getDoItYourselfStrapiData } from "@/utils/fetch-api";

export default async function CheckOut({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { data } = await getDoItYourselfStrapiData(locale);

  return (
    <GeneralLayout>
      <DoItYourself data={data} />
    </GeneralLayout>
  );
}
