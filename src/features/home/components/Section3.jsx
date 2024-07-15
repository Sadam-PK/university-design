import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";

export default function Section3() {
  return (
    <div className="sm:w-10/12 flex flex-col justify-between  mx-auto sm:py-10">
      <div className="sm:w-8/12  sm:mx-auto text-center text-gray-600 py-10 px-5">
        <h2 className="font-bold text-gray-600 text-xl sm:text-4xl py-5">
          PROGRAMS WE OFFER
        </h2>
        <p className=" text-gray-500">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
          Morbi vitae tincidunt mi, et malesuada massa.
        </p>
      </div>
      {/* -------------parent div------------ */}
      <div className="sm:flex sm:flex-row justify-center sm:gap-5 px-3 space-y-5 sm:space-y-0">
        {/* -------------left child div------------ */}

        <div className="p-5 flex flex-col border-gray-200 border-2">
          <div>
            <img src={blog1} alt="" width="" />
          </div>
          <div className="flex flex-col py-3 sm:px-3">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl py-3">
              Facilty of Science
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600 py-3">
              Learn More
            </a>
          </div>
        </div>

        {/* -------------right child div------------ */}

        <div className="p-5 flex flex-col border-gray-200 border-2">
          <div>
            <img src={blog2} alt="" width="" />
          </div>
          <div className="flex flex-col sm:px-3 py-3">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl py-3">
              Faculty of Arts
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600 py-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
