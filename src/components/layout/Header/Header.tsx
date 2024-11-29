"use client";

import { useState, useContext } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";

import { Routes } from "@/const/routes";
import MobileMenu from "./MobileMenu";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import Basket from "./Basket";
import ShoppingBag from "./ShoppingBag";

import { BasketContext } from "@/contexts/basketContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("Header");

  const { basketItems, showBasket } = useContext(BasketContext);

  const isUaActive = pathname.includes("/ua");
  const isEnActive = pathname.includes("/en");

  const handleLocaleChange = (locale: "ua" | "en") => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/");

    const query = searchParams.toString();
    const queryString = query ? `?${query}` : "";

    router.push(`/${locale}/${pathWithoutLocale}${queryString}`);
  };

  return (
    <div className="container mx-auto w-full flex justify-between items-center h-12 py-16 px-6 relative">
      <div onClick={() => setIsOpen(true)}>
        <BurgerMenuIcon className="cursor-pointer" />
      </div>
      <Link href={Routes.Home} className="flex flex-col items-center ml-20">
        <LogoIcon className="w-9 h-9" />
        <span className="text-gold text-xs">
          {t("title")}
        </span>
      </Link>
      <div className="flex gap-2 text-md text-gold cursor-pointer">
        {basketItems.length > 0 && <ShoppingBag />}
        <span
          onClick={() => handleLocaleChange("ua")}
          className={clsx("hover:underline", isUaActive && "font-bold")}
        >
          UA
        </span>
        |
        <span
          onClick={() => handleLocaleChange("en")}
          className={clsx("hover:underline", isEnActive && "font-bold")}
        >
          EN
        </span>
      </div>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      {showBasket && <Basket />}
    </div>
  );
};

export default Header;
