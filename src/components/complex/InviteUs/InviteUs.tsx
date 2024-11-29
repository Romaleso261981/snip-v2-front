import Image from "next/image";
import { FC } from "react";

import image1 from "@/assets/inviteUs/photo1.png";
import image2 from "@/assets/inviteUs/photo2.png";

const InviteUs: FC = () => {


  const width = 360;
  const height = 440;

  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <div className="container mx-auto mt-10 md:w-full sm:max-w-3xl md:my-24">
      <div className="flex flex-col justify-center items-center w-full text-center p-4 pb-8 ">
        <h2 className="font-medium text-xxl">
            Запроси нас
        </h2>
        <p className="w-full text-black font-medium text-md py-4 px-3">
        Сьогодні вирощувати жито потребує більше зусиль, ресурсів та можливостей, ніж було колись. Живучи у мегаполісі не кожен може власноруч готувати солому. Проте кожен може самостійно
        </p>
        <article className="flex flex-col justify-center items-center">
        <Image
          src={image1 ?? imageFallback}
          alt="Galery Image"
          objectFit="cover"
        />
        <div className="">
        <h3>Майстерклас</h3>
        <p className="w-full text-black font-medium text-md py-4 px-3">
          З великим задовленням ми можемо провести майстер-класи з виготовлення павуків вживу для ваших друзів, співробітників або клієнтів.
          Для цього напишіть нам або зателефонуйте за вказаними контактами і ми домовимося про деталі зустрічі.
        </p>
        <button>Дізнатись контакти</button>

        </div>
        </article>
        <article className="flex flex-col justify-center items-center">
        <Image
          src={image2 ?? imageFallback}
          alt="Galery Image"
          objectFit="cover"
        />
         <div className="">
        <h3>Персональний павук</h3>
        <p className="w-full text-black font-medium text-md py-4 px-3">
            У нас ви можете замовити виготовлення авторського павука у єдиному екземплярі. Напишіть нам або зателефонуйте за вказаними контактами і ми обговоримо деталі особливого замовлення.
        </p>
        <button>Дізнатись контакти</button>
        </div>
        </article>


      </div>
    </div>
  );
};

export default InviteUs;
