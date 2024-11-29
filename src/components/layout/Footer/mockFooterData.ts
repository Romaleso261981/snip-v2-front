const strapiFooterData = {
  ua: {
    Information: {
      title: "Інформація:",
      links: [
        {
          id: 1,
          title: "Політика конфіденційності",
          href: "/policy"
        },
        {
          id: 2,
          title: "Доставка та оплата",
          href: "/payment"
        },
        {
          id: 3,
          title: "Повернення",
          href: "/return"
        },
        {
          id: 4,
          title: "Публічний договір",
          href: "/public_contract"
        }
      ]
    },

    contacts: {
      title: "Контакти:",
      links: [
        {
          id: 1,
          title: "Телефон:",
          text: "+380 97 123 45 67"
        },
        {
          id: 2,
          title: "Email:",
          text: "snip.solomy@gmail.com"
        }
      ]
    },
    menu: {
      title: "Меню",
      links: [
        {
          id: 1,
          title: "Головна",
          href: "/"
        },
        {
          id: 2,
          title: "Про нас",
          href: "/about-us"
        },
        {
          id: 3,
          title: "Купити в нас",
          href: "/buy-from-us"
        },
        {
          id: 4,
          title: "Зроби сам",
          href: "/do-it-yourself"
        },
        {
          id: 5,
          title: "Запроси нас",
          href: "/invite-us"
        }
      ]
    }
  },
  en: {
    Information: {
      title: "Information:",
      links: [
        {
          id: 1,
          title: "Privacy Policy",
          href: "/policy"
        },
        {
          id: 2,
          title: "Shipping and Payment",
          href: "/payment"
        },
        {
          id: 3,
          title: "Return",
          href: "/return"
        },
        {
          id: 4,
          title: "Public Contract",
          href: "/public_contract"
        }
      ]
    },
    contacts: {
      title: "Contacts:",
      links: [
        {
          id: 1,
          title: "Phone:",
          text: "+380 97 123 45 67"
        },
        {
          id: 2,
          title: "Email:",
          text: "snip.solomy@gmail.com"
        }
      ]
    },
    menu: {
      title: "Menu",
      links: [
        {
          id: 1,
          title: "Home",
          href: "/"
        },
        {
          id: 2,
          title: "About Us",
          href: "/about-us"
        },
        {
          id: 3,
          title: "Buy From Us",
          href: "/buy-from-us"
        },
        {
          id: 4,
          title: "Do It Yourself",
          href: "/do-it-yourself"
        },
        {
          id: 5,
          title: "Invite Us",
          href: "/invite-us"
        }
      ]
    }
  }
};

const mockFooterData = strapiFooterData.en;

export { mockFooterData };
