import InviteUs from "@/components/complex/InviteUs/InviteUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invite Us",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default function Home() {
  return (
    <section className="container mx-auto">
      <InviteUs />
    </section>
  );
}
