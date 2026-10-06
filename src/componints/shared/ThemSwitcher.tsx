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
  themes,
}: {
  btn_light: string;
  dark: string;
  btn_syste: string;
  themes: string;
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
            <Sun size={16} />
          ) : theme === "dark" ? (
            <Moon size={16} />
          ) : (
            <SunMoon size={16} />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>{themes}</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <div className="flex w-full justify-between">
                <span>{btn_light}</span>
                <Sun size={16} />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <div className="flex w-full justify-between">
                <span>{dark}</span>
                <Moon size={16} />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <div className="flex w-full justify-between">
                <span>{btn_system}</span>
                <SunMoon size={16} />
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ThemSwitcher;
