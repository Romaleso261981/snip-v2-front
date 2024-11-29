import { StaticImageData } from "next/image";

export type ProductItemTypes = {
  id: number;
  category?: string;
  title: string;
  price: number;
  image: string | StaticImageData;
  count: number;
};
