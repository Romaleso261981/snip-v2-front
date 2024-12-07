import Image from "next/image";

import { BuyFromUsResponce } from "@/types/apiStrapiTypes";
import { getStrapiMedia } from "@/utils/api-helpers";

const placeholderImage = "https://via.placeholder.com/400";

export default function DoItYourself({ data }: { data: BuyFromUsResponce }) {
  console.log(data);
  const url = data ? getStrapiMedia(data.examples.image.url) : "";
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="text-gold font-montserrat font-weight-500 text-2xl pb-4">
          {data ? data.main.title : "Зроби власноруч"}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          {data
            ? data.main.text
            : "Відомо, що діяльність, яка пов’язана із творчістю та рукоділлям, має терапевтичний вплив на людину, а результат створений власними руками надає відчуття самоцінності та радості."}
        </p>
        <p className="text-center text-black font-montserrat font-weight-500 text-2xs">
          {data
            ? data.main.text2
            : "Тут знайдете відеоінструкції, за якими можна сплести павуків із власної житньої соломи."}
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-14 mb-14">
        <Image
          alt="bg"
          src={url || placeholderImage}
          width={data ? data.examples.image.width : 400}
          height={data ? data.examples.image.height : 400}
          className="mb-4"
        />
        <h4 className="text-black font-montserrat font-weight-500 text-2xs">
          {data ? data.examples.text : "Павук з соломи “Класичний”"}
        </h4>
      </div>
    </div>
  );
}
