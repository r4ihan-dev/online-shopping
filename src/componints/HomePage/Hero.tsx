import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Hero() {
  const t = useTranslations("homePage");
  return (
    <div className="w-full items-center justify-center  flex ">
      <div className=" w-full  flex items-center justify-center">
        <Image
          className="h-screen w-lvw  object-cover"
          src={"/images/images1.jpg"}
          alt="this is hero section"
          height={1000}
          width={1000}
        />
      </div>
      <div className="mt-18 flex gap-7 flex-col w-2xl absolute top-28">
        <h1 className="text-6xl font-bold text-[rgb(8,54,118)]">
          {t("hero.title")}
        </h1>
        <p className="text-red-100 text-xs">{t("hero.description")}</p>
        <div className="flex gap-5">
          <Button variant="destructive">{t("hero.btn-explore")}</Button>
          <Button className="px-7 bg-red-800 hover:bg-transparent hover:border-red-800 hover:text-red-700 transition-colors duration-300">
            {t("hero.btn-join")}
          </Button>
        </div>
      </div>
      {/* <div className="grid-cols-1 ml-24 mt-14 "></div> */}
    </div>
  );
}

export default Hero;
