import React from "react";
import ThemSwitcher from "./ThemSwitcher";
import { Button } from "@/components/ui/button";
import LunguageSwitcher from "./LunguageSwitcher";
import { useTranslations } from "next-intl";
import { LogIn } from "lucide-react";

function Navbar() {
  const t = useTranslations("navbar");
  return (
    <nav className="w-full fixed shadow-sm top-0 bg-transparent backdrop-blur-sm left-0 px-8 flex  justify-between  z-50 items-center">
      <div>
        <h1 className="font-bold dark:text-[rgb(8,54,118)] ">{t("logo")}</h1>
      </div>
      <div className="felx items-center flex-none whitespace-nowrap  gap-4">
        <ThemSwitcher
          btn_light={t("btn-light")}
          dark={t("btn-dark")}
          btn_syste={t("btn-system")}
          themes={t("theme")}
        />
        <LunguageSwitcher />

        <Button className=" hover:bg-transparent bg-[rgb(8,54,118)] dark:text-white  hover:bg-[rgb(159,189,231)] hover:text-[rgb(8,54,118)] hover:border-1 hover:font-bold hover:border-[rgb(8,54,118)]">
          <LogIn size={20} className="text-white" />
          {t("btn-login")}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
