import Navbar from "@/componints/shared/Navbar";
import React from "react";

function RootLayout({ children }: { chldren: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
