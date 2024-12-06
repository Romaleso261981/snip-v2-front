"use client";

import { useBasketCart } from "@/hooks/useCart";
import { useToggleBasket } from "@/hooks/useToggleBasket";
import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { createContext, ReactNode } from "react";

type BasketContextType = {
  setLocale: (locale: string) => void;
  showBasket: boolean;
  addCardToBasket: (item: CardsStrapiResponce) => void;
  handleToggleBasket: () => void;
  basketItems: CardsStrapiResponce[];
  decreaseCount: (id: number) => void;
  getTotalCount: () => number;
  increaseCount: (id: number) => void;
  removeCardById: (id: number) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};

export const BasketContext = createContext({} as BasketContextType);

export function BasketProvider({ children }: BasketProviderProps) {
  const {
    decreaseCount,
    getTotalCount,
    increaseCount,
    removeCardById,
    addCardToBasket,
    basketItems
  } = useBasketCart();

  const setLocale = (locale: string) => {
    localStorage.setItem("locale", locale);
  };

  const { showBasket, handleToggleBasket } = useToggleBasket();

  return (
    <BasketContext.Provider
      value={{
        showBasket,
        basketItems,
        setLocale,
        handleToggleBasket,
        addCardToBasket,
        decreaseCount,
        getTotalCount,
        increaseCount,
        removeCardById
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
