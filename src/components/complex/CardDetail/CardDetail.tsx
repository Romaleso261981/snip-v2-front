import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
import AddToBasketButton from "./ui/AddToBasketButton";
import { Card } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";

export default function CardDetail({
  product,
  locale
}: {
  locale: string;
  product: Card;
}) {
  const imageUrl = getStrapiMedia(product.image.url);

  const t = useTranslations("Header");

  return (
    <div className="container">
      <div className="w-full flex flex-row md:pl-10">
        <Link
          href={`/${locale}/buy-from-us`}
          className="flex items-center mx-4 mb-3 cursor-pointer"
        >
          Назад
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
            <span className="md:text-xl md:pt-5">
              {product.price}
              {product.union}
            </span>
          </div>
          <div>
            <div>
              <h4 className="py-2">
                {t("sizeTitle")}
              </h4>
              <p>
                {product.size}
              </p>
            </div>
            <div className="pt-5">
              <h4 className="py-2">
                {t("materialTitle")}
              </h4>
              <p className="text-black">
                {product.material}
              </p>
            </div>
            <div className="pt-5">
              <h4 className="py-2">
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
