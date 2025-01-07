import ProductCard from "@/components/complex/ProductCard/ProductCard";
import { ProductTabs } from "@/components/complex/ProductCard/ProductTabs";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import Loader from "@/components/ui/Loader";
import { endpoints } from "@/configs/endpoints";
import { NaboriResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
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
      <ProductCard product={currentProduct} locale={locale} />
      <ProductTabs className="my-10" product={currentProduct} />
    </GeneralLayout>
  );
}

// or Dynamic metadata
export async function generateMetadata({
  params
}: {
  params: Promise<{ productId: string; locale: string }>;
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

  if (!currentProduct) return;

  const icon = getStrapiMedia(currentProduct.image.url);

  return {
    title: currentProduct.name,
    description: currentProduct.includes,
    icons: {
      icon: icon,
      size: "sm"
    }
  };
}
