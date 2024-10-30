import React from "react";
import Mencart from "./mencart/Mencart";

const Mens = ({ jackets, togolpage }) => {
  return (
    <div className="container mx-auto py-5">
      <h2 className="font-bold text-5xl text-[#3c3c3c] my-5">MEN JACKET</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {jackets.map((jacket) => {
          return (
            <Mencart key={jacket.id} jacket={jacket} togolpage={togolpage} />
          );
        })}
      </div>
    </div>
  );
};

export default Mens;
