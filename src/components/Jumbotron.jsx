import React from "react";

export function Jumbotron() {
  return (
    <div className="h-96 bg-gray-300 my-10 mx-10 justify-start items-center">
      <div className="mt-12">
        <h1 className="text-5xl pt-20">A Warm Welcome!</h1>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="mt-4">
        <button
          className="className=bg-blue-50 bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Call to action!
        </button>
      </div>
    </div>
  );
}
