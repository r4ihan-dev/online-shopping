import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

function LunguageSwitcher() {
  function ChangeLunguage(locale: string) {
    document.cookie = `locale=${locale};pathe/;max-age=3`;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Lunguage</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Lunguage</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => ChangeLunguage("fa")}>
            Dari
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => ChangeLunguage("pa")}>
            Pashto
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
