import { StrapiImage } from "@/types/apiStrapiTypes";
import { useTranslations } from "next-intl";
import { FC } from "react";

type InviteUsDescriptionProps = {
  data: {
    title: string;
    text: string;
    gallery?: StrapiImage[];
  };
};

const InviteUsDescription: FC<InviteUsDescriptionProps> = ({ data }) => {
  const { title, text } = data;

  const t = useTranslations("InviteUs");
  return (
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-col justify-center items-center w-full text-center p-4 pb-8 ">
        <h2 className="font-medium text-xxl">
          {title ? title : t("title")}
        </h2>
        <p className="w-full text-black font-medium text-md py-4 px-3">
          {text ? text : t("text")}
        </p>
      </div>
    </div>
  );
};

export default InviteUsDescription;
