import CheckoutOrder from "@/components/complex/сheckout/CheckoutOrder";
import CheckoutTotal from "@/components/complex/сheckout/ui/CheckoutTotal";
import CheckOutLayout from "@/components/layout/CheckOutLayout/CheckOutLayout";

export default function CheckOut() {
  return (
    <CheckOutLayout>
      <CheckoutOrder />
      <CheckoutTotal />
    </CheckOutLayout>
  );
}
