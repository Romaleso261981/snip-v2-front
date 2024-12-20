import { FC } from "react";

export const PickupForm: FC = () =>
  <div className="flex flex-row justify-between items-center w-full">
    <div className="flex flex-row items-center">
      <input className="mr-2" type="radio" checked={true} readOnly />
      <h3>Форма для Самовивозу</h3>
    </div>
    <span>Безкоштовно</span>
  </div>;
