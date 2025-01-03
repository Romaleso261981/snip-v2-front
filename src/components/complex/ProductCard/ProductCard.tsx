// import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";
import { Card, Images } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import AddToBasketButton from "./ui/AddToBasketButton";
import TextTruncate from "@/utils/truncateText";
import ProductImages from "@/components/ui/ProductImages";

export const images: Images = [
  {
    _id: 1,
    url:
      "https://snip-v2-front.vercel.app/_next/image?url=https%3A%2F%2Fstrapi-cms-production-f73b.up.railway.app%2Fuploads%2Fimg3_b552ed9284.png&w=384&q=75"
  },
  {
    _id: 2,
    url:
      "https://snip-v2-front.vercel.app/_next/image?url=https%3A%2F%2Fstrapi-cms-production-f73b.up.railway.app%2Fuploads%2Fimg2_44b84723d7.png&w=384&q=75"
  },
  {
    _id: 3,
    url:
      "https://snip-v2-front.vercel.app/_next/image?url=https%3A%2F%2Fstrapi-cms-production-f73b.up.railway.app%2Fuploads%2FFrame_b7cf290f04.jpg&w=750&q=75"
  },
  {
    _id: 4,
    url:
      "https://snip-v2-front.vercel.app/_next/image?url=https%3A%2F%2Fstrapi-cms-production-f73b.up.railway.app%2Fuploads%2Fimg1_12cc9e31db.png&w=384&q=75"
  }
];

export default function ProductCard({
  product,
  locale
}: {
  locale: string;
  product: Card;
}) {
  const t = useTranslations("ProductCard");

  // const imageUrl = getStrapiMedia(product.image.url);

  return (
    <div className="container">
      <div className="w-full flex flex-row md:pl-10">
        <Link
          href={`/${locale}/buy-from-us`}
          className="flex items-center mx-4 mb-3 cursor-pointer"
        >
          {t("backButtonText")}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center w-full justify-around ">
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages images={images} />
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:px-10">
          <div className="w-full flex flex-col items-start justify-start font-weight-500 text-black ">
            <h4 className="border-b border-gold py-2 md:text-xl md:pb-5">
              {product.name}
            </h4>
            <div className="flex flex-row items-end gap-2 mt-2 md:text-xl md:pt-5">
              <span className="text-gold text-xl">
                {product.price}
              </span>
              <span>
                {t("currency")}
              </span>
            </div>
          </div>
          <div>
            <div className="pt-3">
              <h4 className="py-1 text-gold">
                {t("sizeTitle")}
              </h4>
              <p className="text-black">
                {product.size}
              </p>
            </div>
            <div className="pt-3">
              <h4 className="">
                {t("materialTitle")}
              </h4>
              <p className="text-black">
                {product.material}
              </p>
            </div>
            <div className="pt-5">
              <h4 className="">
                {t("includesTitle")}
              </h4>
              <div className="text-black">
                <TextTruncate
                  text={product.includes}
                  maxLength={150}
                  linkColorClass="text-gold"
                />
              </div>
            </div>
          </div>
          <AddToBasketButton buttonText={t("addToBasket")} product={product} />
        </div>
      </div>
    </div>
  );
}
