import visit2 from "../../../assets/visit2.jpg";

export default function Secton3() {
  return (
    // <div>
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <img src={visit2} alt="" />
      </div>
      <div className=" bg-emerald-600 col-span-6">
        <div className="w-8/12 flex flex-col pl-14 pt-7">
          <a href="#" className="font-bold text-3xl pb-8 text-white">
            TRUSTED BY OVER 6000+ STUDENTS
          </a>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidun py-8t malesuada massa.
          </p>
          <p className="text-gray-200 py-6">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
          <a href="#" className="underline text-white font-bold">
            Join Now
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
