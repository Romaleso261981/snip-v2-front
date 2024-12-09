import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import Link from "next/link";
import { Card, NaboriResponce } from "@/types/apiStrapiTypes";

type CardListProps = {
  cards: NaboriResponce;
};

export default function ProductList({ cards }: CardListProps) {
  return (
    <div className="w-full text-center text-gold grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center border-gold mt-15 mb-14 md:my-5">
      {cards.map((card: Card) => {
        const imageUrl = getStrapiMedia(card.image.url);
        return (
          <Link
            href={`product/${card.id}`}
            key={card.id}
            className="flex items-center justify-center w-full"
          >
            <div className="flex flex-col items-center justify-center h-full w-full border border-gold p-4 rounded-sm shadow-lg 2xl:p-2 sm:justify-between">
              {imageUrl &&
                <Image
                  src={imageUrl || "defaultImageUrl"}
                  alt={"none provided"}
                  width={card.image.width}
                  height={card.image.height}
                />}
              <div className="flex items-center gap-2 py-5 md:flex-col">
                <h4 className="font-medium text-sm">
                  {card.name}
                </h4>
                <span>
                  {card.price} {card.union}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
