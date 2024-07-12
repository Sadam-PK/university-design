import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section3() {
  return (
    <div className="flex flex-row bg-emerald-50 box-border">
      {/* ---------- left side of section */}
      <div className="px-10 w-full bg-emerald-50">
        <h2 className="py-10 font-bold text-4xl text-gray-800">
          ESSENTIAL RESOURCES
        </h2>
        <p className="text-lg text-gray-500">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. <br />
          Integer efficitur tellus metus, sed feugiat leo posuere.
        </p>
        {/* ---------- mini divs ----------- */}

        <div
          className="flex flex-row border border-gray-300 p-5 mt-5
       hover:bg-emerald-50 hover:border-transparent group"
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
              className="border border-emerald-700 transition duration-500
             text-emerald-700 group-hover:text-white rounded-full p-5
              group-hover:bg-emerald-700"
            />
          </div>
        </div>

        <div
          className="flex flex-row border border-gray-300 p-5 mt-5
       hover:bg-emerald-50 hover:border-transparent group"
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
              className="border border-emerald-700 transition duration-500
             text-emerald-700 group-hover:text-white rounded-full p-5
              group-hover:bg-emerald-700"
            />
          </div>
        </div>

        <div
          className="flex flex-row border border-gray-300 p-5 mt-5
       hover:bg-emerald-50 hover:border-transparent group"
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
              className="border border-emerald-700 transition duration-500
            text-emerald-700 group-hover:text-white rounded-full p-5
             group-hover:bg-emerald-700"
            />
          </div>
        </div>
      </div>
      {/* ------ background ------- */}
      <div className="background2 bg-emerald-50" />
    </div>
  );
}
