// import { SidebarProvider } from "@/components/ui/sidebar";
// import { AwardIcon } from "lucide-react";
// import { cookies } from "next/headers";
// import React from "react";

// function dashborLlayout({ childern }: { childern: React.ReactNode }) {
//   return (
//     <div>
//       <SidebarProvider>{childern}</SidebarProvider>
//     </div>
//   );
// }

// export default dashborLlayout;

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
