"use client";

import Image from "next/image";
import { Card } from "@/types/apiStrapiTypes";
import { FC, useRef } from "react";

import image from "../../assets/search.png";

type SearchBarProps = {
  setCardItems: (cardItems: Card[]) => void;
  cardItems: Card[] | null;
};

const SearchBar: FC<SearchBarProps> = ({ setCardItems, cardItems }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form || !cardItems) return;

    const formData = new FormData(form);
    const name = formData.get("name") as string;

    if (name) {
      const searchedItems = cardItems.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );

      if (searchedItems) setCardItems(searchedItems);
    }

    form.reset();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(e as React.FormEvent);
    }
  };

  return (
    <form
      ref={formRef}
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md md:flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        onKeyDown={handleKeyPress}
      />
      <button type="submit" className="cursor-pointer">
        <Image src={image} alt="Search icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
