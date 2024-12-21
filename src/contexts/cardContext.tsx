"use client";

import { Card } from "@/types/apiStrapiTypes";
import { createContext, ReactNode, useState } from "react";

type CardsContextType = {
  cardItems: Card[];
  setCardItems: (cardItems: Card[]) => void;
};

type CardsProviderProps = {
  children: ReactNode;
};

export const CardsContext = createContext({} as CardsContextType);

export function CardsProvider({ children }: CardsProviderProps) {
  const [cardItems, setCardItems] = useState<Card[]>([]);

  return (
    <CardsContext.Provider
      value={{
        cardItems,
        setCardItems
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
