"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import cross from "@/assets/mobMenu/cross-mob-menu.png";
import { BasketContext } from "@/contexts/basketContext";
import BasketImage from "./BasketImage";
import { useTranslations } from "next-intl";
import { Card } from "@/types/apiStrapiTypes";
import { CheckOutContext } from "@/contexts/checkOutContext";

type BasketDescriptionProps = {
  locale?: string;
  router?: any;
};

const BasketDescription: FC<BasketDescriptionProps> = ({ router }) => {
  const t = useTranslations("Basket");

  const locale = router.locale;

  const {
    basketItems,
    decreaseCount,
    getTotalCount,
    increaseCount,
    removeCardById,
    handleToggleBasket
  } = useContext(BasketContext);

  const { setParchaseList } = useContext(CheckOutContext);

  const checkOut = (basketItems: Card[]) => {
    setParchaseList(basketItems);
    router.push(`/${locale}/payment`);
  };

  if (basketItems.length === 0) {
    return (
      <div className="fixed h-full top-0 right-0 p-2 z-20 bg-white text-gold md:w-2/6 md:p-6">
        <div className="flex flex-col justify-between items-start text-center p-2 pb-8 h-full">
          <div
            className="flex gap-5 flex-row-reverse mb-10 pl-3 pt-3 md:p-0"
            onClick={() => handleToggleBasket()}
          >
            <Image src={cross} alt="cross" />
          </div>
          <h2 className="mb-5 text-xl">Ваша корзина пуста</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed h-full top-0 right-0 p-2 z-20 bg-white text-gold md:w-2/6 md:p-6">
      <div className="flex flex-col justify-between items-start text-center p-2 pb-8 h-full">
        <div
          className="flex gap-5 flex-row-reverse mb-10 pl-3 pt-3 md:p-0"
          onClick={() => handleToggleBasket()}
        >
          <Image src={cross} alt="cross" />
        </div>
        <h2 className="mb-5 text-xl">
          {t("mainTitle")}
        </h2>
        <div className="flex flex-col justify-start items-start w-full flex-grow overflow-auto">
          {basketItems.map((card, index) =>
            <div
              key={index}
              className="flex justify-between items-center w-full mb-5 border-gold border-b-2 pb-4"
            >
              <BasketImage image={card.image.url} />
              <div className="w-full h-full flex pl-4 flex-col items-start">
                <p className="pb-8">
                  {card.name}
                </p>
                <div className="w-full flex flex-row pb-1">
                  <h4>
                    {t("count")}
                  </h4>
                  <div className="flex flex-row items-center gap-3 px-6 pb-5">
                    <button
                      onClick={() => increaseCount(card.id)}
                      className="flex justify-center items-center rounded-md w-7 h-7 border-collapse border-gold border-2"
                    >
                      +
                    </button>
                    <p className="text-black text-base">
                      {card.count}
                    </p>
                    <button
                      onClick={() => decreaseCount(card.id)}
                      className="flex justify-center items-center rounded-md w-7 h-7 border-collapse border-gold border-2"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex flex-row pb-5 gap-2">
                  <h4>
                    {t("price")}
                  </h4>
                  <p>
                    {card.price}
                  </p>
                  <span>
                    {card.union}
                  </span>
                </div>
                <button onClick={() => removeCardById(card.id)}>
                  {t("cardbuttonText")}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full gap-1 flex-row py-6">
          <h4 className="">
            {t("toBePaid")}
          </h4>
          <p className="text-black text-base">
            {getTotalCount()}
          </p>
          <span>
            {t("totalCoutUnion")}
          </span>
        </div>
        <div onClick={() => checkOut(basketItems)}>
          <button className="flex justify-center items-center w-full h-12 px-2 text-md bg-gold text-[#fff]">
            {t("buttonText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketDescription;
