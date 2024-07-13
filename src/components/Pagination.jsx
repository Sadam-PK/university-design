import React from "react";

export default function Pagination() {
  return (
    <div className="flex space-x-3 justify-center">
      <div className="cursor-pointer border px-5 py-3 w-auto
       text-gray-400 hover:text-emerald-700">
        {"<"}
      </div>
      <div className="cursor-pointer border px-5 py-3 w-auto
       text-gray-400 hover:text-emerald-700">
        1
      </div>
      <div className="cursor-pointer border px-5 py-3 w-auto
       text-gray-400 hover:text-emerald-700">
        2
      </div>
      <div className="cursor-pointer border px-5 py-3 w-auto
       text-gray-400 hover:text-emerald-700">
        {">"}
      </div>
    </div>
  );
}
