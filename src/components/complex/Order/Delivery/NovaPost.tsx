"use client";

import { Controller } from "react-hook-form";

import { useNovaPost } from "../hooks/useNovaPost";

import { Autocomplete } from "@/components/ui/Form/Autocomplete/Autocomplete";
import { Select } from "@/components/ui/Form/Select/Select";

import type { FC } from "react";

export const NovaPostForm: FC = () => {
  const {
    control,
    selectedCity,
    selectedWarehouse,
    cityOptions,
    warehouseOptions,
    isCitiesLoading,
    isWarehousesLoading,
    setCitySearch,
    handleSubmit,
    handleCityChange,
  } = useNovaPost();

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            name="city"
            label="Місто"
            placeholder="Введіть назву міста"
            options={cityOptions}
            onInputChange={setCitySearch}
            onChange={(newValue) => {
              onChange(newValue);
              handleCityChange(newValue);
            }}
            value={value}
            loading={isCitiesLoading}
            error={error?.message}
          />
        )}
      />

      {selectedCity && (
        <Controller
          name="warehouse"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              name="warehouse"
              label="Відділення"
              options={warehouseOptions}
              value={value}
              onChange={onChange}
              disabled={isWarehousesLoading}
              error={error?.message}
            />
          )}
        />
      )}

      <button
        type="submit"
        disabled={
          !selectedCity ||
          !selectedWarehouse ||
          isCitiesLoading ||
          isWarehousesLoading
        }
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isCitiesLoading || isWarehousesLoading
          ? "Завантаження..."
          : "Підтвердити"}
      </button>
    </form>
  );
};
