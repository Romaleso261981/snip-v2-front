import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/app/globals.css";
import { ReactQueryProvider } from "@/lib/react-query";
import { BasketProvider } from "@/contexts/basketContext";
import { CheckOutProvider } from "@/contexts/checkOutContext";
import { CardsProvider } from "@/contexts/cardContext";

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
      <body>
        <CardsProvider>
          <CheckOutProvider>
            <BasketProvider>
              <NextIntlClientProvider messages={messages}>
                <ReactQueryProvider>
                  {children}
                </ReactQueryProvider>
              </NextIntlClientProvider>
            </BasketProvider>
          </CheckOutProvider>
        </CardsProvider>
      </body>
    </html>
  );
}
