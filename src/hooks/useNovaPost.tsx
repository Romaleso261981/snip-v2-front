"use client";

import { CityAddress } from "@/api/novaPost";
import { useState } from "react";

export function useNovaPost() {
  const [addresses, setAddresses] = useState<CityAddress[]>([]);
  const [currentСity, setСurrentСity] = useState<CityAddress>(
    {} as CityAddress
  );

  return { addresses, setAddresses, currentСity, setСurrentСity };
}
