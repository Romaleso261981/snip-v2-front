import Image from "next/image";

import { CardsStrapiResponce } from "@/types/ProductItemTypes";
import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";

const defaultImageUrl = "https://via.placeholder.com/400";

type CardListProps = {
  cards: CardsStrapiResponce[];
};

export default function CardList({ cards }: CardListProps) {
  return (
    <div className="text-center flex flex-col items-center mt-14 mb-14">
      {cards.map((card: any) => {
        const imageUrl = getStrapiMedia(card.img[0].url);
        return (
          <Link href={`product/${card.id}`} key={card.id}>
            <div className="flex flex-col w-full justify-around mt-4 px-6 py-4">
              {imageUrl &&
                <Image
                  src={imageUrl || defaultImageUrl}
                  alt={"none provided"}
                  className="object-cover w-full h-full overflow-hidden"
                  width={400}
                  height={400}
                />}
              <div className="flex flex-row justify-around py-5">
                <h4 className="font-weight-500 text-2xs">
                  {card.title}
                </h4>
                <span>
                  {card.cost} {card.currency}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
