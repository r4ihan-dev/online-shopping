import { Button } from "@/components/ui/button";
import { useTransitionStatus } from "@base-ui/react/internals/useTransitionStatus";
import { useTranslations } from "next-intl";
import React from "react";

function FIlterPriduct({ showFilter }: { showFilter: boolean }) {
  const t = useTranslations("homePage.filter");
  return (
    <div
      className={` ${showFilter ? "none" : "hidden"} w-full h-fit mt-2 mb-3 grid grid-cols-6 gap-8  bg-[rgb(211,210,226)] `}
    >
      {/* sort by */}
      <div>
        <h1>Sort by</h1>
        <div className="flex flex-col items-end ">
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
      </div>
      {/* part of Price  */}
      <div>
        <h1>Price</h1>
        <div className="flex items-end flex-col gap-3">
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
      {/* /part of color */}
      <div className="flex flex-col gap-3">
        <div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <span>Black</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
          <span>Blue</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <span>Gray</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-green-700 rounded-full"></div>
          <span>Green</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-red-800 rounded-full"></div>
          <span>Red</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-400"></div>
          <span>Withe</span>
        </div>
      </div>
      {/* part of last */}
      {/* <div className="w-full flex gap-4 flex-wrap h-fit">
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer "
        >
          Fashion
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          Lifestyle
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          Hzaragi
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          Crafts
        </Badge>
      </div> */}
    </div>
  );
}

export default FIlterPriduct;
