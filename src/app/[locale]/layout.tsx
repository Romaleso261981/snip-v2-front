import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/app/globals.css";
import { ReactQueryProvider } from "@/lib/react-query";
import { BasketProvider } from "@/contexts/basketContext";
import { NovaPostProvider } from "@/contexts/novaPostContext";

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
        <NovaPostProvider>
          <BasketProvider>
            <NextIntlClientProvider messages={messages}>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </NextIntlClientProvider>
          </BasketProvider>
        </NovaPostProvider>
      </body>
    </html>
  );
}
