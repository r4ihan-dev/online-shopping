import { SidebarTrigger } from "@/components/ui/sidebar";
import LunguageSwitcher from "@/componints/shared/LunguageSwitcher";
import ThemSwitcher from "@/componints/shared/ThemSwitcher";
import { useTranslations } from "next-intl";
import React from "react";

function DashbordHeader() {
  const t = useTranslations();
  return (
    <div className="w-full flex-1 gap-3 px-8 py-4  justify-between  items-center">
      <div className="flex gap-3  items-center">
        <SidebarTrigger />
        <h1>{t("dashbord.header.title")}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <LunguageSwitcher />
        <ThemSwitcher
          btn_light={t("navbar.btn-light")}
          dark={t("navbar.btn-dark")}
          btn_syste={t("navbar.btn-system")}
          themes={t("navbar.theme")}
        />
      </div>
    </div>
  );
}

export default DashbordHeader;
