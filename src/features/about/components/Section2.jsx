import about1 from "../../../assets/about1.jpg";

export default function Section2() {
  return (
    <div className="grid grid-cols-2 px-28 bg-amber-50">
      <div className="py-28">
        <img src={about1} alt="" />
      </div>
      <div className="flex flex-col py-24 pl-32 leading-loose">
        <h2 className="font-bold text-4xl text-gray-700">
          A COMPREHENSIVE TEACHING APPROACH
        </h2>
        <p className=" py-8  text-gray-500 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
        </p>
        <p className="  text-gray-500 font-bold">
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
