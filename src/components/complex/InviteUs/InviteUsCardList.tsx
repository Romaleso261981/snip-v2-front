import Image from "next/image";
import { FC } from "react";
import { getStrapiMedia_V2 } from "@/utils/api-helpers";
import { useTranslations } from "next-intl";
import { StrapiImage } from "@/types/apiStrapiTypes";

type InviteUsCardListProps = {
  examples: {
    description: string;
    text: string;
    image: StrapiImage;
  }[];
};

const InviteUsCardList: FC<InviteUsCardListProps> = ({ examples }) => {
  const t = useTranslations("InviteUs");

  return (
    <div className="container mx-auto  md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-wrap justify-center items-start w-full text-center">
        {examples.map((image, index) => {
          const imageUrl = getStrapiMedia_V2(image.image.url);
          return (
            <article
              key={index}
              className="flex flex-col justify-center mt-10 items-center w-full md:w-1/3 p-4"
            >
              <div className="w-4/5 md:h-96 overflow-hidden">
                <Image
                  src={imageUrl || ""}
                  alt="Gallery Image"
                  width={700}
                  height={1200}
                />
              </div>
              <div className="w-4/5  text-center">
                <h3 className="w-full font-medium text-black text-md py-4 px-3 border-b-2 border-gold">
                  {image ? image.text : t("cardListText")}
                </h3>
                <p className="w-full text-gray-500 text-sm py-4 px-3">
                  {image ? image.description : t("cardListDescription")}
                </p>
                <button className="w-full border border-gold text-gold text-sm mt-8  py-3 px-3">
                  {t("cardListbuttonText")}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default InviteUsCardList;
