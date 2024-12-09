import { CheckOutSteps } from "@/types/enums";
import React, { FC } from "react";

type DeliveryProps = {
  setCurrentStep: (step: CheckOutSteps) => void;
};

const Delivery: FC<DeliveryProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <h2>Delivery</h2>
      <button
        onClick={() => setCurrentStep(CheckOutSteps.Payment)}
        className="border-2 border-black p-2"
      >
        Payment
      </button>
    </div>
  );
};

export default Delivery;
