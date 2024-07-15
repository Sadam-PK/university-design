import about1 from "../../../assets/about1.jpg";

export default function Section2() {
  return (
    <div className="sm:grid grid-cols-2 px-3 sm:px-28 bg-red-50">
      <div className="py-10 sm:py-28">
        <img src={about1} alt="" />
      </div>
      <div className="sm:flex flex-col sm:py-24 sm:pl-28 leading-loose pb-10 px-3">
        <h2 className="font-bold text-xl sm:text-4xl text-gray-700">
          A COMPREHENSIVE TEACHING APPROACH
        </h2>
        <p className=" py-5 sm:py-8  text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
        </p>
        <p className="  text-gray-500 text-lg pb-5 sm:pb-0">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
          Morbi vitae tincidunt mi, et malesuada massa.
        </p>
        <a href="#" className="text-emerald-700 font-bold underline mt-10">
          Learn more
        </a>
      </div>
    </div>
  );
}
