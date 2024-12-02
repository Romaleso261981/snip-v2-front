"use client";

import { useBasketCart } from "@/hooks/useCart";
import { useToggleBasket } from "@/hooks/useToggleBasket";
import { ProductItemTypes } from "@/types/ProductItemTypes";
import { createContext, ReactNode, MouseEvent as ReactMouseEvent } from "react";

type BasketContextType = {
  getCurrentLocale: () => string;
  showBasket: boolean;
  handleToggleBasket: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
  basketItems: ProductItemTypes[];
  decreaseCount: (id: number) => void;
  getTotalCout: () => number;
  increaseCount: (id: number) => void;
  removeCardById: (id: number) => void;
  addCardToBasket: (card: ProductItemTypes) => void;
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

  const {
    decreaseCount,
    getTotalCout,
    increaseCount,
    removeCardById,
    addCardToBasket,
    basketItems
  } = useBasketCart();

  const { showBasket, handleToggleBasket } = useToggleBasket();

  return (
    <BasketContext.Provider
      value={{
        getCurrentLocale,
        showBasket,
        basketItems,
        handleToggleBasket,
        decreaseCount,
        getTotalCout,
        increaseCount,
        removeCardById,
        addCardToBasket
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
