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
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-wrap justify-center items-start w-full text-center p-4 pb-8">
        {examples.map((image, index) => {
          const imageUrl = getStrapiMedia_V2(image.image.url);
          return (
            <article
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-1/3 p-4"
            >
              <Image
                src={imageUrl || ""}
                alt="Gallery Image"
                width={image.image.width || 400}
                height={image.image.height || 400}
                objectFit="cover"
              />
              <div className="text-center">
                <h3>
                  {image ? image.text : t("cardListTitle")}
                </h3>
                <p className="w-full text-black font-medium text-md py-4 px-3">
                  {image ? image.text : t("cardListText")}
                </p>
                <button>
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
