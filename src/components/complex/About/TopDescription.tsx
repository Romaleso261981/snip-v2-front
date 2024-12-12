import { FC } from "react";

type TopDescriptionProps = {
  main: { title: string; text: string };
  mainBottomText: string;
};

const TopDescription: FC<TopDescriptionProps> = ({
  mainBottomText,
  main: { text, title }
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xxl mb-5 ma:mb-10">
        {title}
      </h2>
      <div className="w-11/12 px-2 md:w-2/3 ">
        <p className="mb-10 ma:mb-20">
          {text}
        </p>
        <p className="mb-10 ma:mb-20">
          {mainBottomText}
        </p>
      </div>
    </div>
  );
};

export default TopDescription;
