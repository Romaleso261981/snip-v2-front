"use client";

import { CityAddress } from "@/api/novaPost";
import { useNovaPost } from "@/hooks/useNovaPost";
import { createContext, ReactNode, useState } from "react";

type UserInfo = {
  name: string;
  surname: string;
  phone: string;
  email: string;
};

type CheckOutContextType = {
  checkOutContext: CheckOutContext | null;
  setCheckOutContext: (context: CheckOutContext) => void;
  setAddresses: (addresses: CityAddress[]) => void;
  setUser: (user: UserInfo) => void;
  setAddress: (address: CityAddress) => void;
  addresses: CityAddress[];
  currentCity: CityAddress | null;
  setCurrentCity: (city: CityAddress) => void;
};

type CheckOutContext = {
  deliveryAddress: CityAddress | null;
  user: UserInfo;
  totalCounter: number;
};

type CheckOutProviderProps = {
  children: ReactNode;
};

export const CheckOutContext = createContext({} as CheckOutContextType);

export function CheckOutProvider({ children }: CheckOutProviderProps) {
  const [
    checkOutContext,
    setCheckOutContext
  ] = useState<CheckOutContext | null>(null);

  const {
    addresses,
    setAddresses,
    currentCity,
    setCurrentCity
  } = useNovaPost();

  const setAddress = (address: CityAddress) => {
    setCheckOutContext(
      prevContext =>
        ({
          ...prevContext,
          deliveryAddress: address
        } as CheckOutContext)
    );
  };

  const setUser = (user: UserInfo) => {
    setCheckOutContext(
      prevContext =>
        ({
          ...prevContext,
          user
        } as CheckOutContext)
    );
  };

  return (
    <CheckOutContext.Provider
      value={{
        checkOutContext,
        setCheckOutContext,
        setAddresses,
        setUser,
        setAddress,
        addresses,
        currentCity,
        setCurrentCity
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
}
