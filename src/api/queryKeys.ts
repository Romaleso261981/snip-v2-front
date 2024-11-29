export const novaPostKeys = {
  cities: (cityName: string) => ["cities", cityName] as const,
  warehouses: (deliveryCity: string) => ["warehouses", deliveryCity] as const,
};
