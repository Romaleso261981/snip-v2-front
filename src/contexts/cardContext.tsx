"use client";

import { Card } from "@/types/apiStrapiTypes";
import { createContext, ReactNode, useState } from "react";

type CardsContextType = {
  cardItems: Card[];
  itemPerpage: number;
  setItemPerpage: (itemPerpage: number) => void;
  setCardItems: (cardItems: Card[]) => void;
};

type CardsProviderProps = {
  children: ReactNode;
};

export const CardsContext = createContext({} as CardsContextType);

export function CardsProvider({ children }: CardsProviderProps) {
  const [cardItems, setCardItems] = useState<Card[]>([]);
  const [itemPerpage, setItemPerpage] = useState<number>(5);

  return (
    <CardsContext.Provider
      value={{
        cardItems,
        setCardItems,
        itemPerpage,
        setItemPerpage
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
