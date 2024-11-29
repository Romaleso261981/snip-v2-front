import { useQuery } from "@tanstack/react-query";
import { novaPostService } from "@/api/novaPost";
import { novaPostKeys } from "@/api/queryKeys";

export const useSearchCities = (cityName: string) => {
  return useQuery({
    queryKey: novaPostKeys.cities(cityName),
    queryFn: () => novaPostService.searchCities(cityName),
    enabled: cityName.length >= 2,
  });
};

export const useWarehouses = (
  cityData: { ref: string; deliveryCity: string } | null
) => {
  return useQuery({
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    queryKey: novaPostKeys.warehouses(cityData?.deliveryCity!),
    queryFn: () => {
      if (!cityData) throw new Error("City not selected");
      return novaPostService.getWarehouses(cityData.ref, cityData.deliveryCity);
    },
    enabled: Boolean(cityData?.deliveryCity),
  });
};
