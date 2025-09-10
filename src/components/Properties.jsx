import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const Properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      title: "Modern Villa",
      location: "Kathmandu,Nepal",
      price: "$250000",
    },

    {
      id: 2,
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
      title: "Luxury Appartment",
      location: "Pokhara,Nepal",
      price: "$150000",
    },

    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Family House",
      location: "Lalitpur,Nepal",
      price: "$200000",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="pt-25 ">
        <h1 className="text-4xl  font-bold text-center text-blue-600 hover:text-blue-800 underline cursor-pointer -mt-22 md:mb-14 md:-mt-12  ">
          Properties
        </h1>
      </div>
      <div className=" mt-8 grid md:grid-cols-3 gap-8 md:mb-2">
        {Properties.map((p) => (
          <PropertyCard key={p.id} {...p} />
        ))}
      </div>
      </div>
    
  );
};
export default Properties;
