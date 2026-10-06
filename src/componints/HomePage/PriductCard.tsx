// import React from "react";

// function PriductCard({product}: {categorie: { title: string; desc: string; image: string };}) {
//   return <div>PriductCard</div>;
// }

// export default PriductCard;
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import React from "react";

function PriductCard({
  product,
}: {
  product: { name: string; price: number; image: string };
}) {
  return (
    <Card className="p-0  ">
      <CardHeader className="p-0 relative group">
        <Image
          src={product.image}
          alt={product.name}
          height={800}
          width={800}
          className="object-cover h-80"
        />
        <div className="absolute dark:text-[rgb(8,54,118)] left-20 z-50 bottom-4 p-4 bg-white rounded-full hidden group-hover:block transition-all duration-1000">
          Quick View
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 m-0">
        <h1 className="font-bold text-[rgb(8,54,118)] ">{product.name}</h1>
        <span>{product.price}</span>
      </CardContent>
    </Card>
  );
}
export default PriductCard;
