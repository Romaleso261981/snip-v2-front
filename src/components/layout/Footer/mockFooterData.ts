const strapiFooterData = {
  ua: {
    Information: {
      title: "Інформація:",
      links: [
        {
          title: "Політика конфіденційності",
          href: "/policy"
        },
        {
          title: "Доставка та оплата",
          href: "/payment"
        },
        {
          title: "Повернення",
          href: "/return"
        },
        {
          title: "Публічний договір",
          href: "/public_contract"
        }
      ]
    },

    Контакти: {
      title: "Контакти:",
      contacts: [
        {
          title: "Телефон:",
          text: "+380 97 123 45 67"
        },
        {
          title: "Email:",
          text: "snip.solomy@gmail.com"
        }
      ]
    }
  },
  en: {
    Information: {
      title: "Information:",
      links: [
        {
          title: "Privacy Policy",
          href: "/policy"
        },
        {
          title: "Shipping and Payment",
          href: "/payment"
        },
        {
          title: "Return",
          href: "/return"
        },
        {
          title: "Public Contract",
          href: "/public_contract"
        }
      ]
    },

    Contacts: {
      title: "Contacts:",
      contacts: [
        {
          title: "Phone:",
          text: "+380 97 123 45 67"
        },
        {
          title: "Email:",
          text: "snip.solomy@gmail.com"
        }
      ]
    }
  }
};

const mockFooterData = strapiFooterData.en;

export { mockFooterData };
