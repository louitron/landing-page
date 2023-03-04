import React from "react";

export function Card() {
  return (
    <div className="flex justify-between mx-10">
      <div>
        <div className="bg-white h-[450px] w-[325px] border rounded-md">
          <div className="h-1/2 bg-gray-400">
            <img src="" alt="" />
          </div>
          <div className="border h-1/2">
            <h1>Card Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="h-[50px] w-[325px]">
          <button type="button">Find Out more!</button>
        </div>
      </div>
      <div className="bg-red-500 h-[500px] w-[325px]"></div>
      <div className="bg-red-500 h-[500px] w-[325px]"></div>
      <div className="bg-red-500 h-[500px] w-[325px]"></div>
    </div>
  );
}
