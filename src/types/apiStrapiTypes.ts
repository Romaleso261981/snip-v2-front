export type HeroStrapiData = {
  text: string;
  image: StrapiImage;
};

export type GalleryStrapiData = {
  id: string;
  images: StrapiImage[];
};

export type StrapiImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  name: string;
  formats: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
      name: string;
    };
  };
};

export type ImageResponsive = {
  url: string;
  width: number;
  height: number;
  name: string;
  sizeInBytes: number;
  mime: string;
  ext: string;
};

export type StrapiImageResponsive = {
  id: string;
  url: string;
  width: number;
  height: number;
  name: string;
  formats: {
    large: ImageResponsive;
    medium: ImageResponsive;
    small: ImageResponsive;
    thumbnail: ImageResponsive;
  };
};

export type AboutStrapiData = {
  title: string;
  text: string;
};

export type ButtonStrapiData = {
  isExternal?: boolean;
  link: string;
  name: string;
};

export type HomeStrapiResponce = {
  about: AboutStrapiData;
  gallery: GalleryStrapiData;
  button: ButtonStrapiData;
  hero: HeroStrapiData;
};

export type AboutStrapiResponce = {
  id: number;
  bottomFirstText: string;
  bottomSecondText: string;
  desctopSeparatorImage: StrapiImage;
  images: { images: StrapiImage[] };
  imagesDesctop: StrapiImage[];
  leftFounder: string;
  main: {
    id: string;
    text: string;
    title: string;
  };
  mainBottomText: string;
  rightFounder: string;
  separatorImageMobile: StrapiImageResponsive;
};

export type BuyFromUsResponce = {
  id: number;
  examples: {
    id: number;
    text: string;
    image: StrapiImage;
  }[];
  main: { id: number; text: string; title: string };
  mainBottomText: string;
};

export type DoItYourselfResponce = {
  id: number;
  main: {
    id: number;
    bottomText: string;
    title: string;
    text: string;
  };
  examples: {
    id: number;
    image: StrapiImage;
    title: string;
  };
};

export type InviteUsResponce = {
  data: InviteUsStrapiResponce;
};

export type InviteUsStrapiResponce = {
  id: number;
  gallery: StrapiImage[];
  examples: {
    description: string;
    text: string;
    image: StrapiImage;
  }[];
  locale: string;
  text: string;
  title: string;
};

export type InviteUsCardsStrapiResponce = {
  id: number;
  img: StrapiImage;
  text: string;
  title: string;
  buttontext: string;
};

export type CartProductType = {
  id: number;
  image: StrapiImage;
  includes: string;
  material: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  count?: number;
  union: string;
};

export type Card = {
  id: number;
  image: StrapiImage;
  includes: string;
  material: string;
  name: string;
  price: number;
  size: string;
  count?: number;
  union: string;
  createdAt: string;
  updatedAt: string;
};

export type NaboriResponce = Card[];

export type User = {
  email: string;
  username: string;
  password: string;
  emailCode: string;
  isLoggedIn: boolean;
};

export type SearchParams = {
  sort?: string;
  limit?: number;
  start?: number;
  popular?: string;
};

export type Images = {
  _id: number;
  url: string;
}[];
