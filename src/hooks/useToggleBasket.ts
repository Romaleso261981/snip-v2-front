import { useState } from "react";

export function useToggleBasket() {
  const [showBasket, setShowBasket] = useState<boolean>(false);

  function handleToggleBasket() {
    setShowBasket(!showBasket);
  }

  return { showBasket, handleToggleBasket };
}
