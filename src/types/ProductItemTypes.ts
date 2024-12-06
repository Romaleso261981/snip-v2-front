import { StaticImageData } from "next/image";

export type ImageStrapiResponce = {
  url: string;
};

export type CardsStrapiResponce = {
  id: number;
  title: string;
  cost: number;
  count: number;
  currency: string;
  href: string;
  img: ImageStrapiResponce[];
};

export type ProductItemTypes = {
  id: number;
  category?: string;
  title: string;
  price: number;
  image: string | StaticImageData;
  count: number;
};

export type HomeStrapiResponce = {
  cards: CardsStrapiResponce[];
  description: string;
  title: string;
};

export type ByFromUsStrapiResponce = {
  cards: CardsStrapiResponce[];
  description: string;
  title: string;
};
