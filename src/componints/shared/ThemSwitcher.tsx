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

import React from "react";

function ThemSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
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
            <DropdownMenuLabel>
              {theme === "light" ? (
                <Sun />
              ) : theme === "dark" ? (
                <Moon />
              ) : (
                <SunMoon />
              )}
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <div className="flex w-full justify-between">
                <span>light</span>
                <Sun />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <div className="flex w-full justify-between">
                <span>Dark</span>
                <Moon />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <div className="flex w-full justify-between">
                <span>System</span>
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
