import CardDetail from "@/components/complex/CardDetail/CardDetail";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import Loader from "@/components/Loader";
import { endpoints } from "@/configs/endpoints";
import { NaboriResponce } from "@/types/apiStrapiTypes";
import { fetchAPI } from "@/utils/fetch-api";

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; productId: string }>;
}) {
  const { productId, locale } = await params;

  const urlParamsNabori = {
    populate: "*",
    locale: locale
  };

  const { data }: { data: NaboriResponce } = await fetchAPI(
    endpoints.naboris,
    urlParamsNabori
  );

  const currentProduct = data.find(product => product.id === Number(productId));

  if (!currentProduct) return <Loader />;

  return (
    <GeneralLayout>
      <CardDetail product={currentProduct} locale={locale} />
    </GeneralLayout>
  );
}
