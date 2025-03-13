import React, { useState } from "react";
import { ProductsData } from "./productData";

export default function FilterData() {
  const [active, setActive] = useState("all");
  const btns = ["all", "yoga", "fitness", "muscles"];
  const filterData =
    active === "all"
      ? ProductsData
      : ProductsData.filter((item) => item.category === active);
  return (
    <div className="container py-10 m-8">
      <div className="btns space-x-5 p flex justify-center">
        {btns.map((btn) => (
          <button
            onClick={() => setActive(btn)}
            className={`capitalize p-2 rounded ${
              active === btn ? "bg-primary" : "bg-gray-300"
            }`}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      p-6 gap-8
      "
      >
        {filterData.map((item) => (
          <div key={item.id} className=" p-4 rounded-lg border-2">
            <img src={item.image} alt={item.title} />
            <p className="text-lg font-bold p-2">{item.title}</p>
            <span className=" p-2 ">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
