import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import universityLogo from "../assets/logo_footer.webp";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

export default function Footer() {
  return (
    <div
      className="bg-gray-600  flex flex-col items-center py-20"
      style={{ height: 503 }}
    >
      <div className="grid grid-cols-12 gap-24 text-gray-300">
        <div className="col-span-3">
          <img src={universityLogo} alt="" />
        </div>
        <div className="col-span-2 ">
          <h4>Quick Links</h4>
          <ul className="">
            <li>Work</li>
            <li>Services</li>
            <li>Products</li>
            <li>Tips & Tricks</li>
          </ul>
        </div>
        <div className="col-span-2 ">
          <h4>Programs</h4>
          <ul>
            <li>Air freight</li>
            <li>Ocean freight</li>
            <li>Large projects</li>
          </ul>
        </div>
        <div className="col-span-2 ">
          <h4>Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Submit Tickets</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-span-3 ">
          <div>
            <h4 className="pb-2">Newsletter</h4>
            <p className="py-1">Subscribe newsletter to get updates.</p>
          </div>
          <div>
            <input type="text" placeholder="Enter your email" className="p-3 w-full"/>
          </div>
          <div>
            <ul className="flex flex-row space-x-5 py-5">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
              <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-20 border-gray-300 my-4">
        <p className="relative inset-x-0 -bottom-32 mx-auto w-max text-white p-2">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <FontAwesomeIcon icon={faHeart} className="bg-green-900" /> by
          Colorlib
        </p>
      </div>
    </div>
  );
}
