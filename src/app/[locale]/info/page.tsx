import { Metadata } from "next";

import ShippingAndPayment from "@/components/complex/Info/ShippingAndPayment";

export const metadata: Metadata = {
  title: "Info",
  description: "Shipping and payment",
};

export default function InfoPage() {
  return (
    <section className="container mx-auto">
      <ShippingAndPayment />
    </section>
  );
}
