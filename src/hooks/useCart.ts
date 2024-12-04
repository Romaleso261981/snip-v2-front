"use client";

import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { useState } from "react";

export function useBasketCart() {
  const [basketItems, setBacetItems] = useState<CardsStrapiResponce[]>(() => {
    const saved = localStorage.getItem("basket");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const getTotalCout = () => {
    return basketItems.reduce((acc, card) => acc + card.cost * card.count, 0);
  };

  const removeCardById = (id: number) => {
    const newCards = basketItems.filter(card => card.id !== id);
    setBacetItems(newCards);
  };

  const addCardToBasket = (card: CardsStrapiResponce) => {
    setBacetItems(state => {
      const isCardExist = state.find(item => item.id === card.id);
      if (isCardExist) {
        return state.map(
          item =>
            item.id === card.id ? { ...item, count: item.count + 1 } : item
        );
      }
      localStorage.setItem("basket", JSON.stringify([...state, card]));
      return [...state, { ...card, count: 1 }];
    });
  };

  const increaseCount = (id: number) => {
    setBacetItems(state =>
      state.map(
        card => (card.id === id ? { ...card, count: card.count + 1 } : card)
      )
    );
  };

  const decreaseCount = (id: number) => {
    setBacetItems(state =>
      state.map(
        card =>
          card.id === id && card.count > 1
            ? { ...card, count: card.count - 1 }
            : card
      )
    );
  };

  return {
    basketItems,
    addCardToBasket,
    increaseCount,
    decreaseCount,
    removeCardById,
    getTotalCout
  };
}
