import LogoIcon from "@/assets/icons/logo.svg";
import { useTranslations } from "next-intl";

const FooterDescription = () => {
  const t = useTranslations("Footer.logo");
  return (
    <div className="w-full flex justify-center items-center py-10 ">
      <div className="flex flex-col items-center px-1">
        <LogoIcon className="w-20 h-20 mb-5" />
        <p className="w-[60%] text-gold text-[18px] font-normal text-center">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default FooterDescription;
