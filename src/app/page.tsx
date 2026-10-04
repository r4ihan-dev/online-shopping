import Features from "@/componints/HomePage/Features";
import Hero from "@/componints/HomePage/Hero";
import Navbar from "@/componints/shared/Navbar";
import ThemSwitcher from "@/componints/shared/ThemSwitcher";
import { useTranslations } from "next-intl";
import React from "react";

function homePage() {
  const t = useTranslations("homePage");
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default homePage;
