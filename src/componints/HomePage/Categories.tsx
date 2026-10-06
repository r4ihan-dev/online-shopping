import { useTranslations } from "next-intl";
import { title } from "process";
import React from "react";
import CategoreCard from "./CategoreCard";

function Categories() {
  const t = useTranslations("homePage.categories");
  const list: { id: number; title: string; desc: string; image: string }[] = [
    {
      id: 1,
      title: t("cat1.title"),
      desc: t("cat1.description"),
      image: "/public/images/images1.jpg",
    },
    {
      id: 2,
      title: t("cat2.title"),
      desc: t("cat2.description"),
      image: "/public/images/images1.jpg",
    },
    {
      id: 3,
      title: t("cat3.title"),
      desc: t("cat3.description"),
      image: "/public/images/images1.jpg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto  mt-7">
      <h1 className="title">{t("title")}</h1>
      <div className=" w-full grid grid-cols-3 mt-4 gap-4">
        {list.map((categorie) => (
          <CategoreCard key={categorie.id} categorie={categorie} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
