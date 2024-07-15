import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog3 from "../../../assets/blog3.jpg.webp";
import blog4 from "../../../assets/blog4.jpg.webp";

export default function Section2() {
  return (
    <div className="sm:w-10/12 flex flex-col justify-between  mx-auto py-5 sm:py-10">
      <div className="px-5 sm:px-0 sm:w-8/12  mx-auto text-center
       text-gray-600 pb-5 sm:py-10">
        <h2 className="font-bold text-xl sm:text-4xl py-5">PROGRAMS WE OFFER</h2>
        <p className="">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
          Morbi vitae tincidunt mi, et malesuada massa.
        </p>
      </div>

      {/*------------ sub divs------ */}
      <div className="px-3 sm:px-0 flex flex-col sm:flex-row justify-center gap-5">
        <div className="to-blue-400 p-5 border-gray-200 border-2">
          <div>
            <img src={blog1} alt="" width="" />
          </div>
          <div className="flex flex-col p-5">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl">
              Facilty of Science
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600">
              Learn More
            </a>
          </div>
        </div>
        <div className="p-5  border-gray-200 border-2">
          <div>
            <img src={blog2} alt="" width="" />
          </div>
          <div className="flex flex-col p-5">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl">
              Faculty of Arts
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="h-6"/>

      <div className="px-3 sm:px-0 flex flex-col sm:flex-row justify-center gap-5">
        <div className="to-blue-400 p-5 border-gray-200 border-2">
          <div>
            <img src={blog3} alt="" width="" />
          </div>
          <div className="flex flex-col p-5">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl">
              Facilty of Science
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600">
              Learn More
            </a>
          </div>
        </div>
        <div className="p-5  border-gray-200 border-2">
          <div>
            <img src={blog4} alt="" width="" />
          </div>
          <div className="flex flex-col p-5">
            <h2 className=" text-gray-700 hover:text-emerald-600 font-bold text-xl">
              Faculty of Arts
            </h2>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="underline text-emerald-600">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
