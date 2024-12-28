"use client";

import Image from "next/image";
import React from "react";

import cross from "@/assets/mobMenu/cross-mob-menu.png";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      className="flex gap-5 flex-row-reverse mb-10 pl-3 pt-3 md:p-0"
      onClick={() => router.back()}
    >
      <Image src={cross} alt="cross" />
    </div>
  );
}
