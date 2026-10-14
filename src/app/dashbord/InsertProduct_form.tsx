"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

function InsertProductForm() {
  const [typeProduct, setTypeProduct] = useState();
  const [moreColor, setMoreColor] = useState(false);
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
      <div>
        <label htmlFor="">{t("labels.type")}</label>
        <Select value={typeProduct} onValueChange={() => setTypeProduct}>
          <SelectTrigger className="w-full">Select Type</SelectTrigger>
          <SelectContent>
            <SelectItem value="clothe">Clothe</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="cosmiticItem">Cosmatic Items</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* man_date */}
      <div
        className={`${typeProduct == "cosmiticItem" ? "block" : "hidden"} w-full `}
      >
        <Label>{t("labels.man_date")}</Label>
      </div>
      {/* exp_date */}
      <div
        className={`${typeProduct == "cosmiticItem" ? "block" : "hidden"} w-full `}
      >
        <Label>{t("labels.exp_date")}</Label>
      </div>
      {/* <div
        className={`${typeProduct == "cosmaticItem" ? "block" : "hidden"}w-full`}
      >
        <Label>{t("labels.exp_date")}</Label>
      </div> */}

      {/* labels colors */}
      <div className="flex-wrap grid-cols-1 flex gap-5  items-center">
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
        {/* blue */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <Label htmlFor="blue">{t("labels.color.blue")}</Label>
          </div>
          <Checkbox name="color" value="blue" />
        </div>
        {/* yellow */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
            <Label htmlFor="yellow">{t("labels.color.yellow")}</Label>
          </div>
          <Checkbox name="color" value="yellow" />
        </div>
        {/* pink */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
            <Label htmlFor="pink">{t("labels.color.pink")}</Label>
          </div>
          <Checkbox name="color" value="pink" />
        </div>
        {/* white */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 border bg-white rounded-full"></div>
            <Label htmlFor="white">{t("labels.color.white")}</Label>
          </div>
          <Checkbox name="color" value="white" />
        </div>
        {/* cyan */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-cyan-600 rounded-full"></div>
            <Label htmlFor="cyan">{t("labels.color.cyan")}</Label>
          </div>
          <Checkbox name="color" value="cyan" />
        </div>
        {/* gray */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <Label htmlFor="gray">{t("labels.color.gray")}</Label>
          </div>
          <Checkbox name="color" value="gray" />
        </div>
        {/* black */}
        <div className={`${moreColor ? "flex" : "hidden"}  gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <Label htmlFor="black">{t("labels.color.black")}</Label>
          </div>
          <Checkbox name="color" value="black" />
        </div>
        {/* orange */}
        <div className={`${moreColor ? "flex" : "hidden"} gap-1 items-center`}>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
            <Label htmlFor="orange">{t("labels.color.orange")}</Label>
          </div>
          <Checkbox name="color" value="orange" />
        </div>
        <Button onClick={() => setMoreColor(!moreColor)}>
          {moreColor ? "نمایش کمتر" : "نمایش بیشتر"}
        </Button>
      </div>
    </form>
  );
}

export default InsertProductForm;
