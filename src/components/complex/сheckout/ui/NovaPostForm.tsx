import { FC, useState } from "react";

export const NovaPostForm: FC<{ branches: string[] }> = ({ branches }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="flex flex-col border border-gold rounded-md p-3 justify-between items-start mb-4">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <input className="mr-2" type="radio" checked={true} readOnly />
          <h3>Форма для Нової пошти</h3>
        </div>
        <span>Безкоштовно</span>
      </div>
      <div className="relative w-full mt-2">
        <select
          className="w-full appearance-none border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-gold"
          onChange={() => setShowInput(true)}
        >
          <option value="" disabled selected>
            Виберіть своє відділення
          </option>
          {branches.map((branch, index) =>
            <option key={index} value={branch}>
              {branch}
            </option>
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      {showInput &&
        <input
          type="text"
          className="w-full mt-2 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-gold"
          placeholder="Введіть додаткову інформацію"
        />}
    </div>
  );
};
