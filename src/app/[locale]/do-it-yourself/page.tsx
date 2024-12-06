import DoItYourself from "@/components/complex/DoItYourself/DoItYourself";
import GeneralLayout from "@/components/layout/GeneralLayout/GeneralLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Do it yourself",
  description:
    "We are a team of professionals who are passionate about their work. We are always ready to help you with the design of your home, office, or any other space. We are always ready to help you with the design of your home, office, or any other space."
};

export default async function page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <GeneralLayout>
      <DoItYourself locale={locale} />
    </GeneralLayout>
  );
}
