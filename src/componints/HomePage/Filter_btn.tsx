"use client";

import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import React, { useState } from "react";

function Filter_btn({
  showFilter,
  setShowFilter,
}: {
  setShowFilter: () => void;
  showFilter: boolean;
}) {
  return (
    <div>
      <Button
        onClick={() => setShowFilter(!showFilter)}
        className={` px-6  hover:bg-[rgb(8,54,118)] hover:shadow-[0_0_3px_rgb(0,0,28,0.5)] dark:text-amber-50 dark:hover:shadow-[inset_0_0_7px_rgb(225,225,225,0.5)] dark:hover:shadow-[inset_0_0_7px_rgb(225,225,225,0.5)] rounded-none bg-[rgb(8,54,118)] relative after:absolute after:content-[''] after:h-0 after:w-0 ${showFilter ? "after:border-t-[15px]" : "after:border-neutral-50"} after:border-x-[12px] after:border-x-transparent group group-hover:transition-all group-hover:duration-1000  after:-translate-1/2  after:border-t-[rgb(8,54,118)]    after:-bottom-[22px] after:left-1/2   `}
      >
        <ListFilter /> Filter
      </Button>
      <div
        className={`w-full h-fit grid grid-cols-6 gap-8  bg-[rgb(166,165,245)] `}
      >
        {/* sort by */}
        <div className="flex flex-col items-end ">
          <h1>Sort by</h1>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            Default
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            Popularuty
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            Newness
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            PRICE:Low to High
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            PRICE:High to Low
          </Button>
        </div>
        {/*  */}
        <div className="flex items-end flex-col grid-cols-2">
          <h1>Price</h1>
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            All
          </Button>
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            300-500
          </Button>
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            500-1000
          </Button>
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            1000-2000
          </Button>
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            More then 2000
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filter_btn;
