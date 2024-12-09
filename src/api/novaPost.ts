import axios from "axios";

const novaPostApi = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
  headers: {
    "Content-Type": "application/json",
  },
});

type NovaPostResponse<T> = {
  success: boolean;
  data: T;
  errors?: string[];
};

export type CityAddress = {
  Present: string;
  Warehouses: number;
  MainDescription: string;
  Area: string;
  Region: string;
  Ref: string;
  DeliveryCity: string;
};

type CityData = {
  TotalCount: number;
  Addresses: CityAddress[];
};

type WarehouseData = {
  Ref: string;
  Description: string;
  Number: string;
};

export const novaPostService = {
  searchCities: async (cityName: string) => {
    const { data } = await novaPostApi.post<NovaPostResponse<CityData[]>>("", {
      apiKey: process.env.NEXT_NOVA_POST_API_KEY,
      modelName: "AddressGeneral",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: cityName,
        Limit: 10,
      },
    });

    if (!data.success) {
      throw new Error(data.errors?.[0] || "Failed to fetch cities");
    }

    return data.data;
  },

  getWarehouses: async (cityRef: string, deliveryCity: string) => {
    const { data } = await novaPostApi.post<NovaPostResponse<WarehouseData[]>>(
      "",
      {
        apiKey: process.env.NEXT_NOVA_POST_API_KEY,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityRef: deliveryCity,
          Page: "1",
          Limit: "50",
          Language: "UA",
        },
      }
    );

    if (!data.success) {
      throw new Error(data.errors?.[0] || "Failed to fetch warehouses");
    }

    return data.data;
  },
};
