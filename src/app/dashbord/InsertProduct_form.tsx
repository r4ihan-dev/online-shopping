import { Input } from "@/components/ui/input";
import { useLocale } from "next-intl";
import React from "react";

function InsertProductForm() {
  const locale = useLocale();
  return (
    <form action="" className="w-full grid grid-cols-2 gap-4">
      <Input type="text" name="name" placeholder="Product name" />
      <div className="relative ">
        <Input type="number" name="price" placeholder="price" />
        <div
          className={`absolute ${locale === "en" ? "right-2" : "left-2"} top-2 pt-1 text-[10px] h-6 text-center dark:bg-[rgb(33,34,34)] bg-white`}
        >
          {locale == "en" ? "AFG" : "افغانی"}
        </div>
      </div>
    </form>
  );
}

export default InsertProductForm;
