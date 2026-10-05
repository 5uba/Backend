import React from "react";
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";

function AllSports() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">All Sports</h1>

      <div className="grid grid-cols-3 gap-6">
        <img src={men1} className="h-64 w-full object-cover" />
        <img src={men2} className="h-64 w-full object-cover" />
        <img src={men3} className="h-64 w-full object-cover" />

        <img src={women1} className="h-64 w-full object-cover" />
        <img src={women2} className="h-64 w-full object-cover" />
        <img src={women3} className="h-64 w-full object-cover" />

        <img src={kid1} className="h-64 w-full object-cover" />
        <img src={kid2} className="h-64 w-full object-cover" />
        <img src={kid3} className="h-64 w-full object-cover" />
      </div>
    </div>
  );
}

export default AllSports;