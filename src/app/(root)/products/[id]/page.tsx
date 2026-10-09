import ImageCard from "@/componints/Product/Image-card";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="mt-18 w-full max-w-6xl mx-auto grid-cols-5 gap-4">
      <ImageCard />
      <div> </div>
      <div></div>
    </div>
  );
}

export default page;
