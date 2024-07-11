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

export default function Header() {
  return (
    <div
      className="h-16 flex flex-row justify-center items-center
     bg-white top-0 sticky w-full"
    >
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="px-16">
        <nav>
          <ul className="flex space-x-6 font-bold text-gray-500">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ----------- contact & social icons --------------- */}

      <div className="flex flex-row items-center">
        <a href="#" className="text-emerald-700 font-bold">
          Call Us :
        </a>
        <span className="mr-10">0 (78) 675 3674</span>
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
