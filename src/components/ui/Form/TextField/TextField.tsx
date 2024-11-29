"use client";

import { forwardRef } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
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
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";
