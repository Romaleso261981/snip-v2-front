"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const t = useTranslations("Filter");

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
          <option>
            {t("type.type")}
          </option>
          <option value="products">
            {t("type.products")}
          </option>
          <option value="sets">
            {t("type.sets")}
          </option>
        </select>

        {/* TODO: Filter Categories */}
        <select
          name="popular"
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>
            {t("categorys.title")}
          </option>
          <option value="handmade">
            {t("categorys.handmade")}
          </option>
          <option value="spiders">
            {t("categorys.spiders")}
          </option>
          <option value="popular">
            {t("categorys.popular")}
          </option>
          <option value="trending">
            {t("categorys.trending")}
          </option>
          <option value="top_rated">
            {t("categorys.top_rated")}
          </option>
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
          <option>
            {t("sort.title")}
          </option>
          <option value="desc_price">
            {t("sort.mostExpensive")}
          </option>
          <option value="asc_price">
            {t("sort.cheapest")}
          </option>
          <option value="asc_lastUpdated">
            {t("sort.newest")}
          </option>
          <option value="desc_lastUpdated">
            {t("sort.oldest")}
          </option>
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
