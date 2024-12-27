import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Toaster } from "@/components/ui/sonner";

import "@/app/globals.css";
import { ReactQueryProvider } from "@/lib/react-query";
import { BasketProvider } from "@/contexts/basketContext";
import { CheckOutProvider } from "@/contexts/checkOutContext";
import { CardsProvider } from "@/contexts/cardContext";
import { UserProvider } from "@/contexts/userContext";

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
            <UserProvider>
              <BasketProvider>
                <NextIntlClientProvider messages={messages}>
                  <ReactQueryProvider>
                    {children}
                    <Toaster
                      duration={3000}
                      closeButton={true}
                      position="top-center"
                    />
                  </ReactQueryProvider>
                </NextIntlClientProvider>
              </BasketProvider>
            </UserProvider>
          </CheckOutProvider>
        </CardsProvider>
      </body>
    </html>
  );
}
