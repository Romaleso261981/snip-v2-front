"use client";

import { forwardRef, useState, useEffect } from "react";

interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  label: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  onInputChange: (value: string) => void;
  onChange: (value: string) => void;
  value?: string;
  loading?: boolean;
}

export const Autocomplete = forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(
  (
    {
      name,
      label,
      error,
      options,
      onInputChange,
      onChange,
      value,
      loading,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedLabel, setSelectedLabel] = useState("");

    useEffect(
      () => {
        if (!value) {
          setSelectedLabel("");
          setInputValue("");
        }
      },
      [value]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setSelectedLabel("");
      onChange("");
      onInputChange(newValue);
      setIsOpen(true);
    };

    const handleOptionClick = (optionValue: string, optionLabel: string) => {
      setSelectedLabel(optionLabel);
      setInputValue(optionLabel);
      onChange(optionValue);
      setIsOpen(false);
    };

    return (
      <div className="relative space-y-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={name}
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error
            ? "border-red-500"
            : "border-gray-300"}`}
        />
        {error &&
          <p className="text-sm text-red-500">
            {error}
          </p>}

        {isOpen &&
          (inputValue.length >= 2 || loading) &&
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {loading
              ? <div className="px-4 py-2 text-sm text-gray-500">
                  Завантаження...
                </div>
              : options.length > 0
                ? options.map(option =>
                    <div
                      key={option.value}
                      onClick={() =>
                        handleOptionClick(option.value, option.label)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                    >
                      {option.label}
                    </div>
                  )
                : <div className="px-4 py-2 text-sm text-gray-500">
                    Нічого не знайдено
                  </div>}
          </div>}
      </div>
    );
  }
);

Autocomplete.displayName = "Autocomplete";
