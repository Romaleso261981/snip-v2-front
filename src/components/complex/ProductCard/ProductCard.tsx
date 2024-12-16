import { getStrapiMedia_V2 } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import AddToBasketButton from "./ui/AddToBasketButton";

export default function ProductCard({
  product,
  locale
}: {
  locale: string;
  product: Card;
}) {
  const t = useTranslations("ProductCard");

  const imageUrl = getStrapiMedia_V2(product.image.url);

  console.log("product", product);

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
        <div className="w-5/6 py-6 md:w-1/2">
          <Image
            src={imageUrl || ""}
            alt="Image description"
            layout="responsive"
            width={100}
            height={200}
          />
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
              <p className="text-black">
                {product.includes}
              </p>
              <Link href={"/"}>....Load more</Link>
            </div>
          </div>
          <AddToBasketButton buttonText={t("addToBasket")} product={product} />
        </div>
      </div>
    </div>
  );
}
