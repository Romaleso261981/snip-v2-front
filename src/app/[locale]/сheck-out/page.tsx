"use client";

import Delivery from "@/components/complex/сheckout/ui/Delivery";
import Payment from "@/components/complex/сheckout/ui/Payment";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { CheckOutSteps } from "@/types/enums";
import { useState } from "react";

export default function CheckOut() {
  const [currentStep, setCurrentStep] = useState<keyof typeof CheckOutSteps>(
    CheckOutSteps.Delivery
  );

  const getCurrentStep = (currentStep: keyof typeof CheckOutSteps) => {
    switch (currentStep) {
      case CheckOutSteps.Delivery:
        return <Delivery setCurrentStep={setCurrentStep} />;
      case CheckOutSteps.Payment:
        return <Payment setCurrentStep={setCurrentStep} />;
      default:
        return <h1>Not found</h1>;
    }
  };

  return (
    <GeneralLayout>
      {getCurrentStep(currentStep)}
    </GeneralLayout>
  );
}
