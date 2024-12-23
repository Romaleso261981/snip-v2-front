"use client";

const AddQuantity = ({
  stockNumber,
  setQuantity,
  quantity
}: {
  stockNumber: number;
  quantity: number;
  setQuantity: (updateFn: (prev: number) => number) => void; // Виправлено типізацію setQuantity
}) => {
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex flex-col gap-3 justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
          {stockNumber < 1
            ? <div className="text-xs">Product is out of stock</div>
            : <div className="text-xs">
                Only{" "}
                <span className="text-orange-500">
                  {stockNumber} items
                </span>{" "}
                left!
                <br /> Don&apos;t miss it
              </div>}
        </div>
      </div>
    </div>
  );
};

export default AddQuantity;
