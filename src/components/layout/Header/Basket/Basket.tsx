import { FC } from "react";
import BasketDescription from "./ui/BasketDescription";

const Basket: FC<{ router: any }> = ({ router }) => {
  return <BasketDescription router={router} />;
};

export default Basket;
