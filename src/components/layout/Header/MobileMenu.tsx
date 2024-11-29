"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import cross from "@/assets/mobMenu/cross-mob-menu.png";

type MobMenuProps = {
  setIsOpen: (value: boolean) => void;
};

const mobileMenuStrapiData = {
  ua: {
    mainTitle: "Меню",
    contactTitle: "Контакти:",
    linksNav: [
      {
        id: 1,
        title: "Головна",
        href: "/"
      },
      {
        id: 4,
        title: "Запроси нас",
        href: "/invite-us"
      },
      {
        id: 5,
        title: "Зроби сам",
        href: "/do-it-yourself"
      },
      {
        id: 6,
        title: "Купи в нас",
        href: "/buy-from-us"
      },
      {
        id: 3,
        title: "Про нас",
        href: "/about-us"
      }
    ],
    linksContact: [
      {
        id: 1,
        title: "Тел: +380 67 435 82 00",
        href: "tel:+380674358200"
      },
      {
        id: 2,
        title: "Gmail: snip.solomy@gmail.com",
        href: "mailto:snip.solomy@gmail.com"
      }
    ]
  },
  en: {
    mainTitle: "Menu",
    contactTitle: "Contacts:",
    linksNav: [
      {
        id: 1,
        title: "Home",
        href: "/"
      },
      {
        id: 4,
        title: "Invite us",
        href: "/invite-us"
      },
      {
        id: 5,
        title: "Do it yourself",
        href: "/do-it-yourself"
      },
      {
        id: 6,
        title: "Buy from us",
        href: "/buy-from-us"
      },
      {
        id: 3,
        title: "About us",
        href: "/about-us"
      }
    ],
    linksContact: [
      {
        id: 1,
        title: "Phone: +380 67 435 82 00",
        href: "tel:+380674358200"
      },
      {
        id: 2,
        title: "Gmail: snip.solomy@gmail.com",
        href: "mailto:snip.solomy@gmail.com"
      }
    ]
  }
};
const strapiData = mobileMenuStrapiData.ua;

const MobileMenu: FC<MobMenuProps> = ({ setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (path: string) => {
    const currentLocale = pathname.split("/")[1];
    router.push(`/${currentLocale}${path}`);
    setIsOpen(false);
  };

  return (
    <div className="absolute w-full top-0 left-0 z-20 flex flex-col justify-between items-start text-center p-4 pb-8 bg-white md:w-1/5">
      <div
        className="flex gap-5 flex-row-reverse mb-14"
        onClick={() => setIsOpen(false)}
      >
        <span className="text-gold font-bold">
          {strapiData.mainTitle}
        </span>
        <Image src={cross} alt="cross" />
      </div>
      <div className="flex flex-col justify-start items-start mb-40">
        <ul className="flex flex-col justify-center items-start text-gold">
          {strapiData.linksNav.map(item =>
            <li
              key={item.id}
              className="width-[80px] height-[22px] pb-3 hover:translate-x-1 duration-300"
              onClick={() => handleLocaleChange(item.href)}
            >
              <span className="cursor-pointer">
                {item.title}
              </span>
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start">
        <nav className="flex flex-col justify-start items-start text-gold">
          <h3 className="width-[80px] height-[22px] mb-[24px] text-gold font-montserrat font-weight-500 leading-19.2px text-center">
            {strapiData.contactTitle}
          </h3>
          {strapiData.linksContact.map(item =>
            <Link
              key={item.id}
              href={item.href}
              className="text-gold font-montserrat font-weight-500 leading-19.2px mb-2"
            >
              {item.title}
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
