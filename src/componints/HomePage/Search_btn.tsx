import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, SearchIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

function Search_btn({
  Search,
  setShowInput,
  showInput,
}: {
  Search: string;
  setShowInput: () => void;
  showInput: boolean;
}) {
  return (
    <div className="flex items-center justify-center flex-col relative">
      <Button
        onClick={() => setShowInput(!showInput)}
        className={` px-6  hover:bg-[rgb(8,54,118)] hover:shadow-[0_0_3px_rgb(0,0,28,0.5)] dark:text-amber-50 dark:hover:shadow-[inset_0_0_7px_rgb(225,225,225,0.5)] dark:hover:shadow-[inset_0_0_7px_rgb(225,225,225,0.5)]  rounded-none bg-[rgb(8,54,118)] relative after:absolute after:content-[''] after:h-0 after:w-0 ${showInput ? "after:border-t-[15px]" : "after:border-neutral-50"} after:border-x-[12px] after:border-x-transparent group group-hover:transition-all group-hover:duration-1000  after:-translate-1/2  after:border-t-[rgb(8,54,118)]  after:-bottom-[22px] after:left-1/2   `}
      >
        {Search} <SearchIcon />
      </Button>
      <Input
        type="text"
        placeholder={Search}
        className={`mt-5 ${showInput ? "block" : "hidden"} `}
      />
    </div>
  );
}

export default Search_btn;
