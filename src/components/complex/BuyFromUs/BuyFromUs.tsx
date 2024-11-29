import Image from "next/image";

import image1 from "@/assets/BuyFromUs/img1.png";
import image2 from "@/assets/BuyFromUs/img2.png";
import image3 from "@/assets/BuyFromUs/img3.png";
import image4 from "@/assets/BuyFromUs/img4.png";

export default function BuyFromUs() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="font-montserrat font-weight-500 text-2xl pb-4">
          Купи в нас
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          Наші набори для виготовлення павуків є одним із прекрасних способів
          провести спільно час з рідними або ж помедитувати наодинці. Вони
          можуть розвивати дрібну моторику у дітей або стати подарунком для
          близьких. Крім окраси для домівки, ви отримаєте особливе задоволення
          від процесу створення та естетики результату.
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image alt="bg" src={image1} className="mb-4" />
        <div className="flex flex-row w-full justify-around mt-4">
          <h4 className="text-black font-montserrat font-weight-500 text-2xs">
            Павук “Класичний”
          </h4>
          <span>750 грн</span>
        </div>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image alt="bg" src={image2} className="mb-4" />
        <div className="flex flex-row w-full justify-around mt-4">
          <h4 className="text-black font-montserrat font-weight-500 text-2xs">
            Павук “Класичний”
          </h4>
          <span>750 грн</span>
        </div>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image alt="bg" src={image3} className="mb-4" />
        <div className="flex flex-row w-full justify-around mt-4">
          <h4 className="text-black font-montserrat font-weight-500 text-2xs">
            Павук “Класичний”
          </h4>
          <span>750 грн</span>
        </div>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image alt="bg" src={image4} className="mb-4" />
        <div className="flex flex-row w-full justify-around mt-4">
          <h4 className="text-black font-montserrat font-weight-500 text-2xs">
            Павук “Класичний”
          </h4>
          <span>750 грн</span>
        </div>
      </div>
    </>
  );
}
