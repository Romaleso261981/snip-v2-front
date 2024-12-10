import React from "react";

export default function CheckoutTotal() {
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
      <div className="flex flex-col justify-center items-center p-5">
        <button className="h-[auto] w-11/12 rounded-md bg-green-500 text-white py-1 px-3 md:w-3/5">
          Замовлення підтверджую
        </button>
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
