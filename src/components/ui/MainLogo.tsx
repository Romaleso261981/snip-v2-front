"use client";

import React from "react";

import LogoIcon from "@/assets/icons/logo.svg";
import { useRouter } from "next/navigation";

export default function MainLogo() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <button
        className="flex flex-col items-start"
        onClick={() => router.push("/")}
      >
        <LogoIcon className="w-9 h-9" />
        <span className="text-xs text-center">СНІП</span>
      </button>
    </div>
  );
}
