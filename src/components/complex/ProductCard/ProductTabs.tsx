"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Reviews from "../review/Reviews";
import { reviews } from "@/mockData";
import { useTranslations } from "next-intl";

export function ProductTabs({
  className,
  product
}: {
  className: string;
  product: any;
}) {
  const t = useTranslations("ProductCard");

  console.log("product", product);

  return (
    <Tabs defaultValue="descriptions" className={`${className}`}>
      <TabsList className="grid grid-cols-3 w-fit bg-transparent overflow-auto">
        <TabsTrigger className="w-auto lg:w-80" value="descriptions">
          {t("tabs.description")}
        </TabsTrigger>
        <TabsTrigger className="w-auto lg:w-80" value="additionnal">
          {t("tabs.additionally")}
        </TabsTrigger>
        <TabsTrigger className="w-auto lg:w-80" value="reviews">
          {t("tabs.reviews")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="descriptions">
        <Card className="bg-transparent">
          <CardContent className=" p-4">
            <p className="text-pretty ">
              {product.includes}
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="additionnal">
        <Card className="p-10 bg-transparent flex flex-col gap-4">
          <div className="grid grid-cols-1 bg-transparent lg:grid-cols-2 ">
            <span className="w-80 font-bold text-gold text-xl capitalize">
              {t("tabs.material")}
            </span>
            <span className="text-sm font-light text-black">
              {product.material}
            </span>
          </div>
          <div className="grid grid-cols-1 bg-transparent lg:grid-cols-2 ">
            <span className="w-80 font-bold text-gold text-xl capitalize">
              {t("tabs.size")}
            </span>
            <span className="text-sm font-light text-black">
              {product.size}
            </span>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="reviews">
        <Card className="bg-transparent">
          <CardContent className="p-8 ">
            <Reviews reviews={reviews} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
