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
        className={`${!showInout ? <Moon /> : <SearchIcon />} px-6  hover:bg-[rgb(8,54,118)] rounded-none bg-[rgb(8,54,118)] relative after:absolute after:content-[''] after:h-0 after:w-0 after:border-x-[12px] after:border-x-transparent group group-hover:transition-all group-hover:duration-1000  after:-translate-1/2 after:border-t-[15px] hover:after:border-t-[rgb(8,54,118)]  after:-bottom-[22px] after:left-1/2   `}
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
