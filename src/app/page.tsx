import Navbar from "@/componints/shared/Navbar";
import ThemSwitcher from "@/componints/shared/ThemSwitcher";
import { useTranslations } from "next-intl";
import React from "react";

function homePage() {
  const t = useTranslations("homePage");
  return (
    <div>
      <Navbar />
      {/* <ThemSwitcher /> */}
      {t("title")}
    </div>
  );
}

export default homePage;
