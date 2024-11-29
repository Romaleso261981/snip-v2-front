import Image from "next/image";

import bg from "@/assets/doItYourself/bg.png";

export default function DoItYourself() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="text-gold font-montserrat font-weight-500 text-2xl pb-4">
          Зроби власноруч
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          Відомо, що діяльність, яка пов’язана із творчістю та рукоділлям, має
          терапевтичний вплив на людину, а результат створений власними руками
          надає відчуття самоцінності та радості.
        </p>
        <p className="text-center text-black font-montserrat font-weight-500 text-2xs">
          Тут знайдете відеоінструкції, за якими можна сплести павуків із
          власної житньої соломи.
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image alt="bg" src={bg} className="mb-4" />
        <h4 className="text-black font-montserrat font-weight-500 text-2xs">
          Павук з соломи “Класичний”
        </h4>
      </div>
    </div>
  );
}
