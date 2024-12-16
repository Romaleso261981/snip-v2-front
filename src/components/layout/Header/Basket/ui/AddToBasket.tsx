"use client";

import { useState } from "react";
import AddQuantity from "./AddQuantity";

// import { useCartStore } from "@/hooks/useCartStore";
// import { useWixClient } from "@/hooks/useWixClient";

const AddToBasket = ({
  productId,
  variantId,
  stockNumber,
  type
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
  type: "primary" | "secondary";
}) => {
  const [quantity, setQuantity] = useState(1);

  // const wixClient = useWixClient();
  const wixClient = {
    user: {
      id: "123",
      email: ""
    }
  };

  // const { addItem, isLoading } = useCartStore();
  const addItem = (
    wixClient: any,
    productId: string,
    variantId: any,
    quantity: number
  ) => {
    return {
      wixClient,
      productId,
      variantId,
      quantity
    };
  };
  const isLoading = false;

  return (
    <div className="flex flex-col gap-4 justify-between">
      <AddQuantity
        stockNumber={stockNumber}
        setQuantity={setQuantity}
        quantity={quantity}
      />
      {type === "primary" &&
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-sm rounded-sm ring-1 ring-gold text-gold py-2 px-4 hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:bg-slate-500 disabled:ring-0 disabled:text-black disabled:ring-none"
        >
          Add to Cart
        </button>}
    </div>
  );
};

export default AddToBasket;
