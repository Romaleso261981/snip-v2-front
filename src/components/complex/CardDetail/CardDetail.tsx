"use client";

import { BasketContext } from "@/contexts/basketContext";
import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function CardDetail({
  product,
  locale
}: {
  product: CardsStrapiResponce;
  locale: string;
}) {
  const { addCardToBasket } = useContext(BasketContext);

  const currentProduct2MockData = {
    dimensionsTitle: "Складений виріб:",
    dimensionsDescription: "35*35*45",
    dimensionsUnits: "см",
    materialTitle: "Матеріал:",
    materialDescription: "Жито:",
    compositionTitle: "До набору входять:",
    compositionDescription1:
      "Соломини необхідної довжини та кількості, додаткові",
    compositionDescription2:
      "запасні соломини, вовняні нитки, голка, скотч, покрокова інструкція. Набір запакований у картонну коробку і не потребує додаткового подарункового пакування.",
    compositionDescriptionMore: " ... більше",
    buttonText: "Придбати",
    TopBottonText: "Назад"
  };

  console.log("URL", product.img[0].url);

  const imageUrl = getStrapiMedia(product.img[0].url);

  return (
    <div className="container">
      <div className="w-full flex flex-row md:pl-10">
        <Link
          href={`/${locale}/buy-from-us`}
          className="flex items-center mx-4 mb-3 cursor-pointer"
        >
          {currentProduct2MockData.TopBottonText}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center w-full justify-around ">
        <Image
          src={imageUrl || ""}
          alt={"none provided"}
          className="object-cover overflow-hidden"
          width={400}
          height={400}
        />
        <div
          className="container flex flex-col justify-center items-center py-5 px-10"
          onClick={() => addCardToBasket(product)}
        >
          <div className="w-full flex flex-col items-start justify-start font-weight-500 text-black ">
            <h4 className="border-b border-gold py-2 md:text-xl md:pb-5">
              {product.title}
            </h4>
            <span className="md:text-xl md:pt-5">
              {product.cost}
              {product.currency}
            </span>
          </div>
          <div>
            <div>
              <h4 className="py-2">
                {currentProduct2MockData.dimensionsTitle}
              </h4>
              <p>
                {currentProduct2MockData.dimensionsDescription}
                {currentProduct2MockData.dimensionsUnits}
              </p>
            </div>
            <div className="pt-5">
              <h4 className="py-2">
                {currentProduct2MockData.materialTitle}
              </h4>
              <p className="text-black">
                {currentProduct2MockData.materialDescription}
              </p>
            </div>
            <div className="pt-5">
              <h4 className="py-2">
                {currentProduct2MockData.compositionTitle}
              </h4>
              <p className="text-black">
                {currentProduct2MockData.compositionDescription1}
              </p>
              <p className="text-black flex-none md:flex md:w-2/4">
                {currentProduct2MockData.compositionDescription2}
              </p>
              <Link href={"/"}>
                {currentProduct2MockData.compositionDescriptionMore}
              </Link>
            </div>
          </div>
          <button className="inline-block px-4 py-2 mt-4 text-sm w-full font-semibold text-white transition duration-200 ease-in-out bg-gold hover:bg-zinc-600">
            {currentProduct2MockData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
