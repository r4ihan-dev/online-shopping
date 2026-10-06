"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideLanguages } from "lucide-react";
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
        <LucideLanguages size={16} className="dark:text-[rgb(8,54,118)] " />
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
