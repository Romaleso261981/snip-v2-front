"use client";

import Button from "@/components/ui/Button/Button";
import { CheckOutContext } from "@/contexts/checkOutContext";
import React, { useContext } from "react";

export default function CheckoutTotal() {
  const { checkOutContext } = useContext(CheckOutContext);

  const checkOutSubmit = () => {
    alert((checkOutContext?.deliveryAddress?.Present || "Виберіть місто") + " " + checkOutContext?.user.name + " " + checkOutContext?.user.surname + " " + checkOutContext?.user.phone + " " + checkOutContext?.user.email);
  };

  return (
    <div className="w-full mt-2 border shadow bg-[#f5f5f5] border-[#e9e9e9] rounded-md p-4 sm:w-2/5 md:min-w-3/12">
      <h4 className="mb-4 text-xl text-black text-900">
        <strong>Разом</strong>
      </h4>
      <div className="w-full text-black">
        <div className="flex justify-between">
          <span>1 Товар на суму</span>
          <span>48 880₴</span>
        </div>
        <div className="flex justify-between py-3">
          <span>Вартість доставки</span>
          <span className="text-sm ">
            <strong>безкоштовно</strong>
          </span>
        </div>
        <div className="flex justify-between border-y border-gold py-5">
          <span>До сплати:</span>
          <span>
            <strong>48 800₴</strong>
          </span>
        </div>
      </div>
      <div className="mt-4" onClick={checkOutSubmit}>
        <Button>Замовлення підтверджую</Button>
      </div>
      <span className="mt-3 text-black text-xs">
        Отримання замовлення від
        5&nbsp;000&nbsp;₴&nbsp;-&nbsp;30&nbsp;000&nbsp;₴ за наявності
        документів. При оплаті готівкою від&nbsp;30&nbsp;000&nbsp;₴ необхідно
        надати документи для верифікації згідно вимог Закону України
        від&nbsp;06.12.2019 №361-IX
      </span>
    </div>
  );
}
