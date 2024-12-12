import InviteUsCardList from "@/components/complex/InviteUs/InviteUsCardList";
import InviteUsDescription from "@/components/complex/InviteUs/InviteUsDescription";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { InviteUsResponce } from "@/types/apiStrapiTypes";
import { getInviteUsStrapiData } from "@/utils/fetch-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invite Us",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data }: InviteUsResponce = await getInviteUsStrapiData(locale);

  return (
    <GeneralLayout>
      <InviteUsDescription data={data} />
      <InviteUsCardList examples={data.examples} />
    </GeneralLayout>
  );
}
