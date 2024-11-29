"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import cross from "@/assets/mobMenu/cross-mob-menu.png";
import { BasketContext } from "@/contexts/basketContext";

const BasketStrapiData = {
  title: {
    ua: "У вашій корзині:",
    en: "In your basket:"
  },
  cost: {
    ua: "Ціна",
    en: "Cost"
  },
  curensu: {
    ua: "грн.",
    en: "uah"
  },
  count: {
    ua: "К-сть",
    en: "Count"
  },
  cardButton: {
    ua: "Видалити",
    en: "Delete"
  },
  bottomButton: {
    ua: "Оформити замовлення",
    en: "Order"
  }
};

const Basket: FC = () => {
  const {
    basketItems,
    decreaseCount,
    getTotalCout,
    increaseCount,
    removeCardById,
    handleToggleBasket
  } = useContext(BasketContext);

  return (
    <div className="fixed h-full top-0 right-0 p-2 z-20 bg-white md:w-2/6 md:p-6">
      <div className="flex flex-col justify-between items-start text-center p-2 pb-8 h-full ">
        <div
          className="flex gap-5 flex-row-reverse mb-10 pl-3 pt-3 md:p-0"
          onClick={e => handleToggleBasket(e)}
        >
          <Image src={cross} alt="cross" />
        </div>
        <h2 className="mb-5 text-xl">
          {BasketStrapiData.title.ua}
        </h2>
        <div className="flex flex-col justify-start items-start w-full flex-grow overflow-auto">
          {basketItems.map((card, index) =>
            <div
              key={index}
              className="flex justify-between items-center w-full mb-5 border-gold border-b-2 pb-4"
            >
              <div className="w-1/3 flex flex-row justify-between">
                <Image src={card.image} alt="image" />
              </div>
              <div className="w-full h-full flex pl-4 flex-col items-start">
                <p className="pb-8">
                  {card.title}
                </p>
                <div className="w-2/3 flex flex-row pb-1">
                  <h4>
                    {BasketStrapiData.count.ua}
                  </h4>
                  <div className="flex flex-row items-center gap-2 px-4">
                    <button onClick={() => increaseCount(card.id)}>+</button>
                    <p>
                      {card.count}
                    </p>
                    <button onClick={() => decreaseCount(card.id)}>-</button>
                  </div>
                </div>
                <div className="flex flex-row pb-3 gap-2">
                  <h4>
                    {BasketStrapiData.cost.ua}
                  </h4>
                  <p>
                    {card.price}
                  </p>
                  <span>
                    {BasketStrapiData.curensu.ua}
                  </span>
                </div>
                <button onClick={() => removeCardById(card.id)}>
                  {BasketStrapiData.cardButton.ua}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row py-6">
          <h4>До сплати:</h4>
          <p>
            {getTotalCout()}
          </p>
          <span>грн</span>
        </div>
        <button className="flex justify-center items-center w-[80%] h-12 bc text-md bg-gold text-[#fff]">
          {BasketStrapiData.bottomButton.ua}
        </button>
      </div>
    </div>
  );
};

export default Basket;
