"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    // {
    //   name: "Travel",
    //   url: "/travel",
    // },
    // {
    //   name: "Sign In",
    //   url: "/login",
    // },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div
        className="bg-amber-300 rounded-lg p-3 text-2xl font-bold cursor-pointer"
        onClick={() => router.push("?genre=popular")}
      >
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          value={keyword}
          placeholder="Arama yapınız..."
          className="outline-none flex-1 bg-transparent"
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={searchFunc}
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp></ThemeComp>
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i}></MenuItem>
      ))}
    </div>
  );
};

export default Header;
