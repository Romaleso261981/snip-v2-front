"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="my-5 flex flex-col justify-start items-start sm:justify-between sm:items-center sm:flex-row">
      <div className="flex h-auto gap-6 flex-wrap sm:h-8">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Тип</option>
          <option value="products">Готові вироби</option>
          <option value="sets">Набори</option>
        </select>

        {/* TODO: Filter Categories */}
        <select
          name="popular"
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Категорії</option>
          <option value="handmade">Ручна робота</option>
          <option value="popular">Найпоширены</option>
          <option value="trending">Трендові</option>
          <option value="top_rated">Топ продажу</option>
        </select>
        <select
          name="category"
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
        <select
          name="sort"
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Сортування</option>
          <option value="asc_price">
            По вартості (від меншого до більшого)
          </option>
          <option value="desc_price">
            По вартості (від більшого до меншого)
          </option>
          <option value="asc_lastUpdated">Найновіші</option>
          <option value="desc_lastUpdated">Найстаріші</option>
        </select>
      </div>

      <div className="flex flex-row justify-start mt-5 sm:mt-0 gap-6 sm:items-center">
        <input
          type="text"
          name="min"
          placeholder="мін ціна"
          className="text-xs rounded-sm h-8 bg-white pl-2 w-24 ring-1"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="макс ціна"
          className="text-xs rounded-sm h-8 bg-white px-2 w-24 ring-1 border-none"
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
