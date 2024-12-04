import { Metadata } from "next";

import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import ShippingAndPayment from "@/components/complex/Info/ShippingAndPayment";

export const metadata: Metadata = {
  title: "Info",
  description: "Shipping and payment",
};

export default function InfoPage() {
  return (
    <GeneralLayout>
      <ShippingAndPayment />
    </GeneralLayout>
  );
}
