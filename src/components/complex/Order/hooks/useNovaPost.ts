import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import {
  useSearchCities,
  useWarehouses,
} from "@/hooks/react-query/useNovaPost";

import type { NovaPostFormData } from "../types";

export const useNovaPost = () => {
  const [citySearch, setCitySearch] = useState("");
  const [selectedCityData, setSelectedCityData] = useState<{
    ref: string;
    deliveryCity: string;
  } | null>(null);

  const { control, watch, setValue } = useForm<NovaPostFormData>({
    defaultValues: {
      city: "",
      warehouse: "",
    },
  });

  const selectedCity = watch("city");
  const selectedWarehouse = watch("warehouse");

  const { data: cities = [], isLoading: isCitiesLoading } =
    useSearchCities(citySearch);

  const { data: warehouses = [], isLoading: isWarehousesLoading } =
    useWarehouses(selectedCityData);

  const handleCityChange = useCallback(
    (newCityRef: string) => {
      setValue("warehouse", "");
      const cityData = cities[0]?.Addresses?.find(
        (city) => city.Ref === newCityRef
      );

      if (cityData) {
        setSelectedCityData({
          ref: cityData.Ref,
          deliveryCity: cityData.DeliveryCity,
        });
      } else {
        setSelectedCityData(null);
      }
    },
    [cities, setValue]
  );

  const cityOptions =
    cities[0]?.Addresses?.map((city) => ({
      value: city.Ref,
      label: `${city.Present}${
        city.Warehouses ? ` (${city.Warehouses} відділень)` : ""
      }`,
    })) || [];

  const warehouseOptions = warehouses.map((warehouse) => ({
    value: warehouse.Ref,
    label: `№${warehouse.Number}: ${warehouse.Description}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      city: selectedCity,
      warehouse: selectedWarehouse,
    });
  };

  return {
    control,
    selectedCity,
    selectedWarehouse,
    cityOptions,
    warehouseOptions,
    isCitiesLoading,
    isWarehousesLoading,
    setCitySearch,
    handleSubmit,
    handleCityChange,
  };
};
