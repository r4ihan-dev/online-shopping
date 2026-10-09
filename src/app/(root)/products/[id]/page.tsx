import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ImageCard from "@/componints/Product/Image-card";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="mt-18 w-full gap-5 max-w-6xl mx-auto grid grid-cols-6 ">
      <ImageCard />
      <div className="col-span-3">
        <h1 className="title">Watches</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum est
          blanditiis quidem labore ex facere provident, voluptate error, iure at
          repellendus ipsum! Nihil quaerat minus cum natus facere deserunt
          ipsum?
        </p>
      </div>
      <Card className="h-fit  shadow-[0_0_6px_rgb(8,54,118)]">
        <CardHeader>Reting</CardHeader>
        <CardContent>
          <div className="w-full flex justify-between">
            <span>Overall Reting</span>
            <span className="bg-w">9.8</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
