import { FC } from "react";

const ShippingAndPayment: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center min-w-80 text-center">
        <h2 className="text-gold font-medium text-3xl leading-[38.4px] p-3">
          доставка
        </h2>
        <div className="w-full text-black font-medium leading-[22.4px] p-10">
          <p className="">
            Відомо, що діяльність, яка пов’язана із творчістю та рукоділлям, має
            терапевтичний вплив на людину, а результат створений власними руками
            надає відчуття самоцінності та радості.
          </p>
          <p className="mt-3">
            Тут знайдете відеоінструкції, за якими можна сплести павуків із
            власної житньої соломи.
          </p>
        </div>
        <div className="w-full text-black font-medium leading-[22.4px] p-10">
          <h2 className="text-gold font-medium text-3xl leading-[38.4px] p-3">
            Оплата
          </h2>
          <p className="w-full text-black font-medium leading-[22.4px]">
            Ми мріємо перетворити солом’яного павука із сезонної прикраси на
            цілорічний декор сучасних просторів. Нам важливо, щоб вироби з
            соломи захоплювали українською культурою іноземних шанувальників та
            демонстрували приналежність до європейської традиції соломоплетіння.
          </p>
          <p className="w-full text-black font-medium leading-[22.4px] mt-3">
            Ми віримо, що найбільше тепла можемо отримати від часу проведеного
            найріднішими людьми: з нашою родиною та друзями. А традиція
            об&apos;єднує навколо себе людей за спільною діяльністю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
