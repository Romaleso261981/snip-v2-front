"use client";

import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, label, error, options, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={name}
          {...props}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Виберіть опцію</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
