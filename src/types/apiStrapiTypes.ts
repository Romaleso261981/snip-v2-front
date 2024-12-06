export type HeroStrapiData = {
  text: string;
  image: {
    url: string;
    width: number;
    height: number;
    name: string;
  };
};

export type GalleryStrapiData = {
  id: string;
  images: {
    id: string;
    url: string;
    width: number;
    height: number;
    name: string;
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
  mobileImage: {
    id: string;
    url: string;
    width: number;
    height: number;
    name: string;
  };
  desctopImages: {
    id: string;
    url: string;
    width: number;
    height: number;
    name: string;
  }[];
  leftFounder: string;
  main: {
    id: string;
    text: string;
    text2: string;
    title: string;
  };
  mainBottomText: string;
  rightFounder: string;
  separatorImage: {
    url: string;
    width: number;
    height: number;
    name: string;
  };
};
