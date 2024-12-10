"use client";

import { CityAddress } from "@/api/novaPost";
import { useState } from "react";

export function useNovaPost() {
  const [addresses, setAddresses] = useState<CityAddress[]>([]);
  const [currentCity, setCurrentCity] = useState<CityAddress>(
    {} as CityAddress
  );

  return { addresses, setAddresses, currentCity, setCurrentCity };
}
