import { api } from "@/configs/axiosConfig";
import { LOCALE } from "@/configs/constants";

export const getStrapiData = async (
  url: string,
  params = { locale: LOCALE }
) => {
  try {
    const { data } = await api.get(url, { params });
    console.log("data-------", data.data);
    return {
      data: data.data
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Server error");
  }
};

export const getStrapiMedia = (url: string) => {
  if (url == null) {
    return null;
  }
  if (url.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL_IMG}${url}`;
  }
  return url;
};
