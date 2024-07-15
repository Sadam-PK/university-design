import { useState } from "react";

export default function WebMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-8 sm:px-20 relative">
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 font-bold text-gray-500">
            <li className="hover:text-emerald-600">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-emerald-600">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-emerald-600">
              <a href="/programs">Programs</a>
            </li>
            <li
              className="hover:text-emerald-600 relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <a href="/blog" className="pb-7">
                Blog
              </a>
              {isOpen && (
                <div
                  className="absolute top-11 w-28 bg-white z-50"
                  role="menu"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="py-1" role="none">
                    <a
                      href="/blog/"
                      className="block px-4 py-2 text-sm
                       text-gray-700 hover:bg-gray-100
                        hover:text-emerald-700"
                      role="menuitem"
                    >
                      Blog
                    </a>
                    <a
                      href="/blogdetails"
                      className="block px-4 py-2 text-sm text-gray-700
                       hover:bg-gray-100  hover:text-emerald-700"
                      role="menuitem"
                    >
                      Blog Details
                    </a>
                    <a
                      href="/blogdetails"
                      className="block px-4 py-2 text-sm text-gray-700
                       hover:bg-gray-100  hover:text-emerald-700"
                      role="menuitem"
                    >
                      Elements
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li className="hover:text-emerald-600">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
