import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section3() {
  return (
    <div className="sm:flex sm:flex-row py-0 sm:py-0">
      {/* ---------- left side of section */}
      <div className="px-5 sm:px-10 p-10 sm:py-0 sm:px-30 w-full bg-emerald-50">
        <h2 className="py-7 font-bold text-xl sm:text-4xl text-gray-800">
          ESSENTIAL RESOURCES
        </h2>
        <p className="text-lg text-gray-500">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. <br />
          Integer efficitur tellus metus, sed feugiat leo posuere.
        </p>

        {/* ---------- mini divs ----------- */}
        {/* 1st */}
        <div
          className="flex  px-5 flex-row border border-gray-300 sm:px-5 py-3 mt-5
         hover:bg-emerald-100 hover:border-transparent group items-center"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">First year students</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
            <div
              className="w-20 h-auto flex sm:flex-row flex-col 
          justify-center items-center sm:hidden"
            >
              <p
                className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
              >
                ＞
              </p>
            </div>
          </div>

          <div
            className="w-20 h-auto  sm:flex-row flex-col 
          justify-center items-center hidden sm:block"
          >
            <p
              className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
            >
              ＞
            </p>
          </div>
        </div>
        {/* 2nd */}

        <div
          className="flex  px-5 flex-row border border-gray-300 sm:px-5 py-3 mt-5
         hover:bg-emerald-100 hover:border-transparent group items-center"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Tuition & fees</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
            <div
              className="w-20 h-auto flex sm:flex-row flex-col 
          justify-center items-center sm:hidden"
            >
              <p
                className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
              >
                ＞
              </p>
            </div>
          </div>

          <div
            className="w-20 h-auto  sm:flex-row flex-col 
          justify-center items-center hidden sm:block"
          >
            <p
              className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
            >
              ＞
            </p>
          </div>
        </div>
        {/* 3rd */}

        <div
          className="flex  px-5 flex-row border border-gray-300 sm:px-5 py-3 mt-5
         hover:bg-emerald-100 hover:border-transparent group items-center"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">International students</h2>
            <p className="py-3">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </p>
            <div
              className="w-20 h-auto flex sm:flex-row flex-col 
          justify-center items-center sm:hidden"
            >
              <p
                className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
              >
                ＞
              </p>
            </div>
          </div>

          <div
            className="w-20 h-auto  sm:flex-row flex-col 
          justify-center items-center hidden sm:block"
          >
            <p
              className="border border-emerald-700 transition duration-500
               text-emerald-700 group-hover:text-white rounded-full
                group-hover:bg-emerald-700 font-light px-5 py-4"
            >
              ＞
            </p>
          </div>
        </div>
      </div>
      {/* ------ background ------- */}
      <div className="background2 -mt-32 sm:-mt-0" />
    </div>
  );
}
