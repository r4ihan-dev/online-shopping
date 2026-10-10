import { AwardIcon } from "lucide-react";
import { cookies } from "next/headers";
import React from "react";

function dashborLlayout({ childern }: { childern: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>{childern}</SidebarProvider>
    </div>
  );
}

export default dashborLlayout;
