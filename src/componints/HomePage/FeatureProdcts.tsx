"use client";
import React, { useState } from "react";
import PriductCard from "./PriductCard";
import { Button } from "@/components/ui/button";
import Search_btn from "./Search_btn";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Categories from "./Categories";
import Filter_btn from "./Filter_btn";
import { Input } from "@/components/ui/input";

function FeatureProdcts() {
  const [showInout, setShowInput] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const t = useTranslations("homePage.products");
  const pruoductList: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Classic Trench Coat",
      price: 93.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 2,
      name: "vintage Inspired Classic",
      price: 83.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 3,
      name: "Heschel supply",
      price: 70.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 4,
      name: "Only Chack Trouser",
      price: 98.4,
      image: "/public/images/images1.jpg",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto my-9">
      <h1 className="title">{t("title")}</h1>
      <div className="w-full flex justify-between">
        <div className="flex space-x-4">
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            {t("categories.all_product")}
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            {t("categories.men")}
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            {t("categories.women")}
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            {t("categories.shoes")}
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            {t("categories.watches")}
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Search_btn
            Search={t("categories.search")}
            showInput={showInout}
            setShowInput={setShowInput}
          />
          <Filter_btn showFilter={showFilter} setfilter={setShowFilter} />
        </div>
      </div>
      {/* <div>
        <FeatureProdcts showFilter={showFilter} />
      </div> */}
      <div className="w-full">
        <Input
          type="text"
          placeholder={t("categories.search")}
          className={` py-3.5 mb-3.5 w-full mt-4 hover:outline-none hover:sadow-[0_0_6px_rgb(8,54,118)] ${showInout ? "block" : "hidden"} `}
        />
      </div>
      <div className="w-full grid grid-cols-4 mt-6 gap-4 ">
        {pruoductList.map((product) => (
          <PriductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeatureProdcts;
