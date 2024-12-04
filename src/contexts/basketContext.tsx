"use client";

import { useBasketCart } from "@/hooks/useCart";
import { useToggleBasket } from "@/hooks/useToggleBasket";
import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { createContext, ReactNode } from "react";

type BasketContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  getCurrentLocale: () => string;
  showBasket: boolean;
  addCardToBasket: (item: CardsStrapiResponce) => void;
  handleToggleBasket: () => void;
  basketItems: CardsStrapiResponce[];
  decreaseCount: (id: number) => void;
  getTotalCout: () => number;
  increaseCount: (id: number) => void;
  removeCardById: (id: number) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};

export const BasketContext = createContext({} as BasketContextType);

export function BasketProvider({ children }: BasketProviderProps) {
  const getCurrentLocale = () => {
    const locale = localStorage.getItem("locale");
    if (locale) {
      return locale;
    } else {
      localStorage.setItem("locale", "en");
      return "en";
    }
  };

  const locale = getCurrentLocale();

  const {
    decreaseCount,
    getTotalCout,
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
        locale,
        getCurrentLocale,
        showBasket,
        basketItems,
        setLocale,
        handleToggleBasket,
        addCardToBasket,
        decreaseCount,
        getTotalCout,
        increaseCount,
        removeCardById
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
