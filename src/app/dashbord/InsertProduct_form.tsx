import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

function InsertProductForm() {
  const t = useTranslations("dashbord.insertProduct");
  const locale = useLocale();
  return (
    <form action="" className="w-full grid grid-cols-2 gap-4">
      {/* input name */}
      <div className="grid gap-2">
        <Label htmlFor="name" className="font-mono">
          {t("labels.name")}
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={t("placeholder.name")}
        />
      </div>
      {/* input price */}
      <div className="relative grid gap-2 ">
        <Label htmlFor="price">{t("labels.price")}</Label>
        <Input
          type="number"
          name="price"
          id="size"
          placeholder={t("placeholder.price")}
        />
        <div
          className={`absolute ${locale === "en" ? "right-2" : "left-2"} top-1/2 pt-1 text-[10px] h-6 text-center dark:bg-[rgb(33,34,34)] bg-white`}
        >
          {locale == "en" ? "AFG" : "افغانی"}
        </div>
      </div>
      {/* input size*/}
      <div className="grid gap-2">
        <Label htmlFor="size">{t("labels.size")}</Label>
        <Input
          type="text"
          id="size"
          name="size"
          placeholder={t("placeholder.size")}
        />
      </div>
      {/* input size*/}
      <div className="grid gap-2">
        <Label htmlFor="size">{t("labels.size")}</Label>
        <Input
          type="text"
          id="size"
          name="size"
          placeholder={t("placeholder.size")}
        />
      </div>
      {/* labels colots */}
      <div className="flex gap-5 items-center">
        {/* brown */}
        <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
            <Label htmlFor="brown">{t("labels.color.brown")}</Label>
          </div>
          <Checkbox name="color" value="brown" />
        </div>
        {/* purple */}
        <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-4 h-4 flex  bg-purple-800 rounded-full"></div>
            <Label htmlFor="purple">{t("labels.color.purple")}</Label>
          </div>
          <Checkbox name="color" value="purple" />
        </div>
        {/* black */}
        {/* <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <Label htmlFor="black">{t("labels.color.black")}</Label>
          </div>
          <Checkbox name="color" value="black" />
        </div> */}
        {/* green */}
        <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <Label htmlFor="green">{t("labels.color.green")}</Label>
          </div>
          <Checkbox name="color" value="green" />
        </div>
        {/* red */}
        <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <Label htmlFor="red">{t("labels.color.red")}</Label>
          </div>
          <Checkbox name="color" value="red" />
        </div>
        <Button>Show more</Button>
      </div>
    </form>
  );
}

export default InsertProductForm;
