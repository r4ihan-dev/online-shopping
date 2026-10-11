// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";
// import {
//   LayoutDashboard,
//   LogOut,
//   MessageCircle,
//   ShoppingBag,
//   ShoppingCart,
//   ShoppingCartPlus,
// } from "lucide-react";
// import { useTranslations } from "next-intl";
// import { cookies } from "next/headers";
// import Link from "next/link";
// import React from "react";

// async function DashbordSidebar() {
//   const cookiesINF = await cookies();
//   const loccale = cookiesINF.get("locale")?.value || "fa";

//   return (
//     <Sidebar side={loccale === "en" ? "left" : "right"}>
//       <SidebarHeader>
//         <div className="w-full flex gap-1.5 py-4">
//           <LayoutDashboard />
//           <span>Dashbord</span>
//         </div>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel> Products </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <SidebarMenuButton>
//                 <ShoppingCart />
//                 All Priducts
//               </SidebarMenuButton>
//             </SidebarMenu>
//             <SidebarMenu>
//               <SidebarMenuButton>
//                 <ShoppingCartPlus />
//                 Add Products
//               </SidebarMenuButton>
//             </SidebarMenu>
//             <SidebarMenu>
//               <Link href="/">
//                 <SidebarMenuButton>Manage Products</SidebarMenuButton>
//               </Link>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//         <SidebarGroup>
//           <SidebarGroupLabel>Fedbacks</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <Link href="/">
//                 <SidebarMenuButton>
//                   <MessageCircle />
//                   Manage Feadback
//                 </SidebarMenuButton>
//               </Link>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <div className="w-fullflex justify-between">
//           <div className="grid gap-2 text-xs items-center">
//             <span>raihan</span>
//             <span className="hover:underline">lady.raihan@gmail.com</span>
//           </div>
//           <LogOut />
//         </div>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

// export default DashbordSidebar;

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  LogOut,
  MessageCircle,
  ShoppingCart,
  ShoppingCartPlus,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { cookies } from "next/headers";
import Link from "next/link";

async function DashboardSidebar() {
  const t = await getTranslations("dashbord.sidebar");
  const cookiesINF = await cookies();
  const locale = cookiesINF.get("locale")?.value || "fa";

  return (
    <Sidebar side={locale === "en" ? "left" : "right"}>
      <SidebarHeader>
        <div className="flex w-full gap-1.5 py-4">
          <LayoutDashboard />
          <span>{t("title")}</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>main</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <Link href={"/dashbord"}>
                <SidebarMenuButton>
                  <LayoutDashboard /> {t("title")}
                </SidebarMenuButton>
              </Link>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>{t("Product.title")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton>
                <Link href="/products">
                  <ShoppingCart />
                  <span>{t("Product.all")}</span>
                </Link>
              </SidebarMenuButton>
              <Link href="/dashbord/InsertProduct">
                <SidebarMenu>
                  <SidebarMenuButton>
                    <ShoppingCartPlus />
                    <span>{t("Product.insert")}</span>
                  </SidebarMenuButton>
                </SidebarMenu>
              </Link>
              <SidebarMenuButton>
                <Link href="/products/manage">
                  <ShoppingCart />
                  <span>{t("Product.Manage")}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{t("feedback.title")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton>
                <Link href="/feedback">
                  <MessageCircle />
                  <span>{t("feedback.Manage")}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex w-full justify-between">
          <div className="grid items-center gap-2 text-xs">
            <span>raihan</span>
            <span className="hover:underline">lady.raihan@gmail.com</span>
          </div>
          <LogOut />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default DashboardSidebar;
