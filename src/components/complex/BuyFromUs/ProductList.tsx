"use client";

import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";
import { Card } from "@/types/apiStrapiTypes";
import { useTranslations } from "use-intl";
import usePagination from "@/hooks/usePagination";
import { Pagination } from "@mui/material";
import { useContext, useState } from "react";
import { CardsContext } from "@/contexts/cardContext";

export default function ProductList() {
  const { cardItems: cards, itemPerpage } = useContext(CardsContext);

  const [page, setPage] = useState(1);
  const count = Math.ceil(cards.length / itemPerpage);
  const t = useTranslations("ProductsList");
  const DATA = usePagination(cards, itemPerpage);

  const cardList = DATA.currentData();

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    DATA.jump(p);
    // scrollTop();
  };

  return (
    <div>
      <div className="w-full text-center text-gold grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center border-gold mt-15 mb-14 md:my-5">
        {cardList.map((card: Card) => {
          const imageUrl = getStrapiMedia(card.image.url);
          return (
            <Link
              href={`product/${card.id}`}
              key={card.id}
              className="flex items-center justify-center w-full"
            >
              <div className="flex flex-col items-center justify-center h-full w-full border border-gold p-4 rounded-sm shadow-lg 2xl:p-2 sm:justify-between">
                {imageUrl &&
                  <Image
                    src={imageUrl || "defaultImageUrl"}
                    alt={"none provided"}
                    width={card.image.width}
                    height={card.image.height}
                  />}
                <div className="flex items-center gap-2 py-5 md:flex-col">
                  <h4 className="font-medium text-sm">
                    {card.name}
                  </h4>
                  <span>
                    {card.price} {t("currency")}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* pagination */}
      <div className="flex flex-col gap-3 mb-7 justify-center items-center mt-auto md:flex-row md:justify-around md:py-10 md:px-5">
        <Pagination
          count={count}
          page={page}
          color="standard"
          variant="outlined"
          shape="rounded"
          onChange={(e, p) => handleChange(e, p)}
        />

        <div className="flex flex-row text-center md:ms-auto">
          {t("showing")}{" "}
          {DATA.maxPage === page ? cards.length : itemPerpage * page} of
          <div className="flex flex-row text-center gap-4 ml-2 text-gold">
            <h4>{cards.length}</h4> <span>{t("products")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
