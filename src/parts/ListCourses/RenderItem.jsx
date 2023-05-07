import Link from "next/link";
import React from "react";

import IconPlay from "public/images/icon-play.svg";

export default function RenderItem({ item }) {

  return (
    <div className=" lg:w-1/5  pr-8 pl-4 md:w-1/3">
      <div className="item relative">
        <figure className="item-image">
            <IconPlay className="icon-play"></IconPlay>
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta">
            <h4 className="lg:text-lg md:text-sm mt-5 text-gray-900">
                {item?.name ?? "course name"}
            </h4>
            <h5 className="lg:text-sm md:text-xs text-gray-600">
                {item?.level ?? "course level"}
            </h5>
        </div>
        <Link href="/courses/[slug]" as={`/courses/${item.id}`} className="link-wrapped"></Link>
      </div>
    </div>
  );
}
