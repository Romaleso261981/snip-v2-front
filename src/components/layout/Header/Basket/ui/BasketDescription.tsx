"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import cross from "@/assets/mobMenu/cross-mob-menu.png";
import { BasketContext } from "@/contexts/basketContext";
import { BasketStrapiRespons } from "@/types/ProductItemTypes";
import BasketImage from "./BasketImage";

type BasketProps = { data: BasketStrapiRespons };

const BasketDescription: FC<BasketProps> = ({ data }) => {
  const {
    basketItems,
    decreaseCount,
    getTotalCount,
    increaseCount,
    removeCardById,
    handleToggleBasket
  } = useContext(BasketContext);

  return (
    <div className="fixed h-full top-0 right-0 p-2 z-20 bg-white text-gold md:w-2/6 md:p-6">
      <div className="flex flex-col justify-between items-start text-center p-2 pb-8 h-full ">
        <div
          className="flex gap-5 flex-row-reverse mb-10 pl-3 pt-3 md:p-0"
          onClick={() => handleToggleBasket()}
        >
          <Image src={cross} alt="cross" />
        </div>
        <h2 className="mb-5 text-xl">
          {data.title}
        </h2>
        <div className="flex flex-col justify-start items-start w-full flex-grow overflow-auto">
          {basketItems.map((card, index) =>
            <div
              key={index}
              className="flex justify-between items-center w-full mb-5 border-gold border-b-2 pb-4"
            >
              <BasketImage image={card.img[0].url} />
              <div className="w-full h-full flex pl-4 flex-col items-start">
                <p className="pb-8">
                  {card.title}
                </p>
                <div className="w-2/3 flex flex-row pb-1">
                  <h4>
                    {data.count}
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
                    {data.cost}
                  </h4>
                  <p>
                    {card.cost}
                  </p>
                  <span>
                    {data.curency}
                  </span>
                </div>
                <button onClick={() => removeCardById(card.id)}>
                  {data.cardButton}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row py-6">
          <h4>
            {data.totalCount}
          </h4>
          <p>
            {getTotalCount()}
          </p>
          <span>
            {data.totalCountUnion}
          </span>
        </div>
        <button className="flex justify-center items-center w-[80%] h-12 bc text-md bg-gold text-[#fff]">
          {data.bottomButton}
        </button>
      </div>
    </div>
  );
};

export default BasketDescription;
