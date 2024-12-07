import Image from "next/image";
import { FC } from "react";
import { InviteUsCardsStrapiResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";

type InviteUsCardListProps = {
  cards: InviteUsCardsStrapiResponce[];
};

const InviteUsCardList: FC<InviteUsCardListProps> = ({ cards }) => {
  const width = 360;
  const height = 440;

  const imageFallback = `https://via.placeholder.com/${width}x${height}`;

  return (
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-wrap justify-center items-start w-full text-center p-4 pb-8">
        {cards.map((image, index) => {
          const imageUrl = getStrapiMedia(image.img.url) || imageFallback;
          return (
            <article
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-1/3 p-4"
            >
              <Image
                src={imageUrl}
                alt="Gallery Image"
                width={width}
                height={height}
                objectFit="cover"
              />
              <div className="text-center">
                <h3>Майстерклас</h3>
                <p className="w-full text-black font-medium text-md py-4 px-3">
                  {image
                    ? image.text
                    : "З великим задовленням ми можемо провести майстер-класи з виготовлення павуків вживу для ваших друзів, співробітників або клієнтів. Для цього напишіть нам або зателефонуйте за вказаними контактами і ми домовимося про деталі зустрічі."}
                </p>
                <button>
                  {image ? image.buttontext : "Дізнатись контакти"}
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
