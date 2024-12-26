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
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        {/* TODO: Filter Categories */}
        <select
          name="popular"
          className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="new">New Arival</option>
          <option value="popular">Popular</option>
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
          <option>Sort By</option>
          <option value="asc_price">Price (low to high)</option>
          <option value="desc_price">Price (high to low)</option>
          <option value="asc_lastUpdated">Newest</option>
          <option value="desc_lastUpdated">Oldest</option>
        </select>
      </div>

      <div className="flex flex-row justify-start mt-5 sm:mt-0 gap-6 sm:items-center">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-sm h-8 bg-white pl-2 w-24 ring-1"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-sm h-8 bg-white px-2 w-24 ring-1 border-none"
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
