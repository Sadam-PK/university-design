// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section3() {
  return (
    <div className="grid sm:grid-cols-12 px-3 sm:px-20">
      <div className="grid col-span-8 sm:py-3  border-b">
        <h2 className="font-bold text-2xl py-5 sm:py-0 sm:ml-10 text-gray-700">
          Get in Touch
        </h2>

        {/* ----------------- web contact form --------------- */}
        <div
          className="sm:p-10 sm:mr-10 
          text-gray-500 font-light mb-14 sm:block hidden"
        >
          <div className="flex flex-col py-2">
            <textarea
              type="textarea"
              className="border p-3 h-40 mb-2"
              placeholder="Enter Message"
            />
          </div>

          <div className="flex flex-row py-2 w-auto">
            <input
              type="text"
              className="border p-3 w-1/2 mr-2"
              placeholder="Enter name"
            />
            <input
              type="text"
              className="border p-3 w-1/2 ml-2"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col py-2">
            <input
              type="text"
              className="border  p-3"
              placeholder="Enter Subject"
            />
          </div>

          <button
            className=" h-auto border-2 border-emerald-600  sm:border p-3 
            rounded-md hover:bg-white
          hover:text-black sm:w-32 sm:mt-5 text-emerald-600 border-solid 
           font-mukta "
          >
            SEND
          </button>
        </div>

        {/* ----------------- mob contact form --------------- */}
        <div
          className="sm:p-10 sm:mr-10 
          text-gray-500 font-light mb-14 sm:hidden block"
        >
          <div className="flex flex-col py-2">
            <textarea
              type="textarea"
              className="border p-3 h-40 mb-2"
              placeholder="Enter Message"
            />
          </div>

          <div className="flex flex-row py-2 w-auto">
            <input
              type="text"
              className="border p-3 w-full"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-row py-2 w-auto">
            <input
              type="text"
              className="border p-3 w-full"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col py-2">
            <input
              type="text"
              className="border  p-3"
              placeholder="Enter Subject"
            />
          </div>

          <button
            className=" h-auto border border-emerald-400  sm:border p-3 
            rounded-md hover:bg-white
          hover:text-black sm:w-32 mt-5 text-emerald-400 border-solid 
           font-mukta w-32"
          >
            SEND
          </button>
        </div>
      </div>

      {/* -----------------address --------------- */}

      <div className="grid sm:col-span-4 sm:justify-center h-80 sm:h-64 pt-10 sm:pt-0 sm:mt-20">
        <div className="flex flex-row items-center">
          <span className="px-5 flex">
            <FontAwesomeIcon icon={faHouse} className="h-6 text-gray-600" />
          </span>
          <div>
            <h2>Buttonwood, California.</h2>
            <p className=" text-gray-500 text-sm">Rosemead, CA 91770</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <span className="px-5">
            <FontAwesomeIcon icon={faPhone} className="h-6  text-gray-600" />
          </span>
          <div>
            <h2>+1 253 565 2365</h2>
            <p className=" text-gray-500 text-sm">Mon to Fri 9am to 6pm</p>
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <span className="px-5">
            <FontAwesomeIcon icon={faEnvelope} className="h-6  text-gray-600" />
          </span>
          <div>
            <h2>support@colorlib.com</h2>
            <p className=" text-gray-500 text-sm">
              Send us your query anytime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
