"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageCard() {
  const listImage = ["images1.jpg", "images2.jpg", "images3.jpg"];
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full flex gap-3 flex-col col-span-2">
      <Image
        src={`/images/${listImage[index]}`}
        alt="number one"
        height={1000}
        width={1000}
        className="w-full  h-[340px] object-cover rounded-lg "
      />
      <div className="grid grid-cols-2 gap-3 ">
        {listImage.map((image, index) => (
          <Image
            key={index}
            onClick={() => setIndex(index)}
            src={`/images/${image}`}
            alt="number one"
            height={1000}
            width={1000}
            className="w-full h-48 object-cover rounded-2xl hover:cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
