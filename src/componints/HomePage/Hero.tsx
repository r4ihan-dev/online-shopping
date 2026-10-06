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
        <p className=" text-xs hover:text-[rgb(8,54,118)]">
          {t("hero.description")}
        </p>
        <div className="flex gap-5">
          <Button className="dark:text-white bg-[rgb(8,54,118)] hover:bg-[rgb(159,189,231)] hover:text-[rgb(8,54,118)] hover:border-1 hover:font-bold hover:border-[rgb(8,54,118)]">
            {t("hero.btn-explore")}
          </Button>
          <Button className="px-7  dark:text-white  hover:bg-transparent bg-[rgb(8,54,118)] hover:bg-[rgb(159,189,231)] hover:text-[rgb(8,54,118)] hover:border-1 hover:font-bold hover:border-[rgb(8,54,118)] transition-colors duration-300">
            {t("hero.btn-join")}
          </Button>
        </div>
      </div>
      {/* <div className="grid-cols-1 ml-24 mt-14 "></div> */}
    </div>
  );
}

export default Hero;
