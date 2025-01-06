"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Detail } from "@/types/types";
import Reviews from "../review/Reviews";
import { productMock, reviews } from "@/mockData";

export function ProductTabs({
  className,
  product
}: {
  className: string;
  product: any;
}) {
  return (
    <Tabs defaultValue="descriptions" className={`${className}`}>
      <TabsList className="grid grid-cols-3 w-fit bg-transparent overflow-auto">
        <TabsTrigger className="w-fit lg:w-80" value="descriptions">
          Опис
        </TabsTrigger>
        <TabsTrigger className="w-fit lg:w-80" value="additionnal">
          Додаткова інформація
        </TabsTrigger>
        <TabsTrigger className="w-fit lg:w-80" value="reviews">
          Відгуки
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
          {productMock.details.map((item: Detail, idx: number) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-1 bg-transparent lg:grid-cols-2 "
              >
                <span className="w-80 font-bold text-gold text-xl capitalize">
                  {item.name}:{" "}
                </span>
                <span className="text-base font-light text-gold">
                  {item.value}
                </span>
              </div>
            );
          })}
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
