import {
  LayoutDashboard,
  LogOut,
  MessageCircle,
  ShoppingBag,
  ShoppingCart,
  ShoppingCartPlus,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function DashbordSidebar() {
  const t = useTranslations("dashbord");
  const cookiesINF = await cookies();
  const loccale = cookiesINF.get("locale")?.value || "fa";
  return;
  <Sidebar side={loccale === "en" ? "left" : "right"}>
    <SidebarHeader>
      <div className="w-full flex gap-1.5 py-4">
        <LayoutDashboard />
        <span>Dashbord</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidbarGroupLabel> Products </SidbarGroupLabel>
        <SidebarGroupContent>
          <sidebarMenu>
            <SidbarMenuButton>
              <ShoppingCart />
              All Priducts
            </SidbarMenuButton>
          </sidebarMenu>
          <sidebarMenu>
            <SidbarMenuButton>
              <ShoppingCartPlus />
              Add Products
            </SidbarMenuButton>
          </sidebarMenu>
          <sidebarMenu>
            <Link href="/">
              <SidbarMenuButton>Manage Products</SidbarMenuButton>
            </Link>
          </sidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Fedbacks</SidebarGroupLabel>
        <sidebarGroupContent>
          <sidebarMenu>
            <Link href="/">
              <SidbarMenuButton>
                <MessageCircle />
                Manage Feadback
              </SidbarMenuButton>
            </Link>
          </sidebarMenu>
        </sidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <div className="w-fullflex justify-between">
        <div className="grid gap-2 text-xs items-center">
          <span>raihan</span>
          <span className="hover:underline">lady.raihan@gmail.com</span>
        </div>
        <LogOut />
      </div>
    </SidebarFooter>
  </Sidebar>;
}

export default DashbordSidebar;
