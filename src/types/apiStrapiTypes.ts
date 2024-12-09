export type HeroStrapiData = {
  text: string;
  image: StrapiImage;
};

export type GalleryStrapiData = {
  id: string;
  images: StrapiImage;
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

export type AboutStrapiData = {
  title: string;
  text: string;
  text2: string;
};

export type ButtonStrapiData = {
  isExternal: boolean;
  link: string;
  name: string;
};

export type HomeStrapiResponce = {
  about: AboutStrapiData;
  gallery: GalleryStrapiData[];
  button: ButtonStrapiData;
  hero: HeroStrapiData;
};

export type AboutStrapiResponce = {
  bottomFirstText: string;
  bottomSecondText: string;
  mobileImage: StrapiImage;
  desctopImages: StrapiImage[];
  leftFounder: string;
  main: {
    id: string;
    text: string;
    text2: string;
    title: string;
  };
  mainBottomText: string;
  rightFounder: string;
  separatorImage: StrapiImage;
  separatorImage2: StrapiImage;
};

export type BuyFromUsResponce = {
  id: number;
  examples: {
    id: number;
    text: string;
    image: StrapiImage;
  };
  locale: string;
  localizations: [
    {
      id: number;
      locale: string;
      mainBottomText: string;
    }
  ];
  main: { id: number; text: string; title: string };
  mainBottomText: string;
};

export type DoItYourselfResponce = {
  id: number;
  main: {
    id: number;
    text: string;
    title: string;
    title2: string;
  };
};

export type InviteUsResponce = {
  data: InviteUsStrapiResponce;
  cards: InviteUsCardsStrapiResponce[];
};

export type InviteUsStrapiResponce = {
  id: number;
  gallery: StrapiImage[];
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

export type Card = {
  id: number;
  bottomText: string;
  buttonText: string;
  image: StrapiImage;
  includesDescription: string;
  includesTitle: string;
  materialDescription: string;
  materialTitle: string;
  name: string;
  sizeDescription: string;
  sizeTitle: string;
  union: string;
  price: number;
  count: number;
};

export type NaboriResponce = Card[];
