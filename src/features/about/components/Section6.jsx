import visit2 from "../../../assets/visit2.jpg";

export default function Secton6() {
  return (
    // <div>
    <div className="grid sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-7">
        <img src={visit2} alt="" />
      </div>
      <div className="bg-emerald-600 sm:col-span-5 py-5">
        <div className="sm:w-8/12 flex flex-col px-5 sm:px-0 sm:pl-14 pt-7">
          <a
            href="#"
            className="font-bold text-lg sm:text-3xl pb-3 sm:pb-8 text-white"
          >
            TRUSTED BY OVER 6000+ STUDENTS
          </a>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidun py-8t malesuada massa.
          </p>
          <p className="text-gray-200 py-8">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
          <a href="#" className="underline text-white font-bold pb-10">
            Join Now
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
