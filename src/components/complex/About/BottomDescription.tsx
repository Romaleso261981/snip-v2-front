export default async function BottomDescription({
  bottomSecondText,
  bottomFirstText
}: {
  bottomSecondText: string;
  bottomFirstText: string;
}) {
  return (
    <div className="w-11/12 px-2 py-10 md:w-2/5">
      <p className="py-10">
        {bottomFirstText}
      </p>
      <p className="py-10">
        {bottomSecondText}
      </p>
    </div>
  );
}
