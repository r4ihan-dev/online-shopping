import { Button } from "@/components/ui/button";
import React from "react";

function FIlterPriduct({ showFilter }: { showFilter: boolean }) {
  return (
    <div
      className={` w-full h-fit grid grid-cols-6 gap-8  bg-[rgb(211,210,226)] `}
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
      {/* part of Price  */}
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
  );
}

export default FIlterPriduct;
