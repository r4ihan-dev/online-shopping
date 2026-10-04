import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Handshake,
  LucideLanguages,
  ShieldCheck,
  ShoppingCart,
  ShoppingCartPlus,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { features, title } from "process";
import React from "react";

function Features() {
  const t = useTranslations("homePage.features");
  const listFeatures: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      id: 2,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      id: 3,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      id: 4,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto mt-20  ">
      <h1 className="text-center font-bold text-xl">{t("subtitle")}</h1>
      <h1 className="text-center mt-4 font-bold text-3xl">{t("title")}</h1>
      <div className="grid w-full grid-cols-4 gap-5">
        {listFeatures.map((feature) => (
          <Card key={feature.id}>
            <CardHeader className="flex items-center justify-center w-full">
              <span className="inline-block items-center pt-2 px-2 w-10 h-10 rounded-full bg-red-950 text-white">
                {feature.id === 1 ? (
                  <ShieldCheck />
                ) : feature.id === 2 ? (
                  <Handshake />
                ) : feature.id === 3 ? (
                  <LucideLanguages />
                ) : (
                  <ShoppingCartPlus />
                )}
              </span>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-xl text-center">{feature.title}</h1>
              <span>{feature.description}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Features;
