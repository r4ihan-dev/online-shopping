import React from "react";
import PriductCard from "./PriductCard";
import { Button } from "@/components/ui/button";

function FeatureProdcts() {
  const pruoductList: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Classic Trench Coat",
      price: 93.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 2,
      name: "vintage Inspired Classic",
      price: 83.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 3,
      name: "Heschel supply",
      price: 70.4,
      image: "/public/images/images1.jpg",
    },
    {
      id: 4,
      name: "Only Chack Trouser",
      price: 98.4,
      image: "/public/images/images1.jpg",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto my-9">
      <h1 className="title">Featured Prodcts</h1>
      <div className="w-full flex justify-between">
        <div className="flex space-x-4">
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            All Prodcuct
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            Men
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            Women
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            Shoes
          </Button>
          <Button variant="link" className="text-[rgb(8,54,118)] font-bold">
            Watches
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 mt-6 gap-4 ">
        {pruoductList.map((product) => (
          <PriductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeatureProdcts;
