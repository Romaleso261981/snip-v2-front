import { FC, useContext } from "react";

import { BasketContext } from "@/contexts/basketContext";
import ShoppingBagIcon from "@/assets/icons/shopping-bag.svg";

const ShoppingBag: FC = () => {
  const { handleToggleBasket } = useContext(BasketContext);

  return (
    <div className="relative mr-4" onClick={() => handleToggleBasket()}>
      <div className="relative">
        <ShoppingBagIcon />
      </div>
    </div>
  );
};

export default ShoppingBag;
