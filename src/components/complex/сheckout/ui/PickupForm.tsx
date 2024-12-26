"use client";

import { FC, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { toast } from "sonner";

const avalebleAddresses = [
  "Київ вул. Хрещатик 1",
  "Київ вул. Хрещатик 1",
  "Одеса вул. Дерибасівська 1",
  "Херсон"
];

export const PickupForm: FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>(
    "Виберіть адресу"
  );
  const [accordionValue, setAccordionValue] = useState<string>("");

  const handlePickup = (title: string) => {
    setSelectedAddress(title);
    setAccordionValue("");
    toast("Місто вибране");
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <input className="mr-2" type="radio" checked={true} readOnly />
          <h3>Форма для Самовивозу</h3>
        </div>

        <span>Безкоштовно</span>
      </div>
      <Accordion
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={setAccordionValue}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {selectedAddress}
          </AccordionTrigger>
          {avalebleAddresses.map((address, index) =>
            <AccordionContent
              key={index}
              className="text-sm cursor-pointer"
              onClick={() => handlePickup(address)}
            >
              {address}
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
