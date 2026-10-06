import Categories from "@/componints/HomePage/Categories";
import FeatureProdcts from "@/componints/HomePage/FeatureProdcts";
import Features from "@/componints/HomePage/Features";
import Hero from "@/componints/HomePage/Hero";
import Navbar from "@/componints/shared/Navbar";
import ThemSwitcher from "@/componints/shared/ThemSwitcher";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Home",
};
import React from "react";

function homePage() {
  const t = useTranslations("homePage");
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <FeatureProdcts />
    </div>
  );
}

export default homePage;
