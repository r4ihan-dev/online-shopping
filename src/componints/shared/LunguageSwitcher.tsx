"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

function LunguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [panding, startTransition] = useTransition();
  function ChangeLunguage(locale: string) {
    document.cookie = `locale=${locale};pathe/;max-age=7776000`;
    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {locale === "pa" ? "بشتو" : locale === "fa" ? "دری" : "English"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Lunguage</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => ChangeLunguage("fa")}>
            دری
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => ChangeLunguage("pa")}>
            بشتو
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => ChangeLunguage("en")}>
            English
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LunguageSwitcher;
