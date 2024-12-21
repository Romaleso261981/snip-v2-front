"use client";

import Container from "@/components/custom/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import SearchBar from "@/components/ui/SearchBar";
import { CardsContext } from "@/contexts/cardContext";
import { BuyFromUsResponce, NaboriResponce } from "@/types/apiStrapiTypes";
import Link from "next/link";
import { useContext, useEffect } from "react";

type BuyFromUsDescriptionProps = {
  data: BuyFromUsResponce;
  cards: NaboriResponce;
};

export default function BuyFromUsDescription({
  data: { main: { title, text: description } },
  cards
}: BuyFromUsDescriptionProps) {
  const { cardItems, setCardItems } = useContext(CardsContext);

  useEffect(
    () => {
      setCardItems(cards);
    },
    [cards, setCardItems]
  );

  return (
    <div>
      <div className="flex flex-col mb-4 sm:flex-row justify-between">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/uk/" className="text-sm hover:text-gold">
                Home
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-bold hover:text-gold ">
                  buy-from-us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
        <SearchBar setCardItems={setCardItems} cardItems={cardItems} />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center px-8">
          <h3 className="font-montserrat font-weight-500 text-2xl pb-4">
            {title}
          </h3>
          <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
