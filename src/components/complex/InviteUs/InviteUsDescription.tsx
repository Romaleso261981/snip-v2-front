import { FC } from "react";

type InviteUsDescriptionProps = {
  title: string;
  text: string;
  gallery: any;
};

const InviteUsDescription: FC<InviteUsDescriptionProps> = ({
  text,
  title,
  gallery
}) => {
  console.log("gallery", gallery);

  return (
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-col justify-center items-center w-full text-center p-4 pb-8 ">
        <h2 className="font-medium text-xxl">
          {title ? title : "Запроси нас"}
        </h2>
        <p className="w-full text-black font-medium text-md py-4 px-3">
          {text
            ? text
            : "Сьогодні вирощувати жито потребує більше зусиль, ресурсів та можливостей, ніж було колись. Живучи у мегаполісі не кожен може власноруч готувати солому. Проте кожен може самостійно"}
        </p>
      </div>
    </div>
  );
};

export default InviteUsDescription;
