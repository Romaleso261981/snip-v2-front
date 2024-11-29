import { api } from "@/configs/axiosConfig";

export const getStrapiData = async (url: string) => {
  try {
    const { data } = await api.get(url);

    return {
      data: data.data
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Server error");
  }
};
