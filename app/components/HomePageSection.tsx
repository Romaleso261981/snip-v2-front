import Link from "next/link";

import { FC } from "react";

type HomePageSectionProps = {
  data: {
    description: string;
    title: string;
  };
};
const HomePageSection: FC<HomePageSectionProps> = ({ data }) => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="flex flex-col mx-auto pt-10 justify-center items-center md:w-full sm:max-w-3xl md:my-24">
          <div className="flex flex-col justify-center items-center w-full text-center p-4 pb-8 ">
            <h2 className="text-gold font-medium text-3xl leading-[38.4px]">
              {data.title}
            </h2>
            <p className="w-full text-black font-medium leading-[22.4px] mt-4">
              {data.description}
            </p>
            <Link
              className="md:w-[210px] md:h-[50px] md:mt-16 flex mt-16 justify-center items-center w-full h-12 text-md text-gold border-gold border-2 shadow hover:bg-gray-100"
              href={"/"}
            >
              Дізнатись більше
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageSection;
