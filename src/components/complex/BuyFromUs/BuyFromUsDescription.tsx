type BuyFromUsDescriptionProps = {
  description: string;
  title: string;
};

export default function BuyFromUsDescription({
  description,
  title
}: BuyFromUsDescriptionProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-8">
        <h3 className="font-montserrat font-weight-500 text-2xl pb-4">
          {title}
        </h3>
        <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
          {description}
        </p>
      </div>
    </div>
  );
}
