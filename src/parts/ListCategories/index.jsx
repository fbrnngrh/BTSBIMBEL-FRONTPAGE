import React from "react";
import Link from "next/link";
import RenderItem from './RenderItem'

import BusinessDevelopment from "public/images/icon-business-development.svg";
import ContenWriter from "public/images/icon-content-writer.svg";
import ProductAdvertisement from "public/images/icon-product-advertisement.svg";
import CustomerRelationship from "public/images/icon-customer-relationship.svg";
import GameDevelopment from "public/images/icon-game-development.svg";
import TravelGuide from "public/images/icon-travel-guide.svg";

export default function ListCategories() {
  const data = [
    {
      imageName: <BusinessDevelopment />,
      name: "Business Development",
      total: 144,
    },
    {
      imageName: <ContenWriter />,
      name: "Conten Writer",
      total: 211,
    },
    {
      imageName: <ProductAdvertisement />,
      name: "Product Advertisement",
      total: 201,
    },
    {
      imageName: <CustomerRelationship />,
      name: "Customer Relationship",
      total: 300,
    },
    {
      imageName: <GameDevelopment />,
      name: "Game Development",
      total: 90,
    },
    {
      imageName: <TravelGuide />,
      name: "Travel Guide",
      total: 1212,
    },
  ];

  return (
    <>
      <div className="flex justify-between item-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-accent-2">
            Explore & <span className="text-secondary">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>
          })
        ) : (
          <div className="w-full text-center py-12 ">No Item Found</div>
        )}
      </div>
    </>
  );
}
