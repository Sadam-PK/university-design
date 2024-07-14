import Logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-16 flex flex-row justify-center items-center
       bg-white top-0 sticky w-full z-50"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="px-16 relative">
        <nav>
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

      {/* ----------- contact & social icons --------------- */}

      <div className="flex flex-row items-center">
        <a href="#" className="text-emerald-700 font-bold">
          Call Us :
        </a>
        <span className="ml-2 mr-10">0 (78) 675 3674</span>
        <ul className="flex flex-row space-x-2 text-2xl">
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: "darkblue" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ color: "darkblue" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                style={{ color: "red" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{ color: "green" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
