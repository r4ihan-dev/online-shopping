import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoreCard({
  categorie,
}: {
  categorie: { title: string; desc: string; image: string };
}) {
  return (
    <Link
      href="/"
      className=" after:content-[''] transition-all duration-1000 hover:after:h-full hover:after:w-full hover:after:bg-[rgba(137,208,238,0.4)] hover:after:absolute group hover:after:left-0 hover:after:z-50 hover:after:top-0 relative "
    >
      <div className="absolute top-2 left-3 items-start w-full  text-right">
        <h1 className=" text-2xl text-[rgb(15,50,99)] text-left z-30 group-hover:text-white  font-bold">
          {categorie.title}
        </h1>
        <h1 className=" text-sm  text-[rgb(6,46,102)] group-hover:text-white  text-left">
          {categorie.desc}
        </h1>
      </div>
      <div className="absolute bottom-4  left-6 hidden group-hover:block">
        <h1 className="underline underline-offset-8 text-white ">Shop Now</h1>
      </div>
      <Image
        src={categorie.image}
        alt={categorie.title}
        className="object-cover h-96 g "
        height={1000}
        width={1000}
      />
    </Link>
  );
}

export default CategoreCard;
