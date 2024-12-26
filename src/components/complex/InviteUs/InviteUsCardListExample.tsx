import Image from "next/image";
import { FC } from "react";
import { getStrapiMedia } from "@/utils/api-helpers";
import { useTranslations } from "next-intl";
import { StrapiImage } from "@/types/apiStrapiTypes";

type InviteUsCardListProps = {
  examples: {
    description: string;
    text: string;
    image: StrapiImage;
  }[];
};

const InviteUsCardListExample: FC<InviteUsCardListProps> = ({ examples }) => {
  const t = useTranslations("InviteUs");

  return (
    <div className="flex flex-wrap justify-around items-start w-full text-center sm:hidden md:mb-16">
      {examples.map((example, index) => {
        const imageUrl = getStrapiMedia(example.image.url);
        return (
          <article
            key={index}
            className="flex flex-col items-center w-full p-4 md:w-1/3 h-full min-h-[350px]"
          >
            <div key={index} className="w-4/5 md:h-96 overflow-hidden">
              <Image
                src={imageUrl || ""}
                alt="Gallery Image"
                width={700}
                height={1200}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow h-full w-4/5 text-center">
              <h3 className="w-full font-medium text-slate-700 text-2xl py-4 px-3 border-b-2 border-gold">
                {example ? example.text : t("cardListText")}
              </h3>
              <p className="flex-grow w-full text-slate-600 text-sm py-4 px-3">
                {example ? example.description : t("cardListDescription")}
              </p>
              <button className="w-full border border-gold text-gold text-sm mt-8 py-3 px-3">
                {t("cardListbuttonText")}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default InviteUsCardListExample;
