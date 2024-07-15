import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "./Menu";
import WebMenu from "./Web-Menu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div
      className="h-16 flex flex-row py-10 sm:py-0 justify-between sm:justify-center items-center
       bg-white top-0 sticky w-full z-50"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <Logo />
      <WebMenu />
      <Menu />

      {/* ----------- contact & social icons --------------- */}

      <div className="sm:flex flex-row items-center sm:visible hidden">
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
