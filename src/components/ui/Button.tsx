import React from "react";

export default function Button({ children }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="flex justify-center items-center border border-gold max-w-fit px-3 h-10 rounded-md text-center">
        {children}
      </button>
    </div>
  );
}
