import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import {
  faForward,
  faForwardFast,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { faFastForward } from "@fortawesome/free-solid-svg-icons/faFastForward";
import { faStepForward } from "@fortawesome/free-solid-svg-icons/faStepForward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section4() {
  return (
    <div className="flex flex-row ">
      {/* ---------- left side of section */}
      <div className="px-10 w-full bg-gray-50">
        <h2 className="py-5">ESSENTIAL RESOURCES</h2>
        <p>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. <br />
          Integer efficitur tellus metus, sed feugiat leo posuere.
        </p>
        {/* ---------- mini divs ----------- */}

        <div
          className="flex flex-row border-2 border-gray-200 p-5 mt-5
         hover:bg-emerald-200"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">First year students</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
          </div>
          <div className="w-20 h-auto flex justify-center items-center">
            <FontAwesomeIcon
              icon={faForward}
              className="border-2 border-emerald-500 transition duration-500
               text-emerald-500 hover:text-white rounded-full p-5 hover:bg-emerald-500"
            />
          </div>
        </div>

        <div
          className="flex flex-row border-2 border-gray-200 p-5 mt-5
         hover:bg-emerald-200"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Tuition & fees</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
          </div>
          <div className="w-20 h-auto flex justify-center items-center">
            <FontAwesomeIcon
              icon={faForward}
              className="border-2 border-emerald-500 transition duration-500
               text-emerald-500 hover:text-white rounded-full p-5 hover:bg-emerald-500"
            />
          </div>
        </div>

        <div
          className="flex flex-row border-2 border-gray-200 p-5 mt-5
         hover:bg-emerald-200"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">International students</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
          </div>
          <div className="w-20 h-auto flex justify-center items-center">
            <FontAwesomeIcon
              icon={faForward}
              className="border-2 border-emerald-500 transition duration-500
               text-emerald-500 hover:text-white rounded-full p-5 hover:bg-emerald-500"
            />
          </div>
        </div>
      </div>
      {/* ------ background ------- */}
      <div className="background2" />
    </div>
  );
}
