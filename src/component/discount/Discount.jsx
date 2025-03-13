import React from "react";

export default function Discount() {
  return (
    <div className="container py-10 my-7 text-center bg-[#f9f9f9]">
      <div className="space-y-5">
        <h2 className="uppercase font-bold text-2xl">
          Get 20% Discount On Your First Order, Are You Ready To Buy
        </h2>
        <p className="text-gray-500 ">
          We will make sure you get the right and the best quality products for
          your workout
        </p>
        <div className="space-x-5">
          <button className="primary-btn ">learn more</button>
          <button
            className="border-2 p-2 border-primary rounded-lg
          hover:bg-primary hover:text-white duration-500
          "
          >
            stay in touch
          </button>
        </div>
      </div>
    </div>
  );
}
