import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

import "@/app/globals.css";
import { ReactQueryProvider } from "@/lib/react-query";
import { BasketProvider } from "@/contexts/basketContext";

type Params = { locale: string };

interface LayoutProps {
  children: ReactNode;
  params: Promise<Params>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="pb-10 text-gold leading-[22.4px]">
        <BasketProvider>
          <NextIntlClientProvider messages={messages}>
            <ReactQueryProvider>
              <Header />
              {children}
              <Footer />
            </ReactQueryProvider>
          </NextIntlClientProvider>
        </BasketProvider>
      </body>
    </html>
  );
}
