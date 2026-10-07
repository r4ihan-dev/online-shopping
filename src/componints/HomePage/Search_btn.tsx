"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, SearchIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

function Search_btn({ Search }: { Search: string }) {
  const [showInout, setShowInput] = useState(false);
  return (
    <div className="flex items-center justify-center flex-col relative">
      <Button
        onClick={() => setShowInput(!showInout)}
        className={`${!showInout ? <Moon /> : <SearchIcon />} px-6   rounded-none bg-[rgb(8,54,118)] relative after:absolute after:content-[''] after:h-0 after:w-0 after:border-x-[12px] after:border-x-transparent after:-translate-1/2 after:border-t-[15px] after:border-t-blue-500  after:-bottom-5 after:left-1/2   `}
      >
        {Search} <SearchIcon />
      </Button>
      <Input
        type="text"
        placeholder={Search}
        className={`mt-5 ${showInout ? "block" : "hidden"} `}
      />
    </div>
  );
}

export default Search_btn;
