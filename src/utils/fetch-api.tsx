import qs from "qs";
import { getStrapiURL, getToken } from "./api-helpers";
import {
  AboutStrapiResponce,
  BuyFromUsResponce,
  Card,
  DoItYourselfResponce,
  HomeStrapiResponce,
  InviteUsStrapiResponce,
  NaboriResponce,
  SearchParams
} from "@/types/apiStrapiTypes";
import { endpoints } from "@/configs/endpoints";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  searchParams: SearchParams = {}
) {
  try {
    const token = getToken();

    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    if (searchParams.limit) {
      data.data.splice(searchParams.limit);
    }

    if (searchParams.start) {
      data.data.splice(0, searchParams.start);
    }

    if (searchParams.sort === "asc_price") {
      data.data.sort((a: Card, b: Card) => a.price - b.price);
    } else if (searchParams.sort === "desc_price") {
      data.data.sort((a: Card, b: Card) => b.price - a.price);
    }

    if (searchParams.sort === "asc_lastUpdated") {
      data.data.sort((a: Card, b: Card) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (searchParams.sort === "desc_lastUpdated") {
      data.data.sort((a: Card, b: Card) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateA.getTime() - dateB.getTime();
      });
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getMainStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: {
        about: {
          populate: "*"
        },
        button: {
          populate: "*"
        },
        gallery: {
          populate: "*"
        },
        hero: {
          populate: "*"
        }
      },
      locale: locale
    };

    const { data }: { data: HomeStrapiResponce } = await fetchAPI(
      endpoints.home,
      urlParamsObject
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getAboutStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: {
        images: {
          populate: "*"
        },
        main: {
          populate: "*"
        },
        desctopSeparatorImage: {
          populate: "*"
        },
        separatorImageMobile: {
          populate: "*"
        },
        imagesDesctop: {
          populate: "*"
        }
      },
      locale: locale
    };

    const { data }: { data: AboutStrapiResponce } = await fetchAPI(
      endpoints.about,
      urlParamsObject
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getDoItYourselfStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: {
        main: { populate: "*" },
        examples: { populate: "*" }
      },
      locale: locale
    };

    const { data }: { data: DoItYourselfResponce } = await fetchAPI(
      endpoints.doItYourself,
      urlParamsObject
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getInviteUsStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: {
        examples: {
          populate: "*"
        },
        gallery: {
          populate: "*"
        }
      },
      locale: locale
    };

    const { data }: { data: InviteUsStrapiResponce } = await fetchAPI(
      endpoints.inviteUs,
      urlParamsObject
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getByFromUsStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: "*",
      locale: locale
    };

    const { data }: { data: BuyFromUsResponce } = await fetchAPI(
      endpoints.byFromUs,
      urlParamsObject
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getNaborisData(
  locale: string = "uk",
  searchParams: SearchParams
) {
  try {
    const urlParamsNabori = {
      populate: "*",
      locale: locale
    };

    const { data }: { data: NaboriResponce } = await fetchAPI(
      endpoints.naboris,
      urlParamsNabori,
      searchParams
    );

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
