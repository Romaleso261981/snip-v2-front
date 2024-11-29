"use client";
import { useTranslations } from "next-intl";

import SocialMedia from "./SocialMedia";

const Contacts = () => {
  const t = useTranslations("Footer.contacts");

  return (
    <nav className="flex items-center flex-col gap-2">
      <h3 className="text-gold font-semibold xl:flex-col xl:items-start">
        {t("title")}
      </h3>
      <ul className="flex gap-2 flex-col items-center text-dark xl:flex-row xl:items-start">
        <li>
          <a href="tel:380674358200">{`${t("phone")}: 0674358200`}</a>
        </li>
        <li>
          <a href="mailto:snip.solomy@gmail.com">{`${t(
            "email"
          )}: snip.solomy@gmail.com`}</a>
        </li>
      </ul>
      <SocialMedia />
    </nav>
  );
};

export default Contacts;
