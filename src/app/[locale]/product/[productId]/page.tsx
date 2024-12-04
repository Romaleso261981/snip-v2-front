import CardDetail from "@/components/complex/CardDetail/CardDetail";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import Loader from "@/components/Loader";
import { endpoints } from "@/configs/endpoints";
import { ByFromUsStrapiResponce } from "@/types/ProductItemTypes";
import { fetchAPI } from "@/utils/fetch-api";

export default async function Page({
  params: { productId, locale }
}: {
  params: { locale: string; productId: string };
}) {
  const urlParamsObject = {
    populate: {
      cards: {
        populate: "*"
      }
    },
    locale: locale
  };

  const { data }: { data: ByFromUsStrapiResponce } = await fetchAPI(
    endpoints.byFromUs,
    urlParamsObject
  );

  const currentProduct = data.cards.find(
    product => product.id === Number(productId)
  );

  if (!currentProduct) return <Loader />;

  return (
    <GeneralLayout>
      <CardDetail product={currentProduct} locale={locale} />
    </GeneralLayout>
  );
}
