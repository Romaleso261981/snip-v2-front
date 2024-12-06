const TopDescription = ({
  main: { title, text, text2 }
}: {
  main: {
    id: string;
    text: string;
    text2: string;
    title: string;
  };
}) => {
  return (
    <div className="">
      <h2 className="text-xxl mb-5 ma:mb-10">
        {title}
      </h2>
      <div className="w-11/12 px-2 md:w-2/3 ">
        <p className="mb-10 ma:mb-20">
          {text}
        </p>
        <p className="mb-10 ma:mb-20">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default TopDescription;
