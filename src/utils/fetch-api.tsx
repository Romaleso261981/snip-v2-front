import qs from "qs";
import {
  getStrapiURL,
  getStrapiURL_V2,
  getToken,
  getToken_V2
} from "./api-helpers";
import {
  AboutStrapiResponce,
  BuyFromUsResponce,
  DoItYourselfResponce,
  HomeStrapiResponce,
  InviteUsStrapiResponce,
  NaboriResponce
} from "@/types/apiStrapiTypes";
import { endpoints } from "@/configs/endpoints";

export async function fetchAPI_V2(path: string, urlParamsObject = {}) {
  try {
    const token = getToken_V2();

    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL_V2(
      `${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
export async function fetchAPI(path: string, urlParamsObject = {}) {
  try {
    const token = getToken();

    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
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
    const urlParamsObject_V2 = {
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

    const { data: data_V2 }: { data: HomeStrapiResponce } = await fetchAPI_V2(
      endpoints.home,
      urlParamsObject_V2
    );

    return { data_V2 };
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

    const { data }: { data: AboutStrapiResponce } = await fetchAPI_V2(
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

    const { data }: { data: DoItYourselfResponce } = await fetchAPI_V2(
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
    const urlParamsObject_V2 = {
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

    const { data }: { data: InviteUsStrapiResponce } = await fetchAPI_V2(
      endpoints.inviteUs,
      urlParamsObject_V2
    );

    return {
      data
    };
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

    const urlParamsNabori = {
      populate: "*",
      locale: locale
    };

    const { data }: { data: BuyFromUsResponce } = await fetchAPI_V2(
      endpoints.byFromUs,
      urlParamsObject
    );

    const { data: naboris }: { data: NaboriResponce } = await fetchAPI_V2(
      endpoints.naboris,
      urlParamsNabori
    );

    return { data, naboris };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
