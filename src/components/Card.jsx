import React from "react";

export function Card({ title, bio, imageURL }) {
  return (
    <div className="hover:scale-105 mx-4 my-5 ">
      <div className="bg-white h-[450px] w-[325px] border rounded-t-lg">
        <div className=" h-1/2 bg-gray-400 rounded-t-lg">
          <img
            className=" h-full w-full object-cover rounded-t-md"
            src={imageURL}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start text-center h-1/2">
          <h1 className="bg-white text-3xl my-5">{title}</h1>
          <p className="bg-white text-xl">{bio}</p>
        </div>
      </div>
      <div className=" bg-white flex h-[50px] w-[325px] justify-center border-x border-b rounded-b-lg">
        <button
          className="mx-4 bg-blue-700 text-white font-bold my-2 px-4 rounded"
          type="button"
        >
          Find Out more!
        </button>
      </div>
    </div>
  );
}
