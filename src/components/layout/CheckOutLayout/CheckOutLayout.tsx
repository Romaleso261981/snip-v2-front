import { Routes } from "@/const/routes";
import Link from "next/link";
import { ReactNode } from "react";

import LogoIcon from "@/assets/icons/logo.svg";

export default function CheckOutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col justify-center items-center text-gold py-5 px-4">
      <header className="container flex justify-start md:w-3/4">
        <Link href={Routes.Home} className="flex flex-col items-start">
          <LogoIcon className="w-9 h-9" />
          <span className="text-xs">СНІП</span>
        </Link>
      </header>
      <main className="container flex flex-col sm:flex-row justify-center">
        {children}
      </main>
    </div>
  );
}
