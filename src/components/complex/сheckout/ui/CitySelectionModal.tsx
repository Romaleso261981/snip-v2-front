"use client";

import React, { FC, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { FaTruck, FaTimes } from "react-icons/fa";
import { CityAddress, novaPostService } from "@/api/novaPost";

type CitySelectionModalProps = {
  toggleShowCitySelectionModal: () => void;
  setdeliveryAddress: (city: CityAddress) => void;
};

const CitySelectionModal: FC<CitySelectionModalProps> = ({
  toggleShowCitySelectionModal,
  setdeliveryAddress
}) => {
  const [cityName, setCityName] = useState<string>("");
  const [addresses, setAddresses] = useState<CityAddress[]>([]);
  const [currentСity, setСurrentСity] = useState<CityAddress | null>(null);

  const handleSearchDebounced = useRef(
    debounce(async (name: string) => {
      if (!name.trim()) return;
      try {
        const data = await novaPostService.searchCities(name);
        setAddresses(data[0].Addresses || []);
      } catch (error) {
        console.error("Error searching cities:", error);
      }
    }, 500)
  ).current;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityName(value);
    handleSearchDebounced(value);
  };

  const applyCitySelection = () => {
    if (currentСity) {
      setdeliveryAddress(currentСity);

      toggleShowCitySelectionModal();
    } else {
      alert("Будь ласка, оберіть місто перед застосуванням.");
    }
  };

  const handleСurrentСity = (city: CityAddress) => {
    setСurrentСity(city);
    setCityName(city.Present);
  };

  const favoritesCityList = [
    "Київ",
    "Львів",
    "Одеса",
    "Харків",
    "Дніпро",
    "Запоріжжя"
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 h-11/12 md:w-[700px] md:h-[500px] flex flex-col justify-between relative">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 bg-transparent p-2 rounded-full"
          onClick={toggleShowCitySelectionModal}
        >
          <FaTimes size={20} color={"#9F8652"} />
        </button>
        <div>
          <h2 className="text-xl font-bold mb-4 border-b border-gold pb-2">
            Виберіть своє місто
          </h2>
          <p className="flex items-center">
            <FaTruck className="mr-2" />
            Доставляємо замовлення по всій Україні!
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {favoritesCityList.map(city =>
              <button
                key={city}
                className={`bg-blue-500 text-gold py-2 px-4 rounded-lg hover:border-gold ${cityName ===
                city
                  ? "border-2 border-gold"
                  : ""}`}
                onClick={() => handleSearchDebounced(city)}
              >
                {city}
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-lg font-medium" htmlFor="city-input">
              Вкажіть населений пункт України
            </label>
            <input
              id="city-input"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Введіть назву міста"
              value={cityName}
              onChange={handleSearchInputChange}
            />
            {addresses.length > 0
              ? <ul className="mt-2 max-h-[200px] overflow-y-auto border border-gray-300 rounded">
                  {addresses.map((address, index) =>
                    <li
                      key={index}
                      className="text-gray-700 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleСurrentСity(address)}
                    >
                      {address.Present}
                    </li>
                  )}
                </ul>
              : <p className="text-gray-500 text-sm">
                  Місто не знайдено. Спробуйте іншу назву.
                </p>}
            <div className="flex justify-end mt-2">
              <button
                className="bg-gold text-white py-2 px-4 rounded-lg mt-10"
                onClick={applyCitySelection}
              >
                Застосувати
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-4">
          Вибір міста допоможе надати актуальну інформацію про наявність товару,
          його ціни та методів доставки у вашому місті! Це допоможе зберегти
          більше вільного часу для вас!
        </p>
      </div>
    </div>
  );
};

export default CitySelectionModal;
