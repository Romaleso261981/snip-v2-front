import Image from "next/image";
import { FC } from "react";
import { InviteUsCardsStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import { useTranslations } from "next-intl";

type InviteUsCardListProps = {
  cards: InviteUsCardsStrapiResponce[];
};

const InviteUsCardList: FC<InviteUsCardListProps> = ({ cards }) => {
  const t = useTranslations("InviteUs");

  return (
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-wrap justify-center items-start w-full text-center p-4 pb-8">
        {cards.map((image, index) => {
          const imageUrl = getStrapiMedia(image.img.url);
          return (
            <article
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-1/3 p-4"
            >
              <Image
                src={imageUrl || ""}
                alt="Gallery Image"
                width={image.img.width || 400}
                height={image.img.height || 400}
                objectFit="cover"
              />
              <div className="text-center">
                <h3>
                  {image ? image.title : t("cardListTitle")}
                </h3>
                <p className="w-full text-black font-medium text-md py-4 px-3">
                  {image ? image.text : t("cardListText")}
                </p>
                <button>
                  {image ? image.buttontext : t("cardListbuttonText")}
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
