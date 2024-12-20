import React, { FC, useState } from "react";
import { NovaPostForm } from "./NovaPostForm";
import { CourierForm } from "./CourierForm";
import { PickupForm } from "./PickupForm";
import { deliveryMockData, DeliveryType } from "../mockData";

const Delivery: FC = () => {
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryType | null>(
    null
  );

  const renderForm = (delivery: typeof deliveryMockData[0]) => {
    switch (delivery.type) {
      case DeliveryType.NovaPost:
        return <NovaPostForm branches={delivery.branches || []} />;
      case DeliveryType.Courier:
        return <CourierForm />;
      case DeliveryType.Pickup:
        return <PickupForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-gold font-bold text-xl py-3">Доставка</h2>
      <ul className="">
        {deliveryMockData.map(delivery =>
          <li
            key={delivery.id}
            className="flex flex-col justify-between items-start mb-4 w-full"
          >
            {selectedDelivery === delivery.type
              ? <div className="w-full">
                  {renderForm(delivery)}
                </div>
              : <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row items-center">
                    <input
                      className="mr-2"
                      type="radio"
                      checked={selectedDelivery === delivery.type}
                      onChange={() => setSelectedDelivery(delivery.type)}
                    />
                    <h3>
                      {delivery.name}
                    </h3>
                  </div>
                  <span className="ml-6">
                    {delivery.price} грн
                  </span>
                </div>}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Delivery;
