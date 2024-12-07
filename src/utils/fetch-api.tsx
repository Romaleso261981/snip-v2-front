import qs from "qs";
import { getStrapiURL, getToken } from "./api-helpers";
import {
  AboutStrapiResponce,
  BuyFromUsResponce,
  InviteUsCardsStrapiResponce,
  InviteUsStrapiResponce,
  NaboriResponce
} from "@/types/apiStrapiTypes";
import { endpoints } from "@/configs/endpoints";

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
export async function getAboutStrapiData(locale: string = "uk") {
  try {
    const urlParamsObject = {
      populate: "*",
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
        examples: { populate: "*" },
        main: { populate: "*" }
      },

      locale: locale
    };

    const { data }: { data: BuyFromUsResponce } = await fetchAPI(
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
        gallery: { populate: "*" }
      },
      locale: locale
    };

    const urlParamsObject2 = {
      populate: "*",
      locale: locale
    };

    const { data }: { data: InviteUsStrapiResponce } = await fetchAPI(
      endpoints.inviteUs,
      urlParamsObject
    );

    const {
      data: cards
    }: { data: InviteUsCardsStrapiResponce[] } = await fetchAPI(
      endpoints.masterKlasi,
      urlParamsObject2
    );

    return {
      data,
      cards
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

    const { data }: { data: BuyFromUsResponce } = await fetchAPI(
      endpoints.byFromUs,
      urlParamsObject
    );

    const { data: naboris }: { data: NaboriResponce } = await fetchAPI(
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
