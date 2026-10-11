import React from "react";
import DashbordSidebar from "./dashbord_sidebar";
import DashbordHeader from "./dashbord_header";
import { useLabel } from "@base-ui/react/internals/labelable-provider";
import { useLocale } from "next-intl";

function page() {
  return (
    <div className="w-full flex">
      <DashbordSidebar />
      <div className="flex-1">
        <DashbordHeader />
      </div>
    </div>
  );
}

export default page;
