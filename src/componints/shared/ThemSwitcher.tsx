"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

function ThemSwitcher({
  btn_light,
  dark,
  btn_system,
}: {
  btn_light: string;
  dark: string;
  btn_syste: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mount, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mount) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {theme === "light" ? (
            <Sun />
          ) : theme === "dark" ? (
            <Moon />
          ) : (
            <SunMoon />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <div className="flex w-full justify-between">
                <span>{btn_light}</span>
                <Sun />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <div className="flex w-full justify-between">
                <span>{dark}</span>
                <Moon />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <div className="flex w-full justify-between">
                <span>{btn_system}</span>
                <SunMoon />
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ThemSwitcher;
