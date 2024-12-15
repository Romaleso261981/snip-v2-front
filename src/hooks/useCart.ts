"use client";

import { Card } from "@/types/apiStrapiTypes";
import { useState, useEffect } from "react";

export function useBasketCart() {
  const [basketItems, setBasketItems] = useState<Card[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialBasket = localStorage.getItem("basket");
      if (initialBasket) {
        setBasketItems(JSON.parse(initialBasket));
      }
    }
  }, []);

  const updateLocalStorage = (items: Card[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("basket", JSON.stringify(items));
    }
  };

  const getTotalCount = () => {
    return basketItems.reduce((acc, card) => {
      return acc + (card.price) * (card.count ?? 0);
    }, 0);
  };

  const removeCardById = (id: number) => {
    const newCards = basketItems.filter(card => card.id !== id);
    setBasketItems(newCards);
    updateLocalStorage(newCards);
  };

  const addCardToBasket = (card: Card) => {
    setBasketItems(state => {
      const isCardExist = state.find(item => item.id === card.id);
      const updatedState = isCardExist
        ? state.map(
            item =>
              item.id === card.id ? { ...item, count: (item.count ?? 0) + 1 } : item
          )
        : [...state, { ...card, count: 1 }];
      updateLocalStorage(updatedState);
      return updatedState;
    });
  };

  const increaseCount = (id: number) => {
    setBasketItems(state => {
      const updatedState = state.map(
        card => (card.id === id ? { ...card, count: (card.count ?? 0) + 1 } : card)
      );
      updateLocalStorage(updatedState);
      return updatedState;
    });
  };

  const decreaseCount = (id: number) => {
    setBasketItems(state => {
      const updatedState = state.map(
        card =>
          card.id === id && (card.count ?? 0) > 1
            ? { ...card, count: (card.count ?? 0) - 1 }
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
    getTotalCount
  };
}
