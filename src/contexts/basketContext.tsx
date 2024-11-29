"use client";

import { useBasketCart } from "@/hooks/useCart";
import { useToggleBasket } from "@/hooks/useToggleBasket";
import { ProductItemTypes } from "@/types/ProductItemTypes";
import { createContext, ReactNode, MouseEvent as ReactMouseEvent } from "react";

type BasketContextType = {
  showBasket: boolean;
  handleToggleBasket: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
  basketItems: ProductItemTypes[];
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
  const {
    decreaseCount,
    getTotalCout,
    increaseCount,
    removeCardById,
    basketItems
  } = useBasketCart();

  const { showBasket, handleToggleBasket } = useToggleBasket();

  return (
    <BasketContext.Provider
      value={{
        showBasket,
        basketItems,
        handleToggleBasket,
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
