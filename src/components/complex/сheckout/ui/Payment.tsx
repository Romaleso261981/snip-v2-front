import { CheckOutSteps } from "@/types/enums";
import React, { FC } from "react";

type PaymentProps = {
  setCurrentStep: (step: CheckOutSteps) => void;
};

const Payment: FC<PaymentProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <h2>Payment</h2>
      <button
        onClick={() => setCurrentStep(CheckOutSteps.Delivery)}
        className="border-2 border-black p-2"
      >
        Delivery
      </button>
    </div>
  );
};

export default Payment;
