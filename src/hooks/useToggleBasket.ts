import { MouseEvent, useState } from "react";

export function useToggleBasket() {
  const [showBasket, setShowBasket] = useState<boolean>(false);

  function handleToggleBasket(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();

    setShowBasket(!showBasket);
  }

  return { showBasket, handleToggleBasket };
}
