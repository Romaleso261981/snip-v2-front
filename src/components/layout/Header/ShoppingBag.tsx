import ShoppingBagIcon from "@/assets/mobMenu/fi-rs-shopping-bag.svg";
import { BasketContext } from "@/contexts/basketContext";

import { FC, useContext } from "react";

const ShoppingBag: FC = () => {
  const { basketItems, handleToggleBasket } = useContext(BasketContext);

  return (
    <div className="relative mr-4" onClick={e => handleToggleBasket(e)}>
      <div className="relative">
        <ShoppingBagIcon />
      </div>
      <span className="text-[red] absolute -top-4 -right-3">
        {basketItems.length}
      </span>
    </div>
  );
};

export default ShoppingBag;
