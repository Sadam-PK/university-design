import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-8 relative inline-block  sm:hidden">
      <div className="flex justify-between px-8 sm:px-20 relative">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border
           border-gray-300 shadow-sm px-4 py-2 bg-white text-sm 
           font-medium text-gray-700 hover:bg-gray-50 focus:outline-none 
           focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100
            focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-4 w-40
            shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="/blog"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Blog
            </a>
            <a
              href="/blogdetails"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Blog Details
            </a>
            <a
              href="/elements"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Elements
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
