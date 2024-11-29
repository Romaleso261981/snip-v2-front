import { api } from "@/configs/axiosConfig";
import { LOCALE } from "@/configs/constants";

export const getStrapiData = async (
  url: string,
  params = { locale: LOCALE }
) => {
  try {
    const { data } = await api.get(url, { params });

    return {
      data: data.data
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Server error");
  }
};
