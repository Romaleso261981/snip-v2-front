import { Routes } from "@/const/routes";
import Link from "next/link";
import { ReactNode } from "react";

import LogoIcon from "@/assets/icons/logo.svg";

export default function CheckOutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container text-gold py-10">
      <div>
        <Link href={Routes.Home} className="flex flex-col items-start ml-10">
          <LogoIcon className="w-9 h-9" />
          <span className="text-xs">СНІП</span>
        </Link>
      </div>
      <main className="">
        {children}
      </main>
    </div>
  );
}
