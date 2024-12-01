"use client";

import { ProductItemTypes } from "@/types/ProductItemTypes";
import { useState } from "react";

import image1 from "@/assets/BuyFromUs/img1.png";
import image2 from "@/assets/BuyFromUs/img2.png";
import image3 from "@/assets/BuyFromUs/img3.png";

export const cards: ProductItemTypes[] = [
  {
    id: 1,
    image: image1,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    price: 1850
  },
  {
    id: 2,
    image: image2,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    price: 3050
  },
  {
    id: 3,
    image: image3,
    title: "ПАВУК “КЛАСИЧНИЙ”",
    count: 1,
    price: 2850
  }
];

export function useBasketCart() {
  const [basketItems, setBacetItems] = useState<ProductItemTypes[]>([...cards]);

  const getTotalCout = () => {
    return basketItems.reduce((acc, card) => acc + card.price * card.count, 0);
  };

  const removeCardById = (id: number) => {
    const newCards = basketItems.filter(card => card.id !== id);
    setBacetItems(newCards);
  };

  const addCardToBasket = (card: ProductItemTypes) => {
    setBacetItems(state => [...state, card]);
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
