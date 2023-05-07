import React from "react";
import Link from "next/link";

import formatThousand from "@/src/helpers/formatThousand";

export default function RenderItem({ item }) {
  return (
    <div className=" w-1/6  px-3 h-100 ">
      <div className="card relative transition-all duration-300">
        {item.imageName}
        <div className="card-meta mt-18">
          <h4 className="lg:text-lg md:text-md sm:text-sm mt-10 transition-all duration-200 w-1/2">
            {item.name}
          </h4>
          <h5 className="text-sm transtion-all mt-2 duration-500">
            {formatThousand(item.total)} Courses
          </h5>
        </div>
        <Link href="#" className="link-wrapped"></Link>
      </div>
    </div>
  );
}
