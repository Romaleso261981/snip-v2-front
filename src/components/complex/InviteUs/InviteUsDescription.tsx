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
    <div className="container mx-auto md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-col  justify-center items-center w-full text-center">
        <h2 className="font-normal py-6 text-xxl">
          {title ? title : t("title")}
        </h2>
        <p className="w-4/5 text-slate-600 font-medium text-md px-3">
          {text ? text : t("text")}
        </p>
      </div>
    </div>
  );
};

export default InviteUsDescription;
