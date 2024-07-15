import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import universityLogo from "../assets/logo_footer.webp";
import sendButton from "../assets/Icon-send.svg";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-gray-700 flex flex-col items-center p-3 py-20 sm:px-32">
      <div className="grid sm:grid-cols-12 gap-2 text-gray-300 py-5 border-b border-gray-500">

        <div className="col-span-3">
          <img src={universityLogo} alt="" />
        </div>

        <div className="col-span-2 leading-10 pb-10">
          <h4 className="text-white font-bold pb-3">Quick Links</h4>
          <ul className="">
            <li>Work</li>
            <li>Services</li>
            <li>Products</li>
            <li>Tips & Tricks</li>
          </ul>
        </div>

        <div className="col-span-2 leading-10 pb-10">
          <h4 className="text-white font-bold pb-3">Programs</h4>
          <ul>
            <li>Air freight</li>
            <li>Ocean freight</li>
            <li>Large projects</li>
          </ul>
        </div>

        <div className="col-span-2 leading-10 pb-10">
          <h4 className="text-white font-bold pb-3">Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Submit Tickets</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* ---------newsletter ---------- */}
        <div className="col-span-3 flex flex-col pb-5">
          <div>
            <h4 className="pb-3 text-white font-bold leading-10">Newsletter</h4>
            <p className="py-4">Subscribe newsletter to get updates.</p>
          </div>

          <div className="flex flex-row items-center bg-emerald-700">
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 w-full"
              />
            </div>
            <div className="w-20 flex sm:flex-row justify-center">
              <button>
                <img src={sendButton} alt="send button" className="" />
              </button>
            </div>
          </div>
          <div className="text-white">
            <ul className="flex flex-row space-x-5 py-5">
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -------copyright section-------- */}

      <div
        className=" flex  sm:flex-col
         py-8 text-center"
      >
        <p className="text-gray-300 pt-8">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <FontAwesomeIcon icon={faHeart} className="text-emerald-700" /> by{" "}
          <a href="#" className="text-emerald-600">
            Colorlib
          </a>
        </p>
      </div>
    </div>
  );
}
