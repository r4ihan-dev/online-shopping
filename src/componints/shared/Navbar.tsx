import React from "react";
import ThemSwitcher from "./ThemSwitcher";
import { Button } from "@/components/ui/button";
import LunguageSwitcher from "./LunguageSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("navbar");
  return (
    <nav className="w-full fixed top-0 bg-transparent backdrop-blur-md left-0 px-8 flex border-b-2 border-gray-500 justify-between  items-center">
      <div>
        <h1>{t("logo")}</h1>
      </div>
      <div className="felx items-center flex-none whitespace-nowrap  gap-4">
        <ThemSwitcher
          btn_ligt={t("btn-light")}
          dark={t("btn-dark")}
          btn_system={t("btn-system")}
        />
        <LunguageSwitcher />

        <Button variant="destructive">{t("btn-login")}</Button>
      </div>
    </nav>
  );
}

export default Navbar;
