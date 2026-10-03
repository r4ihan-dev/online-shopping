import React from "react";
import ThemSwitcher from "./ThemSwitcher";
import { Button } from "@/components/ui/button";
import LunguageSwitcher from "./lunLuageSwitcher";

function Navbar() {
  return (
    <nav className="w-full px-8 flex flex-row bg-pink-700 justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="felx items-center justify-between flex-wrap gap-4">
        <ThemSwitcher />
        <LunguageSwitcher />

        <Button variant="secondary">Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
