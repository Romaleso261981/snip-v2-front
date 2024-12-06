"use client";

import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { useState } from "react";

export function useBasketCart() {
  const [basketItems, setBasketItems] = useState<CardsStrapiResponce[]>(() => {
    try {
      const saved = localStorage.getItem("basket");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const updateLocalStorage = (items: CardsStrapiResponce[]) => {
    localStorage.setItem("basket", JSON.stringify(items));
  };

  const getTotalCount = () => {
    return basketItems.reduce((acc, card) => acc + card.cost * card.count, 0);
  };

  const removeCardById = (id: number) => {
    const newCards = basketItems.filter(card => card.id !== id);
    setBasketItems(newCards);
    updateLocalStorage(newCards);
  };

  const addCardToBasket = (card: CardsStrapiResponce) => {
    setBasketItems(state => {
      const isCardExist = state.find(item => item.id === card.id);
      const updatedState = isCardExist
        ? state.map(item =>
            item.id === card.id ? { ...item, count: item.count + 1 } : item
          )
        : [...state, { ...card, count: 1 }];
      updateLocalStorage(updatedState);
      return updatedState;
    });
  };

  const increaseCount = (id: number) => {
    setBasketItems(state => {
      const updatedState = state.map(card =>
        card.id === id ? { ...card, count: card.count + 1 } : card
      );
      updateLocalStorage(updatedState);
      return updatedState;
    });
  };

  const decreaseCount = (id: number) => {
    setBasketItems(state => {
      const updatedState = state.map(card =>
        card.id === id && card.count > 1
          ? { ...card, count: card.count - 1 }
          : card
      );
      updateLocalStorage(updatedState);
      return updatedState;
    });
  };

  return {
    basketItems,
    addCardToBasket,
    increaseCount,
    decreaseCount,
    removeCardById,
    getTotalCount,
  };
}
