export enum DeliveryType {
  NovaPost = "NovaPost",
  Courier = "Courier",
  Pickup = "Pickup"
}

export const deliveryMockData = [
  {
    id: 1,
    name: "Самовивіз з нової пошти",
    price: 50,
    deliveryTime: "1-2 дні",
    type: DeliveryType.NovaPost,
    branches: ["Відділення 1", "Відділення 2", "Відділення 3"]
  },
  {
    id: 2,
    name: "Кур'єрська доставка",
    price: 100,
    deliveryTime: "1 день",
    type: DeliveryType.Courier
  },
  {
    id: 3,
    name: "Самовивіз з наших магазинів",
    price: 0,
    deliveryTime: "1 день",
    type: DeliveryType.Pickup
  }
];
