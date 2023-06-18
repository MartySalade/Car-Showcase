"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./SearchManufacturer";

const SearchButton = () => (
  <button type="submit" className="z-10">
    <Image
      src={"/assets/icons/magnifying-glass.svg"}
      alt={"search button"}
      width={27}
      height={27}
      className="absolute object-contain right-2 top-3"
    />
  </button>
);

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("make", manufacturer);
    } else {
      searchParams.delete("make");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className="flex gap-4 items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="w-full flex-1 flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton />
      </div>
      <div className="w-full flex-1 flex justify-start items-center relative">
        <Image
          src="/assets/icons/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] top-[14px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="w-full h-[48px] pl-12 bg-light-white rounded-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton />
      </div>
    </form>
  );
};
