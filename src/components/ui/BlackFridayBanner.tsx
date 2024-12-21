"use client";

import { useEffect, useState } from "react";

const BlackFridayBanner = () => {
  const [isShowBaner, setIsShowBaner] = useState<boolean>(false);
  const sale = {
    title: "Black Friday Sale",
    description: "Get 50% off on all products",
    couponCode: "BLACKFRIDAY",
    discountAmount: 50
  };

  useEffect(() => {
    (() => {
      // const today = new Date();
      // const blackFriday = new Date(today.getFullYear(), 10, 26);
      // const diff = blackFriday.getTime() - today.getTime();
      // const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      // if (days <= 0) {
      //   setIsShowBaner(true);
      // }
      setTimeout(() => {
        setIsShowBaner(true);
      }, 5000);
    })();
  }, []);

  if (isShowBaner) return null;

  return (
    <div className="absolute left-0 top-14 z-20 bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      <div className="flex-1">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4 ">
          {sale.title}
        </h2>
        <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
          {sale.description}
        </p>
        <div className="flex">
          <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
            <span className="font-bold text-base sm:text-xl">
              Use code: <span className="text-red-600">{sale.couponCode}</span>
            </span>
            <span className="ml-2 font-bold text-base sm:text-xl">
              for {sale.discountAmount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
