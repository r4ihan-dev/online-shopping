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
        <h1>{t("sort_by.title")}</h1>
        <div className="flex flex-col items-end ">
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            {t("sort_by.default")}
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            {t("sort_by.popularity")}
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            {t("sort_by.newness")}
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            {t("sort_by.price_low_to_high")}
          </Button>
          <Button className="hover:text-[rgb(8,54,118)] " variant="link">
            {t("sort_by.price_high_to_low")}
          </Button>
        </div>
      </div>
      {/* part of Price  */}
      <div>
        <h1>{t("price.title")}</h1>
        <div className="flex items-end flex-col gap-3">
          <Button className="hover:text-[rgb(8,54,118)]" variant="link">
            {t("price.all")}
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
            {t("price.more_than_2000")}
          </Button>
        </div>
      </div>
      {/* /part of color */}
      <div className="flex flex-col gap-3">
        <div>
          <h1>{t("colors.title")}</h1>
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <span>{t("colors.black")}</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
          <span>{t("colors.blue")}</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <span>{t("colors.gray")}</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-green-700 rounded-full"></div>
          <span>{"colors.green"}</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-red-800 rounded-full"></div>
          <span>{t("colors.red")}</span>
        </div>
        <div>
          <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-400"></div>
          <span>{t("colors.white")}</span>
        </div>
      </div>
      {/* part of last */}
      {/* <div className="w-full flex gap-4 flex-wrap h-fit">
        <h1>{t("brands.title")}</h1>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer "
        >
          {t("brands.fashion")}
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          {t("brands.lifestylie")}
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          {t("brands.hazaragi")}
        </Badge>
        <Badge
          variant="autline"
          className="p-2 hover:border-[rgb(8,54,118)] cursor-pointer"
        >
          {t("brands.crafts")}
        </Badge>
      </div> */}
    </div>
  );
}

export default FIlterPriduct;
