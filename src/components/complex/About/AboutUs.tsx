import { AboutStrapiResponce } from "@/types/apiStrapiTypes";
import { FC } from "react";
import TopDescription from "./TopDescription";
import MidleDescription from "./MidleDescription";
import SeparatorImage from "./SeparatorImage";
import BottomDescription from "./BottomDescription";

type MainDescriptionProps = {
  data: AboutStrapiResponce;
};

const MainDescription: FC<MainDescriptionProps> = ({ data }) => {
  return (
    <div className="container mx-auto pt-10 md:p-0">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <TopDescription main={data.main} />
        <MidleDescription
          rightFounder={data.rightFounder}
          leftFounder={data.leftFounder}
          mobileImage={data.mobileImage}
          desctopImages={data.desctopImages}
        />
        <SeparatorImage separatorImage={data.separatorImage} />
        <BottomDescription
          bottomFirstText={data.bottomFirstText}
          bottomSecondText={data.bottomSecondText}
        />
      </div>
    </div>
  );
};

export default MainDescription;
