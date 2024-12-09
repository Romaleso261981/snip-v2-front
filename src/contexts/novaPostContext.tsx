"use client";

import { CityAddress } from "@/api/novaPost";
import { useNovaPost } from "@/hooks/useNovaPost";
import { createContext, ReactNode } from "react";

type NovaPostContextType = {
  addresses: CityAddress[];
  currentСity: CityAddress;
  setAddresses: (addresses: CityAddress[]) => void;
  setСurrentСity: (city: CityAddress) => void;
};

type NovaPostProviderProps = {
  children: ReactNode;
};

export const NovaPostContext = createContext({} as NovaPostContextType);

export function NovaPostProvider({ children }: NovaPostProviderProps) {
  const {
    addresses,
    setAddresses,
    currentСity,
    setСurrentСity
  } = useNovaPost();

  return (
    <NovaPostContext.Provider
      value={{ addresses, setAddresses, currentСity, setСurrentСity }}
    >
      {children}
    </NovaPostContext.Provider>
  );
}
