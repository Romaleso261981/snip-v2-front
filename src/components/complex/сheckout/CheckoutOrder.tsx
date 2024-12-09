"use client";

import React, { FC, useState } from "react";
import CitySelectionModal from "./ui/CitySelectionModal";
import UserInfo from "./ui/UserInfo";
import { CityAddress } from "@/api/novaPost";

export type DeliveryAddres = {
  city: string;
  region?: string;
  district?: string;
};

const CheckoutOrder: FC = () => {
  const [isShowCitySelectionModal, setIsShowCitySelectionModal] = useState(
    false
  );
  const [deliveryAddress, setdeliveryAddress] = useState<CityAddress>();

  const toggleShowCitySelectionModal = () => {
    setIsShowCitySelectionModal(!isShowCitySelectionModal);
  };

  return (
    <div className="w-full md:w-3/4 container px-4 md:px-10 mt-8">
      <div>
        <h2 className="text-gold font-bold text-xl py-3">
          Оформлення замовлення
        </h2>
        <UserInfo />
      </div>
      <div className="mt-4 flex justify-between items-center border border-gray-300 rounded p-4">
        <div>
          <p className="text-gold text-sm">
            {deliveryAddress?.Present || "Виберіть місто"}
          </p>
        </div>
        <button
          className="bg-blue-500 text-yellow-500 py-2 px-4 rounded-lg hover:border-gold"
          onClick={toggleShowCitySelectionModal}
        >
          Змінити
        </button>
      </div>
      {isShowCitySelectionModal &&
        <CitySelectionModal
          toggleShowCitySelectionModal={toggleShowCitySelectionModal}
          setdeliveryAddress={setdeliveryAddress}
        />}
    </div>
  );
};

export default CheckoutOrder;
